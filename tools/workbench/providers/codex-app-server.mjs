// Codex app-server adapter. Provider-specific RPC and history are normalized
// here so Workbench routes can consume one event contract.
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { internalQuestionCodes, PROVIDER_CODEX } from "./provider-contract.mjs";

const CLIENT_VERSION = "1.0.0";
const RPC_TIMEOUT_MS = 30_000;
const START_TIMEOUT_MS = 20_000;

function resolveCodexCommand(command) {
  const configured = String(command || "codex").trim().replace(/^"(.*)"$/, "$1");
  if (configured !== "codex" && configured.toLowerCase() !== "codex.exe") return configured;
  const localAppData = process.env.LOCALAPPDATA || (process.env.USERPROFILE ? path.join(process.env.USERPROFILE, "AppData", "Local") : "");
  if (process.platform === "win32" && localAppData) {
    const root = path.join(localAppData, "OpenAI", "Codex", "bin");
    try {
      const candidates = fs.readdirSync(root, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => path.join(root, entry.name, "codex.exe"))
        .filter((file) => fs.existsSync(file))
        .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
      if (candidates.length) return candidates[0];
    } catch {}
  }
  return configured;
}

function errorText(error, command = "codex") {
  if (error?.code === "ENOENT") return `搵唔到 Codex CLI（${String(error.path || command).slice(0, 180)}）；請確認已安裝 Codex，或將 WORKBENCH_CODEX_CLI 設為 codex.exe 完整路徑。`;
  return String(error?.message || error || "Codex app-server 連線失敗").slice(0, 300);
}

function serverError(message) {
  const error = new Error(message?.error?.message || "Codex app-server 回應錯誤");
  error.code = message?.error?.code;
  return error;
}

function safeRequestFallback(method) {
  if (method === "item/commandExecution/requestApproval") return { decision: "decline" };
  if (method === "item/fileChange/requestApproval") return { decision: "decline" };
  if (method === "item/tool/requestUserInput") return { answers: {} };
  if (method === "item/permissions/requestApproval") return { permissions: {}, scope: "turn" };
  if (method === "mcpServer/elicitation/request") return { action: "decline", content: null, _meta: null };
  return undefined;
}

function userText(items) {
  if (typeof items === "string") return items;
  if (!Array.isArray(items)) return "";
  return items.filter((part) => part?.type === "text").map((part) => part.text || "").join("");
}

function toolPresentation(item) {
  if (!item || typeof item !== "object") return null;
  if (item.type === "commandExecution") return { name: "Bash", input: { command: item.command, cwd: item.cwd } };
  if (item.type === "fileChange") {
    const first = item.changes?.[0]?.path || "";
    return { name: "Edit", input: { file_path: first, description: "更新 " + (item.changes?.length || 0) + " 個檔案" } };
  }
  if (item.type === "mcpToolCall") return { name: item.tool || "MCP", input: { description: item.server ? item.server + " · " + item.tool : item.tool, arguments: item.arguments } };
  if (item.type === "dynamicToolCall") return { name: item.tool || "Tool", input: { description: item.tool, arguments: item.arguments } };
  if (item.type === "collabAgentToolCall") return { name: "Agent", input: { description: item.prompt || "Codex 助手" } };
  if (item.type === "webSearch") return { name: "WebSearch", input: { description: item.query || "搜尋" } };
  if (item.type === "imageView") return { name: "Read", input: { file_path: item.path } };
  return null;
}

function normalizeHistory(thread) {
  const events = [];
  for (const turn of thread?.turns || []) {
    for (const item of turn.items || []) {
      if (item.type === "userMessage") {
        const text = userText(item.content);
        if (text.trim()) events.push({ kind: "user", text });
      } else if (item.type === "agentMessage" && item.text?.trim()) {
        events.push({ kind: "text", text: item.text });
      } else {
        const tool = toolPresentation(item);
        if (tool) events.push({ kind: "tool", id: item.id, ...tool });
      }
    }
  }
  return events;
}

function inputAnswers(questions, result) {
  const answers = {};
  for (const question of questions || []) {
    const selected = result?.answers?.[question.question] ?? result?.answers?.[question.id];
    const values = selected == null || selected === "" ? [] : Array.isArray(selected) ? selected : [selected];
    const response = result?.response ? [result.response] : values;
    answers[question.id] = { answers: response.map((value) => String(value)) };
  }
  return { answers };
}

function codexQuestions(params) {
  return (params.questions || []).map((question) => ({
    header: question.header || "Codex 想你決定",
    question: question.question || question.header || "請選擇",
    multiSelect: false,
    options: (question.options || []).map((option) => ({ label: option.label, description: option.description || "" })),
  }));
}

export class CodexAppServer {
  constructor({ command = process.env.WORKBENCH_CODEX_CLI || "codex", spawnProcess = spawn } = {}) {
    this.command = resolveCodexCommand(command);
    this.spawnProcess = spawnProcess;
    this.child = null;
    this.readyPromise = null;
    this.initialized = false;
    this.nextId = 1;
    this.pending = new Map();
    this.sessions = new Map();
    this.lineBuffer = "";
    this.closedError = null;
    this.serverInfo = null;
  }

  async connect() {
    if (this.initialized) return this.serverInfo;
    if (this.readyPromise) return this.readyPromise;
    this.readyPromise = (async () => {
      this.closedError = null;
      this.lineBuffer = "";
      let child;
      try {
        child = this.spawnProcess(this.command, ["app-server", "--listen", "stdio://"], {
          cwd: process.cwd(), windowsHide: true, stdio: ["pipe", "pipe", "ignore"],
        });
      } catch (error) {
        throw new Error(errorText(error, this.command));
      }
      this.child = child;
      child.stdout?.on("data", (chunk) => this.#read(chunk));
      child.once("error", (error) => this.#fail(new Error(errorText(error, this.command))));
      child.once("close", (code) => this.#fail(new Error(code == null ? "Codex app-server 已中斷" : "Codex app-server 已結束（" + code + "）")));
      await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error("啟動 Codex app-server 逾時")), START_TIMEOUT_MS);
        child.once("spawn", () => { clearTimeout(timer); resolve(); });
        child.once("error", (error) => { clearTimeout(timer); reject(new Error(errorText(error, this.command))); });
      });
      this.serverInfo = await this.request("initialize", {
        clientInfo: { name: "haruka-workbench", title: "Haruka Workbench", version: CLIENT_VERSION },
        capabilities: { experimentalApi: true, requestAttestation: false },
      }, START_TIMEOUT_MS);
      this.#notify("initialized");
      this.initialized = true;
      return this.serverInfo;
    })().catch((error) => {
      this.readyPromise = null;
      this.initialized = false;
      this.#fail(error);
      throw error;
    });
    return this.readyPromise;
  }

  request(method, params = {}, timeoutMs = RPC_TIMEOUT_MS) {
    if (!this.child?.stdin?.writable) return Promise.reject(this.closedError || new Error("Codex app-server 未啟動"));
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error("Codex app-server 請求逾時：" + method));
      }, timeoutMs);
      this.pending.set(id, { resolve, reject, timer, method });
      try { this.child.stdin.write(JSON.stringify({ id, method, params }) + "\n"); }
      catch (error) {
        clearTimeout(timer);
        this.pending.delete(id);
        reject(new Error(errorText(error, this.command)));
      }
    });
  }

  #notify(method, params) {
    if (!this.child?.stdin?.writable) return;
    const message = params === undefined ? { method } : { method, params };
    this.child.stdin.write(JSON.stringify(message) + "\n");
  }

  #read(chunk) {
    this.lineBuffer += chunk.toString("utf8");
    let newline;
    while ((newline = this.lineBuffer.indexOf("\n")) >= 0) {
      const line = this.lineBuffer.slice(0, newline).trim();
      this.lineBuffer = this.lineBuffer.slice(newline + 1);
      if (!line) continue;
      let message;
      try { message = JSON.parse(line); } catch { continue; }
      if (message.id != null && (Object.hasOwn(message, "result") || Object.hasOwn(message, "error"))) {
        const pending = this.pending.get(message.id);
        if (!pending) continue;
        this.pending.delete(message.id);
        clearTimeout(pending.timer);
        if (message.error) pending.reject(serverError(message));
        else pending.resolve(message.result);
      } else if (message.id != null && message.method) {
        this.#handleServerRequest(message);
      } else if (message.method) {
        const params = message.params || {};
        this.sessions.get(params.threadId)?.handleNotification(message.method, params);
      }
    }
  }

  async #handleServerRequest(message) {
    const params = message.params || {};
    const session = this.sessions.get(params.threadId);
    try {
      const result = session
        ? await session.handleServerRequest(message.method, params)
        : safeRequestFallback(message.method);
      if (result === undefined) {
        this.child?.stdin?.write(JSON.stringify({ id: message.id, error: { code: -32601, message: "Workbench does not support " + message.method } }) + "\n");
      } else {
        this.child?.stdin?.write(JSON.stringify({ id: message.id, result }) + "\n");
      }
    } catch {
      const fallback = safeRequestFallback(message.method);
      if (fallback === undefined)
        this.child?.stdin?.write(JSON.stringify({ id: message.id, error: { code: -32603, message: "Workbench could not handle " + message.method } }) + "\n");
      else this.child?.stdin?.write(JSON.stringify({ id: message.id, result: fallback }) + "\n");
    }
  }

  #fail(error) {
    const normalized = error instanceof Error ? error : new Error(errorText(error));
    const child = this.child;
    this.child = null;
    this.closedError = normalized;
    this.initialized = false;
    this.readyPromise = null;
    if (child && child.exitCode == null && !child.killed) child.kill();
    for (const [id, pending] of this.pending) {
      clearTimeout(pending.timer);
      pending.reject(normalized);
      this.pending.delete(id);
    }
    for (const session of this.sessions.values()) session.handleTransportError(normalized);
  }

  bind(session) {
    if (!session.threadId) throw new Error("Codex thread 未建立");
    this.sessions.set(session.threadId, session);
  }

  unbind(session) {
    if (session.threadId && this.sessions.get(session.threadId) === session) this.sessions.delete(session.threadId);
  }

  async shutdown() {
    const child = this.child;
    this.child = null;
    this.initialized = false;
    this.readyPromise = null;
    this.#fail(new Error("Workbench 已關閉 Codex app-server"));
    if (child && !child.killed) child.kill();
  }
}

let sharedAppServer;
export function getCodexAppServer(options) {
  sharedAppServer ||= new CodexAppServer(options);
  return sharedAppServer;
}

export class CodexSessionAdapter {
  constructor({
    cwd = process.cwd(), model = "", effort = "", readOnly = false, ephemeral = false,
    approvalPolicy, developerInstructions = "", appServer = getCodexAppServer(),
    askAuthor, onEvent = () => {}, onThread = () => {},
  } = {}) {
    this.provider = PROVIDER_CODEX;
    this.cwd = path.resolve(cwd);
    this.model = model || "";
    this.effort = effort || "";
    this.readOnly = !!readOnly;
    this.ephemeral = !!ephemeral;
    this.approvalPolicy = approvalPolicy || (this.readOnly ? "never" : "on-request");
    this.developerInstructions = developerInstructions;
    this.appServer = appServer;
    this.askAuthor = askAuthor;
    this.onEvent = onEvent;
    this.onThread = onThread;
    this.threadId = "";
    this.turnId = "";
    this.status = "idle";
    this.startedAt = 0;
    this.textByTurn = new Map();
    this.itemsById = new Map();
    this.pendingAuthorRequests = new Map();
    this.turnWaiters = [];
    this.disposed = false;
  }

  #emit(event) {
    try { this.onEvent({ t: Date.now(), provider: PROVIDER_CODEX, ...event }); } catch {}
  }

  #baseParams() {
    return {
      cwd: this.cwd,
      approvalPolicy: this.approvalPolicy,
      sandbox: this.readOnly ? "read-only" : "workspace-write",
      developerInstructions: this.developerInstructions || undefined,
      model: this.model || undefined,
    };
  }

  async start({ resumeThreadId, title } = {}) {
    await this.appServer.connect();
    const method = resumeThreadId ? "thread/resume" : "thread/start";
    const params = resumeThreadId
      ? { ...this.#baseParams(), threadId: String(resumeThreadId), excludeTurns: true }
      : { ...this.#baseParams(), ephemeral: this.ephemeral || undefined };
    const result = await this.appServer.request(method, params);
    this.threadId = result?.thread?.id || String(resumeThreadId || "");
    if (!this.threadId) throw new Error("Codex app-server 冇回傳 thread ID");
    this.appServer.bind(this);
    this.onThread(this.threadId, { provider: PROVIDER_CODEX, model: result?.model || this.model || "", effort: this.effort });
    if (title && !resumeThreadId) await this.rename(title).catch(() => {});
    this.#emit({ kind: "provider", provider: PROVIDER_CODEX, sessionId: this.threadId, model: result?.model || this.model || "" });
    return this.threadId;
  }

  async send(text) {
    if (!this.threadId) await this.start();
    const content = String(text || "");
    this.#emit({ kind: "user", text: content });
    this.status = "running";
    this.startedAt = Date.now();
    this.#emit({ kind: "status", status: "running" });
    try {
      const result = await this.appServer.request("turn/start", {
        threadId: this.threadId,
        input: [{ type: "text", text: content, text_elements: [] }],
        model: this.model || null,
        effort: this.effort || null,
        approvalPolicy: this.approvalPolicy,
      });
      if (result?.turn?.id) this.turnId = result.turn.id;
      return result?.turn || null;
    } catch (error) {
      this.status = "idle";
      this.#emit({ kind: "error", message: errorText(error) });
      this.#emit({ kind: "result", ok: false, ms: Date.now() - this.startedAt });
      this.#emit({ kind: "status", status: "idle" });
      throw error;
    }
  }

  async waitForTurn(timeoutMs = 300_000) {
    return new Promise((resolve, reject) => {
      const waiter = { resolve, reject, timer: setTimeout(() => {
        this.turnWaiters = this.turnWaiters.filter((entry) => entry !== waiter);
        reject(new Error("Codex turn 等候逾時"));
      }, timeoutMs) };
      this.turnWaiters.push(waiter);
    });
  }

  async interrupt() {
    if (!this.threadId || !this.turnId) return false;
    try { await this.appServer.request("turn/interrupt", { threadId: this.threadId, turnId: this.turnId }); return true; }
    catch (error) { this.#emit({ kind: "error", message: errorText(error) }); return false; }
  }

  async setModel(model) {
    this.model = String(model || "");
    this.#emit({ kind: "model", model: this.model });
    return this.model;
  }

  async setEffort(effort) {
    this.effort = String(effort || "");
    this.#emit({ kind: "effort", effort: this.effort });
    return this.effort;
  }

  async rename(title) {
    if (!this.threadId) return false;
    await this.appServer.request("thread/name/set", { threadId: this.threadId, name: String(title || "").slice(0, 120) });
    return true;
  }

  async history() {
    if (!this.threadId) return [];
    const turns = [];
    const seen = new Set();
    let cursor;
    do {
      const page = await this.appServer.request("thread/turns/list", {
        threadId: this.threadId, limit: 100, cursor, sortDirection: "asc", itemsView: "full",
      });
      turns.push(...(page?.data || []));
      cursor = page?.nextCursor || null;
      if (cursor && seen.has(cursor)) throw new Error("Codex 歷史紀錄重複頁碼");
      if (cursor) seen.add(cursor);
    } while (cursor);
    return normalizeHistory({ turns });
  }

  async listModels() {
    await this.appServer.connect();
    const items = [];
    let cursor;
    do {
      const page = await this.appServer.request("model/list", { limit: 100, cursor });
      for (const model of page?.data || []) items.push({
        value: model.model || model.id,
        label: model.displayName || model.model || model.id,
        description: model.description || "",
        reasoningEfforts: model.supportedReasoningEfforts || [],
        defaultEffort: model.defaultReasoningEffort || "",
        isDefault: !!model.isDefault,
      });
      cursor = page?.nextCursor || null;
    } while (cursor);
    return items;
  }

  async listThreads({ limit = 100, cwd = this.cwd } = {}) {
    await this.appServer.connect();
    const threads = [];
    let cursor;
    do {
      const page = await this.appServer.request("thread/list", { limit: Math.min(100, limit), cursor, cwd });
      threads.push(...(page?.data || []));
      cursor = page?.nextCursor || null;
    } while (cursor && threads.length < limit);
    return threads;
  }

  async usage() {
    await this.appServer.connect();
    const result = await this.appServer.request("account/rateLimits/read", { excludeResetCreditDetails: true });
    const snapshot = result?.rateLimitsByLimitId?.codex || result?.rateLimits || null;
    const win = (value) => value ? { pct: value.usedPercent, resets: typeof value.resetsAt === "number" ? value.resetsAt * 1000 : value.resetsAt } : null;
    if (!snapshot) return { unavailable: true };
    return { plan: snapshot.planType || "", five_hour: win(snapshot.primary), week: win(snapshot.secondary) };
  }

  async close() {
    if (this.disposed) return;
    this.disposed = true;
    for (const controller of this.pendingAuthorRequests.values()) controller.abort();
    this.pendingAuthorRequests.clear();
    this.appServer.unbind(this);
    for (const waiter of this.turnWaiters.splice(0)) {
      clearTimeout(waiter.timer);
      waiter.reject(new Error("Codex thread 已關閉"));
    }
  }

  handleTransportError(error) {
    if (this.disposed) return;
    for (const controller of this.pendingAuthorRequests.values()) controller.abort();
    this.pendingAuthorRequests.clear();
    const message = errorText(error);
    if (this.status === "running") {
      this.status = "idle";
      this.#emit({ kind: "error", message });
      this.#emit({ kind: "result", ok: false, ms: this.startedAt ? Date.now() - this.startedAt : 0 });
      this.#emit({ kind: "status", status: "idle" });
    }
    for (const waiter of this.turnWaiters.splice(0)) {
      clearTimeout(waiter.timer);
      waiter.reject(new Error(message));
    }
  }

  handleNotification(method, params) {
    if (this.disposed) return;
    if (method === "turn/started") {
      this.turnId = params.turn?.id || params.turnId || this.turnId;
      this.status = "running";
      this.#emit({ kind: "status", status: "running" });
      return;
    }
    if (method === "item/agentMessage/delta") {
      this.#emit({ kind: "delta", text: String(params.delta || "") });
      return;
    }
    if (method === "item/started") {
      if (params.item?.id) {
        this.itemsById.set(params.item.id, params.item);
        while (this.itemsById.size > 30) this.itemsById.delete(this.itemsById.keys().next().value);
      }
      const tool = toolPresentation(params.item);
      if (tool) {
        this.#emit({ kind: "tool", id: params.item.id, ...tool });
        if (tool.name === "Bash") this.#emit({ kind: "activity", text: "執行緊 " + String(tool.input.command || "").slice(0, 160) });
      }
      return;
    }
    if (method === "item/completed") {
      const item = params.item;
      if (item?.type === "agentMessage" && item.text?.trim()) {
        this.textByTurn.set(params.turnId, [...(this.textByTurn.get(params.turnId) || []), item.text]);
        this.#emit({ kind: "text", text: item.text });
      }
      if (item?.id) this.itemsById.delete(item.id);
      return;
    }
    if (method === "item/commandExecution/outputDelta") {
      this.#emit({ kind: "tool_output", id: params.itemId, text: params.delta || "" });
      return;
    }
    if (method === "turn/plan/updated") {
      this.#emit({ kind: "plan", plan: params.plan || [], explanation: params.explanation || "" });
      return;
    }
    if (method === "thread/tokenUsage/updated") {
      this.#emit({ kind: "usage", usage: params.tokenUsage || null });
      return;
    }
    if (method === "turn/completed") {
      const turn = params.turn || {};
      const turnId = turn.id || this.turnId;
      const result = {
        ok: turn.status === "completed",
        status: turn.status || "failed",
        ms: turn.durationMs ?? (this.startedAt ? Date.now() - this.startedAt : 0),
        text: (this.textByTurn.get(turnId) || []).join("\n\n"),
        error: turn.error?.message || "",
      };
      this.textByTurn.delete(turnId);
      for (const controller of this.pendingAuthorRequests.values()) controller.abort();
      this.pendingAuthorRequests.clear();
      this.status = "idle";
      this.turnId = "";
      if (!result.ok && result.error) this.#emit({ kind: "error", message: result.error });
      this.#emit({ kind: "result", ...result });
      this.#emit({ kind: "status", status: "idle" });
      for (const waiter of this.turnWaiters.splice(0)) { clearTimeout(waiter.timer); waiter.resolve(result); }
      return;
    }
    if (method === "warning" || method === "configWarning") {
      this.#emit({ kind: "note", text: params.message || params.warning || "Codex 提示一項設定訊息" });
    } else if (method === "error") {
      this.#emit({ kind: "error", message: String(params.message || "Codex app-server 發生錯誤").slice(0, 300) });
    }
  }

  async #requestAuthor(kind, payload, itemId) {
    if (typeof this.askAuthor !== "function") return kind === "approve"
      ? { behavior: "deny", message: "Workbench 未連接作者審批卡" }
      : { answers: {}, response: "請用白話重述呢條問題，並一次提供可以直接採用嘅建議。" };
    const controller = new AbortController();
    if (itemId) this.pendingAuthorRequests.set(itemId, controller);
    try { return await this.askAuthor(kind, payload, controller.signal); }
    catch { return kind === "approve"
      ? { behavior: "deny", message: "作者審批未完成" }
      : { answers: {}, response: "請用白話重述呢條問題，並一次提供可以直接採用嘅建議。" }; }
    finally { if (itemId && this.pendingAuthorRequests.get(itemId) === controller) this.pendingAuthorRequests.delete(itemId); }
  }

  async handleServerRequest(method, params) {
    if (method === "item/tool/requestUserInput") {
      const questions = codexQuestions(params);
      if (params.questions?.some((question) => question.isSecret))
        return inputAnswers(params.questions, { response: "請唔好透過 Workbench 索取密碼或秘密；改用已連接嘅安全憑證流程。" });
      const codes = internalQuestionCodes(questions);
      if (codes.length) return inputAnswers(params.questions, {
        response: "問題含有作者睇唔明嘅內部代號（" + codes.join("、") + "）。請將問題同所有選項改成白話，再重新詢問。",
      });
      return inputAnswers(params.questions, await this.#requestAuthor("ask", { questions, tool: "Codex" }, params.itemId));
    }
    if (method === "item/commandExecution/requestApproval") {
      const result = await this.#requestAuthor("approve", { tool: "Codex 執行指令", input: {
        command: [params.command, params.cwd ? "目錄：" + params.cwd : "", params.reason || ""].filter(Boolean).join("\n"),
        commandActions: params.commandActions || [],
      } }, params.itemId);
      return { decision: result?.behavior === "allow" ? "accept" : "decline" };
    }
    if (method === "item/fileChange/requestApproval") {
      const item = this.itemsById.get(params.itemId);
      let diffBudget = 7000;
      const changes = (item?.changes || []).map((change) => {
        const diff = String(change.diff || "").slice(0, diffBudget);
        diffBudget -= diff.length;
        return change.path + "（" + change.kind + "）" + (diff ? "\n" + diff : "");
      });
      const result = await this.#requestAuthor("approve", { tool: "Codex 修改檔案", input: {
        command: [params.reason || "Codex 申請檔案寫入權限", ...changes].join("\n"),
      } }, params.itemId);
      return { decision: result?.behavior === "allow" ? "accept" : "decline" };
    }
    if (method === "item/permissions/requestApproval") {
      const result = await this.#requestAuthor("approve", { tool: "Codex 申請額外權限", input: {
        command: [params.reason || "Codex 申請額外權限", "目錄：" + params.cwd, JSON.stringify(params.permissions || {})].join("\n"),
      } }, params.itemId);
      return result?.behavior === "allow"
        ? { permissions: params.permissions || {}, scope: "turn", strictAutoReview: true }
        : { permissions: {}, scope: "turn" };
    }
    if (method === "mcpServer/elicitation/request") {
      if (params.mode !== "form" || !params.requestedSchema?.properties)
        return { action: "decline", content: null, _meta: null };
      const fields = Object.entries(params.requestedSchema.properties);
      if (fields.some(([, schema]) => schema.type && schema.type !== "string"))
        return { action: "decline", content: null, _meta: null };
      const questions = fields.map(([name, schema]) => ({
        header: params.serverName || "外部工具想你決定",
        question: schema.title || schema.description || name,
        multiSelect: false,
        options: (schema.enum || []).map((value) => ({ label: String(value), description: "" })),
      }));
      const result = await this.#requestAuthor("ask", { questions, tool: params.serverName || "MCP" }, params.turnId || params.serverName);
      const content = {};
      fields.forEach(([name], index) => {
        const value = fields.length === 1 && result?.response ? result.response : result?.answers?.[questions[index].question];
        if (value != null && value !== "") content[name] = Array.isArray(value) ? value[0] : String(value);
      });
      const required = params.requestedSchema.required || [];
      if (required.some((name) => content[name] == null)) return { action: "decline", content: null, _meta: null };
      return { action: "accept", content, _meta: null };
    }
    return undefined;
  }
}

export async function runCodexPrompt({
  prompt, cwd, model = "", effort = "", readOnly = true,
  developerInstructions = "", onEvent, appServer, timeoutMs = 300_000,
} = {}) {
  const session = new CodexSessionAdapter({ cwd, model, effort, readOnly, ephemeral: true, developerInstructions, onEvent, appServer });
  try {
    await session.start();
    const completed = session.waitForTurn(timeoutMs);
    await session.send(prompt);
    const result = await completed;
    if (!result.ok) throw new Error(result.error || "Codex turn " + result.status);
    return { text: result.text, threadId: session.threadId, durationMs: result.ms };
  } catch (error) {
    if (session.turnId) await session.interrupt();
    throw error;
  } finally { await session.close(); }
}

export const codexHistoryEvents = normalizeHistory;
