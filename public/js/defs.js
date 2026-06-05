/* ── Shared SVG <defs> injected into every plan SVG ── */
/* Called once on DOMContentLoaded, appended to a hidden <svg> in <body> */

const SHARED_DEFS = `
<svg id="svg-defs" width="0" height="0" style="position:absolute">
<defs>
  <pattern id="gr" width="10" height="10" patternUnits="userSpaceOnUse">
    <path d="M10 0L0 0 0 10" fill="none" stroke="#dfd8c0" stroke-width=".35"/>
  </pattern>
  <pattern id="h45" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="8" stroke="#a89858" stroke-width="1.2"/>
  </pattern>
  <pattern id="athi" width="14" height="14" patternUnits="userSpaceOnUse">
    <rect width="14" height="14" fill="#f8f0e0"/>
    <path d="M0,7 L7,0 L14,7 L7,14 Z" fill="none" stroke="#d4b060" stroke-width=".6"/>
    <circle cx="7" cy="7" r="1.5" fill="#c8a040" opacity=".5"/>
  </pattern>
  <pattern id="kpat" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#c8a870"/>
    <path d="M0,8 L8,0 L16,8 L8,16 Z" fill="none" stroke="#e8c060" stroke-width=".8"/>
    <circle cx="8" cy="8" r="2" fill="#e8c060" opacity=".5"/>
  </pattern>
  <pattern id="sp" width="10" height="10" patternUnits="userSpaceOnUse">
    <circle cx="5" cy="5" r="1.1" fill="#70c0f0" opacity=".45"/>
  </pattern>
  <radialGradient id="sg" cx="50%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#88c8f0" stop-opacity=".85"/>
    <stop offset="100%" stop-color="#c8ecff" stop-opacity=".15"/>
  </radialGradient>
</defs>
</svg>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', SHARED_DEFS);
});
