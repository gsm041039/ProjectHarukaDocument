// 人話：列表顯示 AI 改寫過嘅一句白話（server /api/plain，Haiku，存檔）；未返之前先顯示刪走編號／路徑嘅原文。
// 滑鼠停喺上面睇原文；撳開詳情都係原文。
const CODE = /(?<![A-Za-z])(?:v\d+(?:\.\d+)*|[A-Z]{1,4}-?[A-Z]?\d+(?:\.\d+)?[a-z]?(?:-[A-Z]?\d+)*|batch\s*\d+|stage\s*\d+[a-z]?|phase\s*\d+)(?![A-Za-z0-9])/gi;
export const strip = (t) => String(t || "").replace(/`[^`]*`/g, "").replace(/[\w./\-]+\.(md|html|py|json|mjs|js)\b/g, "").replace(CODE, "")
  .replace(/[（(]\s*[／/、,，;；:：\s#]*[)）]/g, "").replace(/\s*[—–-]\s*[:：]\s*/g, " — ").replace(/^[\s:：—\-|｜]+/, "").replace(/\s{2,}/g, " ").trim();

const done = {};
let queue = new Map(), timer = null;
export function plain(h, text, cls = "") {
  const raw = String(text || "").trim();
  const el = h("span", { class: "plain " + cls, title: raw });
  el.textContent = done[raw] || strip(raw) || raw;
  if (raw && !done[raw]) { if (!queue.has(raw)) queue.set(raw, []); queue.get(raw).push(el); timer ||= setTimeout(flush, 80); }
  return el;
}
async function flush() {
  const q = queue; queue = new Map(); timer = null;
  const keys = [...q.keys()];
  for (let i = 0; i < keys.length; i += 15) // one request per server batch, so the first lines show up early
    fetch("/api/plain", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ texts: keys.slice(i, i + 15) }) })
      .then((r) => r.json()).catch(() => ({}))
      .then((res) => { for (const [t, v] of Object.entries(res)) { done[t] = v; for (const e of q.get(t) || []) e.textContent = v; } });
}
