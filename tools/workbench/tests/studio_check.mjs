// Run: WORKBENCH_PORT=4399 node server.mjs  then  node tests/studio_check.mjs [real]   (real = live AI, costs money)
const B = "http://localhost:4399/api/studio/works", real = process.argv[2] === "real";
const call = async (p, body) => { const r = await fetch(B + p, body === undefined ? {} : { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) }); const j = await r.json(); if (!r.ok) throw new Error(p + " " + j.error); return j; };
const ok = (c, m) => { if (!c) throw new Error("FAIL " + m); console.log("ok", m); };
let w = await call("", { title: "空教室（測試）", ref: "用戶例子", text: "晴香推開教室門，發現入面空無一人。佢停低，冇即刻離開。" });
w = await call(`/${w.id}/propose`, { mock: !real, direction: real ? "想有一案係純留白" : "" });
ok(w.proposals.length >= 2 && w.proposals.every((p) => p.cuts.length), `proposals ${w.proposals.map((p) => p.name + ":" + p.cuts.length)}`);
ok(real || w.proposals.every((p) => p.meta.mock), "mock is labelled");
w = await call(`/${w.id}/adopt`, { proposalId: w.proposals[0].id, reason: "test" });
ok(w.board.cuts.length && w.board.version === 1, "adopt → board v1");
w = await call(`/${w.id}/pick`, { picks: [{ proposalId: w.proposals[1].id, cutId: w.proposals[1].cuts[0].id }], reason: "mix" });
w = await call(`/${w.id}/cut`, { cutId: w.board.cuts[0].id, patch: { duration: 4 }, reason: "t" });
ok(w.board.cuts[0].duration === 4, "edit cut");
const ids = w.board.cuts.map((c) => c.id).reverse(); w = await call(`/${w.id}/reorder`, { ids }); ok(w.board.cuts[0].id === ids[0], "reorder");
w = await call(`/${w.id}/restore`, { v: 1 }); ok(w.board.cuts.length === w.versions[0].cuts.length, "restore v1");
if (real) { const r = await call(`/${w.id}/revise`, { cutId: w.board.cuts[0].id, instruction: "鏡頭再低啲" }); ok(r.note, "AI revise: " + r.note); }
const ev = await call(`/${w.id}/events`); ok(ev.length >= 6, "events " + ev.map((e) => e.type).join(","));
console.log("work", w.id);
