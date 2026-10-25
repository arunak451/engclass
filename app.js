// Pesu Quest: 45-day English game. Content lives in verbs.js and days*.js.
(function () {
  "use strict";

  const DAYS = window.DAYS.slice().sort((a, b) => a.d - b.d);
  const VERBS = window.VERBS;
  const WORLDS = [
    { n: "World 1: Basics", from: 1, to: 9, c: "--w1", s: "Self intro, be verbs, articles, simple present" },
    { n: "World 2: Daily Talk", from: 10, to: 18, c: "--w2", s: "Tenses, questions, prepositions, comparisons" },
    { n: "World 3: Confidence", from: 19, to: 27, c: "--w3", s: "Present perfect, opinions, phone & polite English" },
    { n: "World 4: Professional", from: 28, to: 36, c: "--w4", s: "Passive, conditionals, email, meetings" },
    { n: "World 5: Interview Boss", from: 37, to: 45, c: "--w5", s: "Real interview answers and the final mock" }
  ];
  const RANKS = ["Chinna Thumbi", "Pesum Kili", "Word Hunter", "Grammar Guru", "Confident Kutty", "Office Star", "Interview Singam"];
  const STEPS = [
    { k: "words", n: "Words", m: "5 min" },
    { k: "verbs", n: "Verbs", m: "5 min" },
    { k: "grammar", n: "Grammar", m: "8 min" },
    { k: "speak", n: "Speak", m: "7 min" },
    { k: "boss", n: "Boss", m: "5 min" }
  ];
  const XP_PER_LEVEL = 300;
  const KEY = "pesuquest-v1";

  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const worldOf = (d) => WORLDS.find((w) => d >= w.from && d <= w.to);
  const verbsFor = (d) => VERBS.slice((d - 1) * 3, (d - 1) * 3 + 3);
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const today = () => new Date().toISOString().slice(0, 10);

  // ---------- State & storage ----------
  const fresh = () => ({ xp: 0, done: {}, steps: {}, streak: 0, best: 0, last: "", speaks: 0, perfect: 0, flash: 0, updated: 0 });
  let S = fresh();
  try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch (e) {}

  let dbRef = null, saveTimer = null;
  function save() {
    S.updated = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => { if (dbRef) dbRef.set(JSON.parse(JSON.stringify(S))).catch(() => {}); }, 1200);
  }
  // Signed-in viewers also keep progress in the artifact's private per-user store, so it follows them across devices.
  (async () => {
    if (!window.claude || !window.claude.use) return;
    try {
      const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
      if (!db || !user) return;
      const id = await user.id();
      if (!id) return;
      dbRef = db.doc("data/users/" + id + "/progress");
      const snap = await dbRef.get();
      const remote = snap.exists ? snap.data() : null;
      if (remote && (remote.xp || 0) > S.xp) { S = Object.assign(fresh(), JSON.parse(JSON.stringify(remote))); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} render(); }
      else if (S.xp > 0) save();
    } catch (e) { dbRef = null; }
  })();

  let sampleFn = null;
  (async () => { if (window.claude && window.claude.use) { try { sampleFn = await window.claude.use("sample"); if (view.tab === "mission" && view.step === 3) render(); } catch (e) {} } })();

  const isDone = (d) => !!S.done[d];
  const unlocked = (d) => d === 1 || isDone(d - 1);
  const nextDay = () => { for (const x of DAYS) if (!isDone(x.d)) return x.d; return 45; };
  const stepDone = (d, i) => !!(S.steps[d] && S.steps[d][i]);
  function addXp(n, msg) { S.xp += n; save(); paintBar(); if (msg) toast(msg + "  +" + n + " XP"); }
  function markStep(d, i) {
    S.steps[d] = S.steps[d] || [];
    if (!S.steps[d][i]) { S.steps[d][i] = true; addXp(10, STEPS[i].n + " done!"); }
  }

  // ---------- Badges ----------
  const BADGES = [
    { id: "first", ic: "🌱", n: "First Step", t: "Day 1 mudichitta", ok: () => isDone(1) },
    { id: "speak1", ic: "🎤", n: "First Speech", t: "Mudhal speaking mission", ok: () => S.speaks >= 1 },
    { id: "streak3", ic: "🔥", n: "3-Day Fire", t: "3 naal continuous", ok: () => S.best >= 3 },
    { id: "streak7", ic: "⚔️", n: "7-Day Warrior", t: "7 naal continuous", ok: () => S.best >= 7 },
    { id: "perfect", ic: "💯", n: "Perfect Boss", t: "Boss battle full marks", ok: () => S.perfect >= 1 },
    { id: "perfect5", ic: "👑", n: "Boss Crusher", t: "5 perfect boss battles", ok: () => S.perfect >= 5 },
    { id: "words100", ic: "📚", n: "100 Words", t: "20 days of words", ok: () => Object.keys(S.done).length >= 20 },
    { id: "flash", ic: "⚡", n: "Verb Flash 25", t: "Verb flash la 25 correct", ok: () => S.flash >= 25 },
    { id: "w1", ic: "🟢", n: "Basics Cleared", t: "World 1 complete", ok: () => worldDone(0) },
    { id: "w2", ic: "🔵", n: "Daily Talker", t: "World 2 complete", ok: () => worldDone(1) },
    { id: "w3", ic: "🟣", n: "Confidence Up", t: "World 3 complete", ok: () => worldDone(2) },
    { id: "w4", ic: "🟠", n: "Office Ready", t: "World 4 complete", ok: () => worldDone(3) },
    { id: "w5", ic: "🦁", n: "Interview Singam", t: "All 45 days!", ok: () => worldDone(4) }
  ];
  function worldDone(i) { const w = WORLDS[i]; for (let d = w.from; d <= w.to; d++) if (!isDone(d)) return false; return true; }

  // ---------- Speech ----------
  function speak(text) {
    try {
      if (!window.speechSynthesis) return toast("Indha browser la voice illa");
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      const v = speechSynthesis.getVoices().find((x) => /en-IN/i.test(x.lang)) || speechSynthesis.getVoices().find((x) => /^en/i.test(x.lang));
      if (v) u.voice = v;
      u.lang = v ? v.lang : "en-IN"; u.rate = 0.9;
      speechSynthesis.speak(u);
    } catch (e) {}
  }
  const sayBtn = (t) => `<button class="say" data-say="${esc(t)}" aria-label="Listen">🔊</button>`;

  // ---------- Top bar ----------
  function paintBar() {
    const lvl = Math.floor(S.xp / XP_PER_LEVEL) + 1;
    const rank = RANKS[Math.min(RANKS.length - 1, Math.floor((lvl - 1) / 2))];
    $("#chipLevel").textContent = "Lv " + lvl + " · " + rank;
    $("#chipXp").textContent = S.xp + " XP";
    $("#chipStreak").textContent = "🔥 " + S.streak + " day" + (S.streak === 1 ? "" : "s");
    $("#chipDays").textContent = Object.keys(S.done).length + "/45 days";
    $("#xpFill").style.width = ((S.xp % XP_PER_LEVEL) / XP_PER_LEVEL * 100) + "%";
  }
  let toastT;
  function toast(msg) {
    let t = $(".toast"); if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), 2200);
  }

  // ---------- Router ----------
  const view = { tab: "map", day: 1, step: 0, q: null, flash: null };
  const app = $("#app");
  function go(tab, extra) {
    Object.assign(view, { tab }, extra || {});
    document.querySelectorAll("#tabs button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.tab === (tab === "mission" ? "map" : tab))));
    stopMic(); render(); window.scrollTo({ top: 0 });
  }
  $("#tabs").addEventListener("click", (e) => { const b = e.target.closest("button[data-tab]"); if (b) go(b.dataset.tab); });

  function render() {
    paintBar();
    const r = { map: rMap, mission: rMission, words: rWords, verbs: rVerbs, grammar: rGrammar, badges: rBadges }[view.tab];
    app.innerHTML = r();
    if (view.tab === "mission") bindMission();
    if (view.tab === "words" || view.tab === "verbs") bindSearch();
  }

  // ---------- Map ----------
  function rMap() {
    const nd = nextDay(), D = DAYS[nd - 1], all = Object.keys(S.done).length === 45;
    let h = `<section class="hero"><div><div class="eyebrow" style="--wc:var(${worldOf(nd).c})">${all ? "Quest complete" : "Today's mission · Day " + nd}</div>
      <h1>${all ? "Nee ippo Interview Singam! 🦁" : esc(D.t)}</h1>
      <p>${all ? "Ella 45 days um mudichitta. Interview ku munnaadi Days 37-45 thirumba practice pannu." : esc(D.tg) + " · around 30 minutes"}</p></div>
      <button class="btn" data-day="${nd}">${all ? "Practise Day 45" : isStarted(nd) ? "Continue ▶" : "Start Day " + nd + " ▶"}</button></section>`;
    for (const w of WORLDS) {
      h += `<section class="world" style="--wc:var(${w.c})"><div class="world-head"><h2>${w.n}</h2><span>Days ${w.from}-${w.to} · ${w.s}</span></div><div class="path">`;
      for (let d = w.from; d <= w.to; d++) {
        const x = DAYS[d - 1], u = unlocked(d), done = isDone(d);
        h += `<button class="tile${done ? " done" : ""}${d === nd && !all ? " next" : ""}" data-day="${d}" ${u ? "" : "disabled"} aria-label="Day ${d}: ${esc(x.t)}${u ? "" : " (locked)"}">
          ${u ? (done ? '<span class="lock">⭐</span>' : "") : '<span class="lock">🔒</span>'}<span class="n">${d}</span><span class="t">${esc(x.t)}</span></button>`;
      }
      h += `</div></section>`;
    }
    return h;
  }
  const isStarted = (d) => S.steps[d] && S.steps[d].some(Boolean);
  app.addEventListener("click", (e) => {
    const t = e.target.closest("[data-day]");
    if (t && !t.disabled) { const d = +t.dataset.day; const s = S.steps[d] || []; let st = STEPS.findIndex((_, i) => !s[i]); if (st < 0) st = 0; go("mission", { day: d, step: st, q: null }); return; }
    const s = e.target.closest("[data-say]"); if (s) speak(s.dataset.say);
  });

  // ---------- Mission ----------
  function rMission() {
    const D = DAYS[view.day - 1], w = worldOf(D.d);
    let h = `<div style="--wc:var(${w.c})"><div class="mission-top"><button class="btn ghost" data-act="back">← Map</button>
      <div><div class="eyebrow">${w.n} · Day ${D.d}</div><h1>${esc(D.t)}</h1></div></div>
      <div class="steps">${STEPS.map((s, i) => `<button data-step="${i}" class="${i === view.step ? "on" : ""} ${stepDone(D.d, i) ? "ok" : ""}"><b>${stepDone(D.d, i) ? "✓ " : ""}${s.n}</b>${s.m}</button>`).join("")}</div>
      <section class="panel" id="panel">${[stWords, stVerbs, stGrammar, stSpeak, stBoss][view.step](D)}</section></div>`;
    return h;
  }
  const nextBtn = (label) => `<div class="nav"><span></span><button class="btn" data-act="next">${label || "Done, next step ▶"}</button></div>`;

  function stWords(D) {
    return `<div><h2>Word Hunt</h2><p class="lead">Inniki 5 pudhu words. 🔊 click panni kelu, apram example ah 2 thadavai sathama padi.</p></div>
      <div class="cards">${D.w.map((x) => `<div class="card"><div class="w"><strong>${esc(x[0])}</strong>${sayBtn(x[0] + ". " + x[2])}</div><div class="m">${esc(x[1])}</div><div class="e">${esc(x[2])}</div></div>`).join("")}</div>${nextBtn()}`;
  }

  function stVerbs(D) {
    const vs = verbsFor(D.d);
    view.drill = view.drill && view.drill.d === D.d ? view.drill : { d: D.d, picks: {} };
    const rows = vs.map((v) => `<tr><td class="v">${esc(v[0])}</td><td class="v">${esc(v[1])}</td><td class="v">${esc(v[2])}</td><td>${esc(v[3])}</td><td>${sayBtn(v[0] + ", " + v[1] + ", " + v[2])}</td></tr>`).join("");
    const exs = vs.map((v) => `<div>${sayBtn(sentences(v).join(" "))}<p>${sentences(v).map(esc).join("<br>")}</p></div>`).join("");
    const drill = vs.map((v, i) => {
      const opts = verbOpts(v, "v2", i + D.d); const pick = view.drill.picks[i];
      return `<div class="drill"><div class="qline">Yesterday I ____ ${esc(v[4])}.</div><div class="opts">${opts.map((o) =>
        `<button class="opt ${pick != null ? (o === v[1] ? "right" : o === pick ? "wrong" : "") : ""}" data-vpick="${i}" data-val="${esc(o)}" ${pick != null ? "disabled" : ""}>${esc(o)}</button>`).join("")}</div></div>`;
    }).join("");
    const allPicked = vs.every((_, i) => view.drill.picks[i] != null);
    return `<div><h2>Verb Power: V1 → V2 → V3</h2><p class="lead">V1 = ippo / dhinamum. V2 = nethu (past). V3 = have/has/had kooda, passive la. Moonaiyum sathama 3 thadavai sollu!</p></div>
      <div class="scroll"><table class="vt"><thead><tr><th>V1 (now)</th><th>V2 (past)</th><th>V3 (have + )</th><th>Meaning</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
      <div class="ex">${exs}</div>
      <div><h3>Quick drill: V2 choose pannu</h3></div>${drill}
      ${allPicked ? nextBtn() : '<p class="note">Moonu drill um answer pannu, apram next step open aagum.</p>'}`;
  }
  const sentences = (v) => [`Every day I ${v[0]} ${v[4]}.`, `Yesterday I ${v[1]} ${v[4]}.`, `I have ${v[2]} ${v[4]}.`];
  function verbOpts(v, which, seed) {
    const right = which === "v2" ? v[1] : v[2];
    const wrong = new Set([v[0], v[0] + "ed", v[0] + "s", v[0] + "ing", v[1], v[2]]);
    wrong.delete(right);
    const list = [right, ...Array.from(wrong).slice(0, 3)];
    // stable order per verb so re-renders do not reshuffle
    return list.map((x, i) => [x, (i * 7 + seed * 13) % 11]).sort((a, b) => a[1] - b[1]).map((x) => x[0]);
  }

  function lessonHtml(g) {
    return `<div class="story">${g.story.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <div class="formula">📐 ${esc(g.f)}</div>
      <div class="ex">${g.ex.map((x) => `<div>${sayBtn(x[0])}<p>${esc(x[0])}<small>${esc(x[1])}</small></p></div>`).join("")}</div>
      <div class="tip"><b>Teacher tip:</b> ${esc(g.tip)}</div>`;
  }
  function stGrammar(D) {
    return `<div><h2>${esc(D.g.h)}</h2><p class="lead">Kadhai maadhiri padi. Examples ah 🔊 kettu, thirumba sollu.</p></div>${lessonHtml(D.g)}${nextBtn()}`;
  }

  // Speaking mission
  let rec = null;
  function stSpeak(D) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const txt = (view.speakText && view.speakText.d === D.d) ? view.speakText.t : "";
    return `<div><h2>Speak Up! 🎤</h2><p class="lead">${esc(D.s.help)}</p></div>
      <div class="big">${esc(D.s.p)}</div>
      <div class="row"><button class="btn ghost" data-say="${esc(D.s.sample)}">🔊 Sample answer kelu</button><button class="btn ghost" data-act="showSample">👀 Sample paaru</button></div>
      <div class="fb" id="sample" hidden>${esc(D.s.sample)}</div>
      <div class="row">${SR ? `<button class="mic" id="micBtn" aria-label="Start speaking">🎙️</button><span class="note" id="micNote">Mic click panni pesu. Pesi mudinjadhum thirumba click pannu.</span>` :
        `<span class="note">Indha browser la mic check illa. Sathama pesitu, adhaye keezha type pannu.</span>`}</div>
      <label for="speakBox" class="note">Unga answer (mic la pesinadhu ingey varum, illana type pannu):</label>
      <textarea id="speakBox" placeholder="Ingey unga answer...">${esc(txt)}</textarea>
      <div class="row"><button class="btn" data-act="check">✅ Check my answer</button>${sampleFn ? `<button class="btn ghost" data-act="ai">🤖 Claude feedback (Tanglish)</button>` : ""}</div>
      <div id="checkOut"></div><div class="fb" id="aiOut" hidden></div>`;
  }
  function stopMic() { if (rec) { try { rec.stop(); } catch (e) {} rec = null; } }
  function toggleMic() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition, btn = $("#micBtn"), note = $("#micNote"), box = $("#speakBox");
    if (rec) { stopMic(); btn.classList.remove("live"); note.textContent = "Stopped. Check my answer click pannu."; return; }
    rec = new SR(); rec.lang = "en-IN"; rec.continuous = true; rec.interimResults = true;
    const base = box.value ? box.value.trim() + " " : "";
    rec.onresult = (e) => { let t = ""; for (let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript; box.value = base + t; keepText(); };
    rec.onerror = (e) => { note.textContent = e.error === "not-allowed" || e.error === "service-not-allowed" ? "Mic inga allow aagala. Sathama pesitu type pannu, illa laptop Chrome la index.html open pannu." : "Mic error: " + e.error; btn.classList.remove("live"); rec = null; };
    rec.onend = () => { btn.classList.remove("live"); rec = null; };
    try { rec.start(); btn.classList.add("live"); note.textContent = "Kekkuren... pesu! 👂"; } catch (e) { note.textContent = "Mic start aagala."; rec = null; }
  }
  const keepText = () => { view.speakText = { d: view.day, t: $("#speakBox").value }; };
  function checkSpeak(D) {
    const t = " " + $("#speakBox").value.toLowerCase().replace(/[^a-z' ]/g, " ").replace(/\s+/g, " ") + " ";
    const words = t.trim() ? t.trim().split(" ").length : 0;
    const hits = D.s.keys.map((k) => [k.trim(), t.includes(" " + k.trim() + " ") || t.includes(k.trim())]);
    const n = hits.filter((x) => x[1]).length;
    const pass = words >= 15 && n >= Math.ceil(D.s.keys.length / 2);
    $("#checkOut").innerHTML = `<div class="keys">${hits.map((x) => `<span class="${x[1] ? "hit" : ""}">${x[1] ? "✓" : "○"} ${esc(x[0])}</span>`).join("")}</div>
      <p>${words} words · ${n}/${D.s.keys.length} key phrases. ${pass ? "Super da! 🎉 Mission complete." : words < 15 ? "Innum konjam neraya pesu (15+ words)." : "Key phrases innum use pannu (green aaganum)."}</p>
      ${pass ? nextBtn() : ""}`;
    if (pass && !stepDone(D.d, 3)) { S.speaks++; save(); }
  }
  async function aiFeedback(D) {
    const out = $("#aiOut"), ans = $("#speakBox").value.trim();
    if (ans.split(/\s+/).length < 5) return toast("Mudhalla konjam answer pesu / type pannu");
    out.hidden = false; out.textContent = "Thinking... 🤔";
    const prompt = `You are a warm, patient English tutor for a Tamil-speaking adult beginner preparing for job interviews. Explain like you are talking to a child, in Tanglish (Tamil written in English letters, mixed with simple English).
Speaking task: "${D.s.p}"
Today's grammar topic: "${D.g.h}"
Learner's answer: """${ans.slice(0, 2000)}"""
Reply in plain text (no markdown symbols, no tables), under 170 words, in this order:
Score: X/10
Nalla vishayam: 2 short points
Thappu & fix: up to 3 lines, each "wrong → correct" with a 5-word Tanglish reason
Better answer: a natural improved version in simple English, max 70 words.`;
    try {
      const { text } = await sampleFn(prompt, { onText: ({ text }) => { out.textContent = text; } });
      out.textContent = text;
    } catch (e) {
      out.textContent = e && e.text ? e.text : "";
      if (e && (e.code === "not_granted" || e.code === "sampling_disabled")) { sampleFn = null; out.textContent = "Claude feedback inga allow aagala. Check my answer use pannu."; }
      else if (e && e.code === "rate_limited") out.textContent += "\nKonjam neram kazhichu try pannu.";
      else if (!out.textContent) out.textContent = "Feedback kidaikkala. Thirumba try pannu.";
    }
  }

  // Boss battle
  function buildQuiz(D) {
    const qs = [];
    const allW = DAYS.flatMap((x) => x.w);
    shuffle(D.w).slice(0, 2).forEach((w) => {
      const wrong = shuffle(allW.filter((x) => x[1] !== w[1])).slice(0, 3).map((x) => x[1]);
      const opts = shuffle([w[1], ...wrong]);
      qs.push({ q: `"${w[0]}" na enna artham?`, o: opts, a: opts.indexOf(w[1]), why: w[0] + " = " + w[1] + ". " + w[2] });
    });
    const vs = shuffle(verbsFor(D.d).filter((v) => !(v[0] === v[1] && v[1] === v[2])));
    const pool = vs.length >= 2 ? vs : shuffle(VERBS.slice(0, D.d * 3).filter((v) => !(v[0] === v[1] && v[1] === v[2])));
    pool.slice(0, 2).forEach((v, i) => {
      const which = v[1] === v[2] || i === 0 ? "v2" : "v3";
      const right = which === "v2" ? v[1] : v[2];
      const opts = shuffle(verbOpts(v, which, 1));
      qs.push({ q: which === "v2" ? `Yesterday I ____ ${v[4]}.` : `I have ____ ${v[4]}.`, o: opts, a: opts.indexOf(right), why: `${v[0]} → ${v[1]} → ${v[2]}. ${which === "v2" ? "Past (yesterday) → V2" : "have + V3"}.` });
    });
    D.q.forEach((x) => qs.push({ q: x[0], o: x[1], a: x[2], why: x[3] }));
    return { d: D.d, list: shuffle(qs), i: 0, score: 0, picked: null, over: false };
  }
  function stBoss(D) {
    if (!view.q || view.q.d !== D.d) view.q = buildQuiz(D);
    const Q = view.q;
    if (Q.over) {
      const n = Q.list.length, pass = Q.score >= n - 2;
      return `<div class="win"><div class="trophy">${pass ? (Q.score === n ? "🏆" : "⭐") : "💪"}</div>
        <h2>${pass ? (Q.score === n ? "Perfect! Boss defeated!" : "Boss defeated!") : "Almost! Innum oru try"}</h2>
        <p class="big">${Q.score} / ${n}</p>
        <p class="note">${pass ? "Day " + D.d + " complete. Naalaikku pudhu mission unlock aayiduchu." : "Pass panna " + (n - 2) + " correct venum. Grammar step ah oru thadavai paathutu thirumba vaa."}</p>
        <div class="row">${pass ? `<button class="btn" data-act="back">🗺️ Back to map</button>${D.d < 45 ? `<button class="btn ghost" data-day="${D.d + 1}">Day ${D.d + 1} ▶</button>` : ""}` : `<button class="btn" data-act="retry">🔁 Retry boss</button><button class="btn ghost" data-step="2">📖 Grammar paaru</button>`}</div></div>`;
    }
    const q = Q.list[Q.i];
    return `<div class="row" style="justify-content:space-between"><h2>Boss Battle 👾</h2><span class="qcount">Q ${Q.i + 1}/${Q.list.length} · ⭐ ${Q.score}</span></div>
      <div class="big">${esc(q.q)}</div>
      <div class="opts">${q.o.map((o, i) => `<button class="opt ${Q.picked != null ? (i === q.a ? "right" : i === Q.picked ? "wrong" : "") : ""}" data-qpick="${i}" ${Q.picked != null ? "disabled" : ""}>${esc(o)}</button>`).join("")}</div>
      ${Q.picked != null ? `<p class="why">${Q.picked === q.a ? "✅ Correct! " : "❌ Not quite. "}${esc(q.why)}</p><div class="nav"><span></span><button class="btn" data-act="qnext">${Q.i + 1 < Q.list.length ? "Next ▶" : "See result"}</button></div>` : ""}`;
  }
  function finishDay(D, perfect) {
    if (S.done[D.d]) return;
    S.done[D.d] = today();
    const t = today(), y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    if (S.last !== t) { S.streak = S.last === y ? S.streak + 1 : 1; S.last = t; }
    S.best = Math.max(S.best, S.streak);
    if (perfect) S.perfect++;
    const before = new Set(S.badges || []);
    S.badges = BADGES.filter((b) => b.ok()).map((b) => b.id);
    const nb = BADGES.find((b) => S.badges.includes(b.id) && !before.has(b.id));
    addXp(perfect ? 40 : 20, nb ? "New badge: " + nb.ic + " " + nb.n : "Day " + D.d + " complete!");
  }

  function bindMission() {
    const D = DAYS[view.day - 1], p = $("#panel");
    app.querySelectorAll("[data-step]").forEach((b) => b.onclick = () => { stopMic(); view.step = +b.dataset.step; render(); });
    app.querySelectorAll("[data-act]").forEach((b) => b.onclick = () => {
      const a = b.dataset.act;
      if (a === "back") return go("map");
      if (a === "next") { markStep(D.d, view.step); view.step = Math.min(4, view.step + 1); stopMic(); render(); window.scrollTo({ top: 0 }); return; }
      if (a === "showSample") { const s = $("#sample"); s.hidden = !s.hidden; return; }
      if (a === "check") return checkSpeak(D);
      if (a === "ai") return aiFeedback(D);
      if (a === "retry") { view.q = buildQuiz(D); render(); return; }
      if (a === "qnext") {
        const Q = view.q; Q.i++; Q.picked = null;
        if (Q.i >= Q.list.length) { Q.over = true; if (Q.score >= Q.list.length - 2) { S.steps[D.d] = S.steps[D.d] || []; S.steps[D.d][4] = true; finishDay(D, Q.score === Q.list.length); } }
        render(); return;
      }
    });
    p.querySelectorAll("[data-vpick]").forEach((b) => b.onclick = () => {
      const i = +b.dataset.vpick, v = verbsFor(D.d)[i]; view.drill.picks[i] = b.dataset.val;
      if (b.dataset.val === v[1]) speak("Yesterday I " + v[1] + " " + v[4]);
      render();
    });
    p.querySelectorAll("[data-qpick]").forEach((b) => b.onclick = () => {
      const Q = view.q; if (Q.picked != null) return; Q.picked = +b.dataset.qpick;
      if (Q.picked === Q.list[Q.i].a) { Q.score++; S.xp += 5; save(); paintBar(); }
      render();
    });
    const mic = $("#micBtn"); if (mic) mic.onclick = toggleMic;
    const box = $("#speakBox"); if (box) box.oninput = keepText;
  }

  // ---------- Library: words ----------
  function rWords() {
    const q = (view.wq || "").toLowerCase();
    let h = `<h1 style="margin-bottom:6px">Word Bank</h1><p class="note" style="margin-top:0">225 words, day wise. ⭐ = neenga mudicha day.</p>
      <input class="search" id="search" type="search" placeholder="Search word or Tamil meaning..." value="${esc(view.wq || "")}" aria-label="Search words">`;
    let any = false;
    for (const D of DAYS) {
      const ws = D.w.filter((w) => !q || (w[0] + " " + w[1] + " " + w[2]).toLowerCase().includes(q));
      if (!ws.length) continue; any = true;
      h += `<section class="world" style="--wc:var(${worldOf(D.d).c})"><div class="world-head"><h2 style="font-size:18px">Day ${D.d}${isDone(D.d) ? " ⭐" : ""}</h2><span>${esc(D.t)}</span></div><div class="cards">
        ${ws.map((x) => `<div class="card"><div class="w"><strong>${esc(x[0])}</strong>${sayBtn(x[0] + ". " + x[2])}</div><div class="m">${esc(x[1])}</div><div class="e">${esc(x[2])}</div></div>`).join("")}</div></section>`;
    }
    return h + (any ? "" : `<p>"${esc(q)}" kidaikkala. Vera word try pannu.</p>`);
  }
  function bindSearch() {
    const s = $("#search"); if (!s) return;
    s.oninput = () => { const pos = s.selectionStart; if (view.tab === "words") view.wq = s.value; else view.vq = s.value; render(); const n = $("#search"); n.focus(); n.setSelectionRange(pos, pos); };
    const f = $("#flashArea"); if (f) bindFlash();
  }

  // ---------- Library: verbs ----------
  function newFlash() {
    const pool = VERBS.filter((v) => v[1] !== v[0] + "ed" && v[1] !== v[0] + "d");
    const v = pool[Math.floor(Math.random() * pool.length)];
    const which = Math.random() < 0.5 ? "v2" : "v3";
    return { v, which, opts: shuffle(verbOpts(v, which, 3)), picked: null };
  }
  function rVerbs() {
    const q = (view.vq || "").toLowerCase();
    if (!view.flash) view.flash = newFlash();
    const F = view.flash, right = F.which === "v2" ? F.v[1] : F.v[2];
    const rows = VERBS.map((v, i) => [v, i]).filter(([v]) => !q || v.join(" ").toLowerCase().includes(q));
    return `<h1 style="margin-bottom:6px">V1 · V2 · V3</h1>
      <p class="note" style="margin-top:0">135 verbs. V1 = ippo, V2 = past (yesterday), V3 = have/has/had + , passive la.</p>
      <section class="panel" id="flashArea" style="margin-bottom:18px"><div class="row" style="justify-content:space-between"><h2>⚡ Verb Flash</h2><span class="qcount">Correct: ${S.flash}</span></div>
        <div class="big">${esc(F.v[0])} → ${F.which === "v2" ? "V2 (past) enna?" : "V3 (have + ___) enna?"}</div>
        <div class="opts">${F.opts.map((o) => `<button class="opt ${F.picked != null ? (o === right ? "right" : o === F.picked ? "wrong" : "") : ""}" data-fpick="${esc(o)}" ${F.picked != null ? "disabled" : ""}>${esc(o)}</button>`).join("")}</div>
        ${F.picked != null ? `<p class="why">${esc(F.v[0] + " → " + F.v[1] + " → " + F.v[2] + " (" + F.v[3] + ")")}</p><div class="nav"><span></span><button class="btn" id="flashNext">Next verb ▶</button></div>` : ""}
      </section>
      <input class="search" id="search" type="search" placeholder="Search verb or meaning..." value="${esc(view.vq || "")}" aria-label="Search verbs">
      <div class="panel" style="padding:8px 12px"><div class="scroll"><table class="vt"><thead><tr><th>Day</th><th>V1</th><th>V2</th><th>V3</th><th>Meaning</th><th></th></tr></thead><tbody>
      ${rows.map(([v, i]) => `<tr><td>${Math.floor(i / 3) + 1}</td><td class="v">${esc(v[0])}</td><td class="v">${esc(v[1])}</td><td class="v">${esc(v[2])}</td><td>${esc(v[3])}</td><td>${sayBtn(v[0] + ", " + v[1] + ", " + v[2])}</td></tr>`).join("")}
      </tbody></table></div></div>`;
  }
  function bindFlash() {
    app.querySelectorAll("[data-fpick]").forEach((b) => b.onclick = () => {
      const F = view.flash; F.picked = b.dataset.fpick;
      const right = F.which === "v2" ? F.v[1] : F.v[2];
      if (F.picked === right) { S.flash++; S.xp += 2; S.badges = BADGES.filter((x) => x.ok()).map((x) => x.id); save(); speak(F.v[0] + ", " + F.v[1] + ", " + F.v[2]); }
      render();
    });
    const n = $("#flashNext"); if (n) n.onclick = () => { view.flash = newFlash(); render(); };
  }

  // ---------- Library: grammar ----------
  function rGrammar() {
    return `<h1 style="margin-bottom:6px">Grammar Book</h1><p class="note" style="margin-top:0">45 lessons, Tanglish la. Edhaiyum open panni revise pannalaam.</p>
      ${DAYS.map((D) => `<details class="lesson" style="--wc:var(${worldOf(D.d).c})"><summary>Day ${D.d}${isDone(D.d) ? " ⭐" : ""} · ${esc(D.g.h)} <span>${esc(D.t)}</span></summary><div>${lessonHtml(D.g)}</div></details>`).join("")}`;
  }

  // ---------- Badges ----------
  function rBadges() {
    const got = BADGES.filter((b) => b.ok()).length;
    return `<h1 style="margin-bottom:6px">Badges</h1><p class="note" style="margin-top:0">${got}/${BADGES.length} unlocked · Best streak: ${S.best} days</p>
      <div class="badges">${BADGES.map((b) => `<div class="badge ${b.ok() ? "got" : ""}"><div class="ic">${b.ic}</div><b>${esc(b.n)}</b><small>${esc(b.t)}</small></div>`).join("")}</div>
      <p class="note" style="margin-top:24px">Progress indha browser la save aagudhu${dbRef ? ", plus unga Claude account la" : ""}.</p>`;
  }

  render();
})();
