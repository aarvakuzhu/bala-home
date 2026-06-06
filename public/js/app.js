/**
 * app.js — Tab switching, lazy loading, room panel
 */

const _loaded = {};

/* ── Tab switching ── */
function showTab(name, btn) {
  document.querySelectorAll('.fw').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(e => e.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  if (btn) btn.classList.add('active');
}

/* ── Sidebar collapse ── */
function tSb() {
  document.getElementById('sb').classList.toggle('collapsed');
}

/* ── Sidebar section accordion ── */
function tS(id) {
  document.getElementById(id).classList.toggle('open');
}

/* ── Lazy-load tab HTML from /tabs/<name>/index.html or /tabs/<name>.html ── */
function loadTab(name, btn) {
  if (_loaded[name]) { showTab(name, btn); return; }

  // Try floor index first, then flat file
  const urls = [
    `/tabs/${name}/index.html`,
    `/tabs/${name}.html`
  ];

  tryFetch(urls, 0, name, btn);
}

function tryFetch(urls, i, name, btn) {
  if (i >= urls.length) {
    document.getElementById('tab-' + name).innerHTML =
      '<p style="color:#c8920a;padding:20px">Could not load tab: ' + name + '</p>';
    showTab(name, btn);
    return;
  }
  fetch(urls[i])
    .then(r => { if (!r.ok) throw new Error(); return r.text(); })
    .then(html => {
      document.getElementById('tab-' + name).innerHTML = html;
      _loaded[name] = true;
      showTab(name, btn);
    })
    .catch(() => tryFetch(urls, i + 1, name, btn));
}

/* ── Room panel — open detail overlay for a room ── */
function openRoom(roomId) {
  const room = ROOMS[roomId];
  if (!room) return;

  // If room panel HTML already loaded, just show panel
  const panelEl = document.getElementById('room-panel');
  panelEl.classList.add('open');
  panelEl.innerHTML = '<div class="rp-loading">Loading ' + room.label + '…</div>';

  const floor = room.floor;
  fetch(`/tabs/${floor}/${roomId}.html`)
    .then(r => { if (!r.ok) throw new Error(); return r.text(); })
    .then(html => { panelEl.innerHTML = html; })
    .catch(() => {
      panelEl.innerHTML = buildRoomPlaceholder(roomId, room);
    });
}

function closeRoom() {
  document.getElementById('room-panel').classList.remove('open');
}

/* ── Placeholder card shown before interior design is done ── */
function buildRoomPlaceholder(id, r) {
  return `
  <div class="room-card">
    <div class="room-card-header" style="background:${r.color}20;border-left:4px solid ${r.color}">
      <h2>${r.label}</h2>
      <span class="rc-area">${r.area} ${r.unit}</span>
      <button class="rc-close" onclick="closeRoom()">✕</button>
    </div>
    <div class="room-card-body">
      <div class="rc-section">
        <h3>Floor Plan Position</h3>
        <p>${r.floor === 'gf' ? 'Ground Floor' : 'First Floor'} · ${r.area} sq ft</p>
      </div>
      <div class="rc-section rc-placeholder">
        <h3>Interior Design</h3>
        <p class="rc-soon">🎨 Not designed yet</p>
        <p class="rc-hint">When ready, this panel will show:<br>
        Wall colours · Flooring · Ceiling · Furniture layout · Materials · Mood board</p>
      </div>
    </div>
  </div>`;
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  // Load sidebar
  fetch('/tabs/sidebar.html')
    .then(r => r.text())
    .then(html => { document.getElementById('sb-inner').innerHTML = html; });

  // Load first tab (requirements)
  loadTab('req', document.querySelector('.tab.active'));
});

/* ── View toggle inside room sheet (Perspective ↔ Plan) ── */
document.addEventListener('click', function(e) {
  const tab = e.target.closest('[data-view-tab]');
  if (!tab) return;
  const sheet = tab.closest('.view-tabs-wrap');
  if (!sheet) return;
  const view = tab.dataset.viewTab;
  sheet.querySelectorAll('[data-view-tab]').forEach(t => {
    t.style.color = t.dataset.viewTab === view ? '#c8920a' : '#888';
    t.style.background = t.dataset.viewTab === view ? '#1e1208' : '#1a1208';
  });
  sheet.querySelectorAll('[data-view-panel]').forEach(p => {
    p.style.display = p.dataset.viewPanel === view ? 'block' : 'none';
  });
});
