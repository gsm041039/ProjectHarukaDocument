'use strict';
// Project Haruka Story Dashboard — app.js v2.1

const App = {
  state: {
    view: 'timeline',
    selectedEvent: null,
    selectedDir: null,
    selectedChar: null,
    filters: { acts: [], lines: [], status: [], search: '' }
  },

  // ── HELPERS ──────────────────────────────────────────────────────────────
  tag(cls, text) {
    return `<span class="tag ${cls}">${text}</span>`;
  },
  claimTag(claim) {
    const k = (claim || '').replace(/[\[\]]/g,'');
    return this.tag('tag-' + k, k.replace(/_/g,' '));
  },
  stabilityTag(s) { return this.tag('tag-' + s, s); },
  fnTag(fn) { return this.tag('tag fn-' + fn, fn); },
  verdictTag(v) { return this.tag('tag verdict-' + v, v === 'RELEVANT' ? 'REL' : 'N/A'); },
  qualityDot(q) { return `<span class="quality-${q}" title="${q}">●</span>`; },
  charColor(id) {
    const idx = parseInt(id.split('-')[1]) - 1;
    const clrs = ['#e879f9','#38bdf8','#f97316','#a78bfa','#fb7185','#34d399','#64748b','#fbbf24','#c084fc','#94a3b8'];
    return clrs[idx] || '#999';
  },
  charName(id) {
    const c = (SD.characters || []).find(x => x.id === id);
    return c ? c.name : id;
  },
  dirName(id) {
    const d = (SD.directions || []).find(x => x.id === id);
    return d ? d.title : id;
  },
  eventById(id) { return (SD.events || []).find(e => e.id === id); },
  actColor(act) {
    if (act === '前史') return 'act-pre';
    return 'act-' + act;
  },
  eventFiltered(ev) {
    const f = this.state.filters;
    if (f.acts.length && !f.acts.includes(ev.act)) return false;
    if (f.lines.length && !f.lines.includes(ev.line)) return false;
    if (f.status.length && !f.status.includes(ev.status)) return false;
    if (f.search) {
      const q = f.search.toLowerCase();
      const hay = (ev.title + ev.summary + ev.id + (ev.chars||[]).join(' ')).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  },
  dirFiltered(d) {
    const f = this.state.filters;
    if (f.search) {
      const q = f.search.toLowerCase();
      const hay = (d.title + d.id + d.summary + d.core_q).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (f.status.length && !f.status.includes(d.stability)) return false;
    return true;
  },

  // ── ROUTER ───────────────────────────────────────────────────────────────
  init() {
    // merge directions after both scripts loaded
    if (window.SD_DIRS && !SD.directions) SD.directions = SD_DIRS;
    this.buildSidebar();
    window.addEventListener('hashchange', () => this.route());
    this.route();
  },
  route() {
    const hash = location.hash.slice(1) || 'timeline';
    const [base, param] = hash.split('/');
    this.state.view = base;
    this.renderTopbar(base, param);
    this.highlightNav(base);
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const el = document.getElementById('view-' + base);
    if (el) el.classList.add('active');
    this.closePanel();
    switch (base) {
      case 'timeline':    this.renderTimeline(); break;
      case 'directions':  this.renderDirections(); break;
      case 'direction':   this.renderDirectionDetail(param); break;
      case 'events':      this.renderEvents(); break;
      case 'characters':  this.renderCharacters(); break;
      case 'character':   this.renderCharacterDetail(param); break;
      case 'matrix-ec':   this.renderMatrixEC(); break;
      case 'matrix-de':   this.renderMatrixDE(); break;
      case 'contradictions': this.renderContradictions(); break;
      case 'files':       this.renderFiles(); break;
    }
  },
  navigate(hash) { location.hash = hash; },

  // ── SIDEBAR ───────────────────────────────────────────────────────────────
  buildSidebar() {
    const nav = document.getElementById('sidebar-nav');
    if (!nav) return;
    const items = [
      { hash:'timeline', icon:'⏱', label:'Timeline', badge: SD.events.length },
      { hash:'directions', icon:'🧭', label:'Directions', badge: (SD.directions||[]).length },
      { hash:'events', icon:'📋', label:'Event List' },
      { hash:'characters', icon:'👤', label:'Characters', badge: SD.characters.length },
      { hash:'matrix-ec', icon:'⊞', label:'Event × Char' },
      { hash:'matrix-de', icon:'⊟', label:'Dir × Event' },
      { hash:'contradictions', icon:'⚠', label:'Issues', badge: SD.contradictions.filter(c=>c.status!=='RESOLVED').length },
      { hash:'files', icon:'📁', label:'Source Files' },
    ];
    nav.innerHTML = items.map(it => `
      <div class="nav-item" data-hash="${it.hash}" onclick="App.navigate('${it.hash}')">
        <span class="icon">${it.icon}</span>
        <span>${it.label}</span>
        ${it.badge != null ? `<span class="nav-badge">${it.badge}</span>` : ''}
      </div>`).join('');
    this.buildFilters();
  },
  buildFilters() {
    const el = document.getElementById('sidebar-filters');
    if (!el) return;
    const acts = ['前史','I','II','III','IV'];
    const lines = ['Alpha','Beta','mixed'];
    const statuses = ['canon','working','unresolved','blocked'];
    el.innerHTML = `
      <div class="filter-section-title">Act</div>
      <div class="filter-chips">
        ${acts.map(a => `<span class="chip act-${a}" data-act="${a}" onclick="App.toggleFilter('acts','${a}',this)">${a}</span>`).join('')}
      </div>
      <div class="filter-section-title">Line</div>
      <div class="filter-chips">
        ${lines.map(l => `<span class="chip" onclick="App.toggleFilter('lines','${l}',this)">${l}</span>`).join('')}
      </div>
      <div class="filter-section-title">Status</div>
      <div class="filter-chips">
        ${statuses.map(s => `<span class="chip" onclick="App.toggleFilter('status','${s}',this)">${s}</span>`).join('')}
      </div>
      <input class="search-input" placeholder="Search…" oninput="App.onSearch(this.value)">
    `;
  },
  toggleFilter(key, val, el) {
    const arr = this.state.filters[key];
    const idx = arr.indexOf(val);
    if (idx === -1) { arr.push(val); el.classList.add('active'); }
    else { arr.splice(idx, 1); el.classList.remove('active'); }
    this.route();
  },
  onSearch(val) {
    this.state.filters.search = val;
    this.route();
  },
  highlightNav(base) {
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.hash === base || (base === 'direction' && el.dataset.hash === 'directions') || (base === 'character' && el.dataset.hash === 'characters'));
    });
  },
  renderTopbar(view, param) {
    const el = document.getElementById('topbar-title');
    if (!el) return;
    const labels = { timeline:'Timeline', directions:'Directions', events:'Event List', characters:'Characters', 'matrix-ec':'Event × Character Matrix', 'matrix-de':'Direction × Event Matrix', contradictions:'Issues & Contradictions', files:'Source Files' };
    let title = labels[view] || view;
    if (view === 'direction' && param) {
      const d = (SD.directions||[]).find(x=>x.id===param);
      title = d ? `${d.id}: ${d.title}` : param;
    }
    if (view === 'character' && param) {
      const c = SD.characters.find(x=>x.id===param);
      title = c ? c.full : param;
    }
    el.textContent = title;
  },

  // ── TIMELINE VIEW ─────────────────────────────────────────────────────────
  renderTimeline() {
    const el = document.getElementById('view-timeline');
    if (!el) return;
    const events = SD.events.filter(e => this.eventFiltered(e)).sort((a,b) => a.ord - b.ord);
    const groups = {};
    const order = ['前史','I','II','III','IV'];
    events.forEach(e => { (groups[e.act] = groups[e.act]||[]).push(e); });
    const actLabels = { '前史':'前史 (Prehistory)', 'I':'起 · Act I', 'II':'承 · Act II', 'III':'轉 · Act III', 'IV':'合 · Act IV' };
    el.innerHTML = events.length ? order.filter(a => groups[a]).map(act =>
      `<div class="act-group ${this.actColor(act)}">
        <div class="act-group-header"><span class="act-dot"></span>${actLabels[act]||act} <span style="color:var(--text3);font-size:10px;font-weight:400">${groups[act].length} events</span></div>
        ${groups[act].map(e => this.renderEventCard(e)).join('')}
      </div>`
    ).join('') : '<div class="empty-state">No events match current filters.</div>';
  },
  renderEventCard(e) {
    const dirCount = (e.df||[]).length;
    const charCount = (e.chars||[]).length;
    return `<div class="event-card ${this.actColor(e.act)}" onclick="App.openEventPanel('${e.id}')">
      <div>
        <div class="event-title">${e.title}</div>
      </div>
      <div style="display:flex;gap:4px;align-items:center;flex-shrink:0">
        ${this.claimTag(e.claim)}
        ${this.stabilityTag(e.status)}
      </div>
      <div class="event-summary">${e.summary}</div>
      <div class="event-meta">
        <span style="color:var(--text3);font-size:10px">${e.id}</span>
        ${dirCount ? `<span class="tag fn-reference">${dirCount} dir${dirCount>1?'s':''}</span>` : ''}
        ${charCount ? `<span style="font-size:10px;color:var(--text3)">${charCount} char${charCount>1?'s':''}</span>` : ''}
        ${e.contra && e.contra.length ? `<span class="tag tag-CONFLICTING">⚠ conflict</span>` : ''}
        ${e.q && e.q.length ? `<span class="tag tag-NEEDS_AUTHOR_INPUT">${e.q.length} Q</span>` : ''}
      </div>
    </div>`;
  },

  // ── EVENT LIST VIEW ───────────────────────────────────────────────────────
  renderEvents() {
    const el = document.getElementById('view-events');
    if (!el) return;
    el.innerHTML = this.renderTimeline.call({
      state: this.state,
      eventFiltered: this.eventFiltered.bind(this),
      actColor: this.actColor,
      renderEventCard: this.renderEventCard.bind(this),
      claimTag: this.claimTag.bind(this),
      stabilityTag: this.stabilityTag.bind(this),
      openEventPanel: this.openEventPanel.bind(this)
    }) || '';
    this.renderTimeline();
    // reuse timeline in events view
    const tel = document.getElementById('view-timeline');
    if (tel) el.innerHTML = tel.innerHTML;
  },

  // ── EVENT DETAIL PANEL ────────────────────────────────────────────────────
  openEventPanel(id) {
    const e = this.eventById(id);
    if (!e) return;
    this.state.selectedEvent = id;
    const panel = document.getElementById('detail-panel');
    const overlay = document.getElementById('overlay');
    if (!panel) return;
    panel.innerHTML = `
      <div class="panel-header">
        <div>
          <div class="panel-title">${e.title}</div>
          <div class="panel-subtitle">${e.id} · Act ${e.act} · ${e.line} · ord ${e.ord}</div>
          <div style="margin-top:5px;display:flex;gap:5px">${this.claimTag(e.claim)} ${this.stabilityTag(e.status)}</div>
        </div>
        <button class="panel-close" onclick="App.closePanel()">✕</button>
      </div>
      <div class="panel-body">
        <div class="info-box">${e.summary}</div>
        ${this.renderCiTable(e)}
        ${this.renderDfTable(e)}
        ${e.src && e.src.length ? `<div class="section-header">Sources</div>${e.src.map(s=>`<div style="font-size:10px;color:var(--text3);margin-bottom:3px;font-family:monospace">${s}</div>`).join('')}` : ''}
        ${e.q && e.q.length ? `<div class="section-header">Open Questions</div>${e.q.map(q=>`<div class="open-q">${q}</div>`).join('')}` : ''}
        ${e.contra && e.contra.length ? `<div class="section-header">Contradictions</div>${e.contra.map(c=>`<div class="missing-bridge">${c}</div>`).join('')}` : ''}
      </div>`;
    panel.classList.add('open');
    overlay.classList.add('show');
    overlay.onclick = () => this.closePanel();
    // highlight card
    document.querySelectorAll('.event-card').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll(`.event-card[onclick*="${id}"]`).forEach(c => c.classList.add('selected'));
  },
  renderCiTable(e) {
    if (!e.ci || !e.ci.length) return '';
    return `<div class="section-header">Character Impacts</div>
    <table class="detail-table">
      <tr><th class="col-char">Character</th><th>Role</th><th>Action / Inner State / Growth</th><th>Claim</th></tr>
      ${e.ci.map(ci => `<tr>
        <td class="col-char"><span style="color:${this.charColor(ci.ch)};font-weight:700">${this.charName(ci.ch)}</span></td>
        <td><span class="tag fn-${ci.role==='protagonist'?'payoff':ci.role==='antagonist'?'climax':ci.role==='victim'?'escalation':ci.role==='witness'?'reference':ci.role==='catalyst'?'setup':ci.role==='emotional_receiver'?'reveal':'reference'}">${ci.role}</span></td>
        <td>${[ci.action, ci.inner ? `<em>${ci.inner}</em>` : '', ci.growth ? `<span style="color:var(--canon)">↑ ${ci.growth}</span>` : ''].filter(Boolean).join('<br>')}</td>
        <td>${this.claimTag(ci.claim)}</td>
      </tr>`).join('')}
    </table>`;
  },
  renderDfTable(e) {
    if (!e.df || !e.df.length) return '';
    return `<div class="section-header">Direction Functions</div>
    <table class="detail-table">
      <tr><th>Direction</th><th>Function</th><th>Description</th></tr>
      ${e.df.map(df => `<tr>
        <td style="font-weight:600;font-size:10px">${df.dir}</td>
        <td>${this.fnTag(df.fn)}</td>
        <td style="color:var(--text2)">${df.desc}</td>
      </tr>`).join('')}
    </table>`;
  },
  closePanel() {
    const panel = document.getElementById('detail-panel');
    const overlay = document.getElementById('overlay');
    if (panel) panel.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    this.state.selectedEvent = null;
    document.querySelectorAll('.event-card').forEach(c => c.classList.remove('selected'));
  },

  // ── DIRECTIONS VIEW ───────────────────────────────────────────────────────
  renderDirections() {
    const el = document.getElementById('view-directions');
    if (!el) return;
    const dirs = (SD.directions||[]).filter(d => this.dirFiltered(d));
    el.innerHTML = dirs.length
      ? `<div class="dir-grid">${dirs.map(d => this.renderDirCard(d)).join('')}</div>`
      : '<div class="empty-state">No directions match.</div>';
  },
  renderDirCard(d) {
    const contraCount = (d.contra||[]).length;
    const missingCount = (d.missing||[]).length;
    return `<div class="dir-card">
      <div class="dir-card-header" onclick="App.navigate('direction/${d.id}')">
        <div class="dir-card-title">
          <span class="dir-id">${d.id}</span>
          <span>${d.title}</span>
        </div>
        <div class="dir-summary">${d.summary}</div>
        <div class="dir-card-meta">
          ${this.stabilityTag(d.stability)}
          ${this.claimTag(d.claim)}
          ${contraCount ? `<span class="tag tag-CONFLICTING">⚠ ${contraCount}</span>` : ''}
          ${missingCount ? `<span class="tag tag-blocked">⛔ ${missingCount} missing</span>` : ''}
          <span style="font-size:10px;color:var(--text3)">${(d.chars||[]).length} chars · ${(d.events||[]).length} events</span>
        </div>
      </div>
      <div style="padding:0 14px 8px">
        <button class="dir-expand-btn" onclick="App.toggleDirExpand(event,'${d.id}-pool')">▶ Pool 1+2 Analysis</button>
        <div class="dir-expandable" id="${d.id}-pool">
          ${this.renderPool1(d)}
          ${this.renderPool2(d)}
        </div>
      </div>
    </div>`;
  },
  toggleDirExpand(e, id) {
    e.stopPropagation();
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('open');
    e.currentTarget.textContent = (el.classList.contains('open') ? '▼ ' : '▶ ') + 'Pool 1+2 Analysis';
  },
  renderPool1(d) {
    if (!d.pool1 || !d.pool1.length) return '';
    const names = ['','Character Growth','Relationship Dynamics','Info/Reveal Control','Atmosphere/Tension','Theme Expression','Structural Beat Fn','Entry Timing/Presence','World Rule/Mechanic','Setup/Payoff','Audience Knowledge Gap','Canon/Continuity','Writing Execution'];
    return `<div class="pool-section">
      <div class="pool-title">Pool 1 — Baseline (Angles 1–12)</div>
      <table class="pool1-table">
        ${d.pool1.map(a => `<tr>
          <td class="col-a">${a.a}</td>
          <td class="col-q" title="${names[a.a]||''}">${this.qualityDot(a.q)} <span style="font-size:9px;color:var(--text3)">${a.q}</span></td>
          <td class="col-t">${a.t}</td>
        </tr>`).join('')}
      </table>
    </div>`;
  },
  renderPool2(d) {
    if (!d.pool2 || !d.pool2.length) return '';
    const names = {13:'Coping/Defense',14:'Ideology/Value',15:'Social/Institutional',16:'Moral Tradeoff',17:'Symbolic/Ritual',18:'Narrative Validation',19:'Method Necessity'};
    return `<div class="pool-section" style="margin-top:10px">
      <div class="pool-title">Pool 2 — Extended Relevance Check (Angles 13–19)</div>
      ${d.pool2.map(a => `<div class="pool2-item" style="${a.v==='NOT_RELEVANT'?'opacity:.5':''}">
        <div class="pool2-header">
          <span class="pool2-angle">A${a.a}</span>
          <span class="pool2-name">${names[a.a]||a.a}</span>
          ${this.verdictTag(a.v)}
        </div>
        <div class="pool2-reason">${a.r}</div>
        ${a.x ? `<div class="pool2-expanded">${a.x}</div>` : ''}
      </div>`).join('')}
    </div>`;
  },

  // ── DIRECTION DETAIL ──────────────────────────────────────────────────────
  renderDirectionDetail(id) {
    const el = document.getElementById('view-direction');
    if (!el) return;
    const d = (SD.directions||[]).find(x=>x.id===id);
    if (!d) { el.innerHTML = `<div class="empty-state">Direction ${id} not found.</div>`; return; }
    const linkedEvents = (d.events||[]).map(eid => this.eventById(eid)).filter(Boolean).sort((a,b)=>a.ord-b.ord);
    el.innerHTML = `
      <div style="max-width:800px">
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px">
          <a href="#directions" style="font-size:11px">← All Directions</a>
          ${this.stabilityTag(d.stability)} ${this.claimTag(d.claim)}
        </div>
        <div style="font-size:14px;font-weight:700;margin-bottom:4px">${d.id}: ${d.title}</div>
        <div class="info-box">${d.summary}</div>
        <div style="margin-bottom:12px">
          <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px">Core Question</div>
          <div class="q-italic">${d.core_q}</div>
        </div>
        <div style="margin-bottom:12px">
          <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px">Emotional Center</div>
          <div style="font-size:12px;color:var(--text);background:var(--bg4);padding:8px 10px;border-radius:4px;font-style:italic;border-left:3px solid var(--accent)">${d.emotional_center}</div>
        </div>
        <div style="margin-bottom:12px">
          <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px">Dramatic Function</div>
          <div style="font-size:11px;color:var(--text2)">${d.dramatic_fn}</div>
        </div>
        ${d.missing && d.missing.length ? `<div class="section-header">Missing Bridges</div>${d.missing.map(m=>`<div class="missing-bridge">${m}</div>`).join('')}` : ''}
        ${d.questions && d.questions.length ? `<div class="section-header">Open Questions</div>${d.questions.map(q=>`<div class="open-q">${q}</div>`).join('')}` : ''}
        ${d.contra && d.contra.length ? `<div class="section-header">Contradictions</div>${d.contra.map(c=>`<div class="missing-bridge">${c}</div>`).join('')}` : ''}
        ${linkedEvents.length ? `<div class="section-header">Linked Events (chronological)</div>${linkedEvents.map(e=>this.renderEventCard(e)).join('')}` : ''}
        <div class="section-header">Characters Involved</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">
          ${(d.chars||[]).map(cid => `<span style="background:var(--bg4);padding:4px 9px;border-radius:4px;font-size:11px;color:${this.charColor(cid)};cursor:pointer;font-weight:600" onclick="App.navigate('character/${cid}')">${this.charName(cid)}</span>`).join('')}
        </div>
        ${this.renderPool1(d)}
        ${this.renderPool2(d)}
      </div>`;
  },

  // ── CHARACTER VIEW ────────────────────────────────────────────────────────
  renderCharacters() {
    const el = document.getElementById('view-characters');
    if (!el) return;
    el.innerHTML = `<div class="char-grid">${SD.characters.map(c => `
      <div class="char-card" onclick="App.navigate('character/${c.id}')">
        <div class="char-name" style="color:${this.charColor(c.id)}">${c.full}</div>
        <div class="char-role">${c.role}</div>
        <div class="char-arc">${c.arc}</div>
        <div class="char-acts">
          ${Object.entries(c.states||{}).map(([act,text]) =>
            `<span class="char-act-label">${act}</span><span class="char-act-text">${text}</span>`
          ).join('')}
        </div>
      </div>`).join('')}
    </div>`;
  },
  renderCharacterDetail(id) {
    const el = document.getElementById('view-character');
    if (!el) return;
    const c = SD.characters.find(x=>x.id===id);
    if (!c) { el.innerHTML = '<div class="empty-state">Character not found.</div>'; return; }
    const eventsInvolved = SD.events.filter(e => (e.chars||[]).includes(id)).sort((a,b)=>a.ord-b.ord);
    const dirs = (SD.directions||[]).filter(d => (d.chars||[]).includes(id));
    el.innerHTML = `
      <div style="max-width:760px">
        <div><a href="#characters" style="font-size:11px">← All Characters</a></div>
        <div style="font-size:14px;font-weight:700;color:${this.charColor(id)};margin:8px 0 4px">${c.full}</div>
        <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.04em">${c.role}</div>
        <div class="info-box" style="margin-top:8px">${c.arc}</div>
        ${c.coping ? `<div style="margin-bottom:10px"><span style="font-size:10px;color:var(--text3)">COPING:</span> <span style="font-size:11px;color:var(--text2)">${c.coping}</span></div>` : ''}
        ${c.secrets && c.secrets.length ? `<div class="section-header">Key Secrets</div>${c.secrets.map(s=>`<div class="open-q">${s}</div>`).join('')}` : ''}
        <div class="section-header">Act States</div>
        <table class="detail-table">
          ${Object.entries(c.states||{}).map(([act,text]) =>
            `<tr><td style="font-weight:700;color:${this.actColor(act)==='act-pre'?'var(--act-pre)':'var(--'+this.actColor(act).replace('act-','act-')+')'};">${act}</td><td>${text}</td></tr>`
          ).join('')}
        </table>
        <div class="section-header">Directions Involved (${dirs.length})</div>
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px">
          ${dirs.map(d => `<span style="background:var(--bg4);padding:4px 9px;border-radius:4px;font-size:11px;cursor:pointer" onclick="App.navigate('direction/${d.id}')">${d.id}: ${d.title}</span>`).join('')}
        </div>
        <div class="section-header">Events (${eventsInvolved.length})</div>
        ${eventsInvolved.map(e=>this.renderEventCard(e)).join('')}
      </div>`;
  },

  // ── MATRIX: EVENT × CHARACTER ─────────────────────────────────────────────
  renderMatrixEC() {
    const el = document.getElementById('view-matrix-ec');
    if (!el) return;
    const events = SD.events.slice().sort((a,b)=>a.ord-b.ord);
    const chars = SD.characters;
    // build lookup: {eventId: {charId: role}}
    const map = {};
    events.forEach(e => {
      map[e.id] = {};
      (e.ci||[]).forEach(ci => { map[e.id][ci.ch] = ci.role; });
      (e.chars||[]).forEach(cid => { if (!map[e.id][cid]) map[e.id][cid] = 'present'; });
    });
    const roleShort = { protagonist:'P', antagonist:'A', victim:'V', witness:'W', catalyst:'C', hidden_cause:'HC', emotional_receiver:'ER', absent_but_affected:'AB', present:'·' };
    const roleClass = { protagonist:'fn-payoff', antagonist:'fn-climax', victim:'fn-escalation', witness:'fn-reference', catalyst:'fn-setup', hidden_cause:'fn-reveal', emotional_receiver:'fn-reveal', absent_but_affected:'fn-reference', present:'fn-reference' };
    el.innerHTML = `<div class="matrix-wrapper">
      <table class="matrix-table">
        <thead><tr>
          <th class="row-header">Event</th>
          ${chars.map(c=>`<th style="color:${this.charColor(c.id)}" title="${c.full}">${c.name}</th>`).join('')}
        </tr></thead>
        <tbody>
        ${events.map(e => `<tr>
          <td class="row-label" onclick="App.openEventPanel('${e.id}')" style="cursor:pointer" title="${e.summary}">${e.id}<br><span style="font-weight:400;font-size:9px;color:var(--text3)">${e.title.substring(0,28)}…</span></td>
          ${chars.map(c => {
            const role = map[e.id][c.id];
            if (!role) return `<td></td>`;
            return `<td title="${role}"><span class="matrix-cell ${roleClass[role]||'fn-reference'}">${roleShort[role]||role.substring(0,2)}</span></td>`;
          }).join('')}
        </tr>`).join('')}
        </tbody>
      </table>
      <div style="margin-top:10px;font-size:10px;color:var(--text3);display:flex;gap:10px;flex-wrap:wrap">
        ${Object.entries(roleShort).map(([k,v])=>`<span><span class="matrix-cell ${roleClass[k]}">${v}</span> ${k}</span>`).join('')}
      </div>
    </div>`;
  },

  // ── MATRIX: DIRECTION × EVENT ─────────────────────────────────────────────
  renderMatrixDE() {
    const el = document.getElementById('view-matrix-de');
    if (!el) return;
    const events = SD.events.slice().sort((a,b)=>a.ord-b.ord);
    const dirs = SD.directions || [];
    // build lookup: {dirId: {eventId: fn}}
    const map = {};
    dirs.forEach(d => { map[d.id] = {}; });
    events.forEach(e => {
      (e.df||[]).forEach(df => { if (map[df.dir]) map[df.dir][e.id] = df.fn; });
    });
    const fnShort = { setup:'S', escalation:'E', reveal:'R', climax:'C', payoff:'P', reference:'·' };
    el.innerHTML = `<div class="matrix-wrapper">
      <table class="matrix-table">
        <thead><tr>
          <th class="row-header">Direction</th>
          ${events.map(e=>`<th title="${e.title}" style="writing-mode:vertical-lr;transform:rotate(180deg);max-height:100px;font-size:9px">${e.id}</th>`).join('')}
        </tr></thead>
        <tbody>
        ${dirs.map(d => `<tr>
          <td class="row-label" onclick="App.navigate('direction/${d.id}')" style="cursor:pointer">${d.id}<br><span style="font-weight:400;font-size:9px;color:var(--text3)">${d.title.substring(0,22)}…</span></td>
          ${events.map(e => {
            const fn = map[d.id] && map[d.id][e.id];
            if (!fn) return `<td></td>`;
            return `<td title="${fn}"><span class="matrix-cell fn-${fn}">${fnShort[fn]||fn.substring(0,1).toUpperCase()}</span></td>`;
          }).join('')}
        </tr>`).join('')}
        </tbody>
      </table>
      <div style="margin-top:10px;font-size:10px;color:var(--text3);display:flex;gap:10px;flex-wrap:wrap">
        ${Object.entries(fnShort).map(([k,v])=>`<span><span class="matrix-cell fn-${k}">${v}</span> ${k}</span>`).join('')}
      </div>
    </div>`;
  },

  // ── CONTRADICTIONS VIEW ───────────────────────────────────────────────────
  renderContradictions() {
    const el = document.getElementById('view-contradictions');
    if (!el) return;
    const sevOrder = { Critical:0, High:1, Medium:2, Low:3 };
    const sorted = [...SD.contradictions].sort((a,b) => (sevOrder[a.severity]||9) - (sevOrder[b.severity]||9));
    el.innerHTML = `<div class="contra-list">${sorted.map(c => `
      <div class="contra-card">
        <div class="contra-header">
          <span class="contra-id">${c.id}</span>
          ${this.tag('tag tag-'+c.claim.replace(/[\[\]]/g,''), c.claim.replace(/[\[\]]/g,''))}
          <span class="sev-${c.severity} tag" style="background:none;padding:0;font-size:10px">${c.severity}</span>
          <span style="margin-left:auto;font-size:10px;color:var(--text3)">${c.type}</span>
          ${this.tag('tag tag-'+(c.status==='OPEN'?'blocked':'working'), c.status)}
        </div>
        <div style="font-size:11px;font-weight:600;margin-bottom:4px;color:var(--text)">${c.topic}</div>
        <div class="contra-desc">${c.desc}</div>
        ${c.dirs && c.dirs.length ? `<div class="contra-dirs">${c.dirs.map(d=>`<span class="tag fn-reference" onclick="App.navigate('direction/${d}')" style="cursor:pointer">${d}</span>`).join('')}</div>` : ''}
        ${c.author_needed ? `<div style="margin-top:6px;font-size:10px;color:var(--needs-input)">⚑ Author decision required</div>` : ''}
        ${c.src && c.src.length ? `<div class="contra-src">${c.src.join(' · ')}</div>` : ''}
      </div>`).join('')}
    </div>`;
  },

  // ── SOURCE FILES VIEW ─────────────────────────────────────────────────────
  renderFiles() {
    const el = document.getElementById('view-files');
    if (!el) return;
    el.innerHTML = `<div class="src-list">${SD.sourceFiles.map(f => `
      <div class="src-card">
        <div>
          <div class="src-path">${f.path}</div>
          <div class="src-role">${f.role}</div>
        </div>
        <div class="src-status">${this.stabilityTag(f.status)}</div>
      </div>`).join('')}
    </div>`;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
