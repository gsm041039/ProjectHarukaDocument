// 🎤 粵語語音輸入：用瀏覽器內置嘅語音辨識（Chrome／Edge 支援 zh-HK），講完自動填入輸入框。冇支援就唔顯示個掣。
export function micButton(h, target, { lang = "zh-HK" } = {}) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  let rec = null;
  const btn = h("button", { class: "mic-btn", title: "講嘢代替打字（再撳一下停）", onclick: (e) => { e.preventDefault(); rec ? rec.stop() : start(); } }, "🎤");
  const start = () => {
    rec = new SR();
    rec.lang = lang;
    rec.interimResults = true;
    rec.continuous = true;
    const base = target.value ? target.value.replace(/\s*$/, " ") : "";
    let finalText = "";
    rec.onresult = (ev) => {
      let interim = "";
      for (let i = ev.resultIndex; i < ev.results.length; i++) {
        const r = ev.results[i];
        if (r.isFinal) finalText += r[0].transcript; else interim += r[0].transcript;
      }
      target.value = base + finalText + interim;
      target.dispatchEvent(new Event("input"));
    };
    rec.onend = () => { rec = null; btn.classList.remove("on"); target.focus(); };
    rec.onerror = () => { rec = null; btn.classList.remove("on"); };
    rec.start();
    btn.classList.add("on");
  };
  return btn;
}
