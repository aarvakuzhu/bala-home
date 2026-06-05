/* ── Tab switching ── */
function showTab(name, btn) {
  document.querySelectorAll('.fw').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(e => e.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}

/* ── Sidebar collapse ── */
function tSb() {
  document.getElementById('sb').classList.toggle('collapsed');
}

/* ── Sidebar section accordion ── */
function tS(id) {
  document.getElementById(id).classList.toggle('open');
}

/* ── Lazy-load tab HTML from /tabs/<name>.html ── */
const _loaded = {};
function loadTab(name, btn) {
  if (_loaded[name]) { showTab(name, btn); return; }
  fetch('/tabs/' + name + '.html')
    .then(r => r.text())
    .then(html => {
      document.getElementById('tab-' + name).innerHTML = html;
      _loaded[name] = true;
      showTab(name, btn);
    })
    .catch(() => {
      document.getElementById('tab-' + name).innerHTML =
        '<p style="color:#c8920a;padding:20px">Could not load tab.</p>';
      showTab(name, btn);
    });
}
