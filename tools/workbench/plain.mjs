// 人話層：將寫畀 AI 睇嘅紀錄（夾住編號、路徑、英文 stage 名）改寫成作者一眼睇得明嘅一句白話。
// Claude 用 Haiku；Codex 用所選／預設 model。兩邊都冇工具、唔讀 CLAUDE.md；結果按原文 hash 存檔，原文唔變就唔會再收費。
import fs from "node:fs";
import crypto from "node:crypto";
import { PROVIDER_CLAUDE, normalizeProvider } from "./providers/provider-contract.mjs";

export function createPlain(FILE, runPrompt) {
  let cache = {};
  try { cache = JSON.parse(fs.readFileSync(FILE, "utf8")); } catch {}
  const key = (provider, t) => crypto.createHash("sha1").update(provider + "\0" + t).digest("hex").slice(0, 16);
  const legacyKey = (t) => crypto.createHash("sha1").update(t).digest("hex").slice(0, 16);
  let chain = Promise.resolve(); // ponytail: one batch at a time; parallel batches if pages feel slow

  async function rewrite(texts, provider, model = "") {
    const prompt = `以下每項係寫畀 AI 睇嘅工作紀錄（一個遊戲故事項目）。逐項改寫成作者一眼睇得明嘅廣東話白話，一句、最多 30 字：講件事係咩、而家要做咩。
唔准出現任何編號（QQ-、CDL-、E-01、M5、B7、P01、v4.1、Batch 6、Stage 11 等）、檔名、路徑、英文術語（角色名同 Act I–IV 可以保留）。唔好加「呢項係」之類開頭。
只輸出一個 JSON object：key＝輸入序號（"0"、"1"…），value＝改寫。

${JSON.stringify(Object.fromEntries(texts.map((x, i) => [i, x])))}`;
    const result = await runPrompt({
      provider, prompt, model: model || (provider === PROVIDER_CLAUDE ? "haiku" : ""),
      claudeOptions: { settingSources: [], allowedTools: [], maxTurns: 1, persistSession: false },
    });
    const out = result.text || "";
    const obj = JSON.parse(out.slice(out.indexOf("{"), out.lastIndexOf("}") + 1));
    return texts.map((_, i) => (typeof obj[i] === "string" && obj[i].trim() ? obj[i].trim() : null)); // missing ones retry next time
  }

  // returns {text: plain} for every text; uncached ones are rewritten in batches of 15
  async function get(texts, provider = PROVIDER_CLAUDE, model = "") {
    provider = normalizeProvider(provider);
    texts = [...new Set(texts.map((t) => String(t || "").trim()).filter(Boolean))].slice(0, 120);
    if (provider === PROVIDER_CLAUDE) for (const text of texts) {
      const current = key(provider, text), legacy = legacyKey(text);
      if (!(current in cache) && legacy in cache) cache[current] = cache[legacy];
    }
    const todo = texts.filter((t) => !(key(provider, t) in cache));
    for (let i = 0; i < todo.length; i += 15) {
      const part = todo.slice(i, i + 15);
      chain = chain.then(async () => {
        const left = part.filter((t) => !(key(provider, t) in cache));
        if (!left.length) return;
        const res = await rewrite(left.map((t) => t.slice(0, 600)), provider, model);
        left.forEach((t, j) => res[j] && (cache[key(provider, t)] = res[j]));
        fs.writeFileSync(FILE, JSON.stringify(cache));
      }).catch((e) => console.error("plain:", e.message));
      await chain;
    }
    return Object.fromEntries(texts.map((t) => [t, cache[key(provider, t)]]).filter(([, v]) => v));
  }
  return { get, key };
}
