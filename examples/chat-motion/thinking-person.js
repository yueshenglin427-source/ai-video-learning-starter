(function (global) {
  'use strict';
  const clamp = x => Math.min(1, Math.max(0, x));
  const smooth = x => { const t = clamp(x); return t * t * (3 - 2 * t); };
  const drawing = `<svg viewBox="0 0 510 535" xmlns="http://www.w3.org/2000/svg" role="img">
    <g class="mc-thought-cloud"><path class="mc-thought-loop" pathLength="1" d="M100 86C32 14 286-16 295 70S101 125 110 42 360 43 331 108 213 31 264 20"/>
    <g class="mc-thought-page"><rect class="mc-thought-paper" x="32" y="110" width="88" height="58" rx="5" transform="rotate(-12 76 139)"/><path class="mc-paper-ink" d="M48 127l51-10M50 141l37-7"/></g>
    <g class="mc-thought-page"><rect class="mc-thought-paper" x="320" y="95" width="90" height="58" rx="5" transform="rotate(10 365 124)"/><path class="mc-paper-ink" d="M336 112l53 9M334 126l34 6"/></g></g>
    <g><path class="mc-person-shirt" d="M110 432Q116 295 180 292L260 292Q330 316 332 433Z"/>
    <g class="mc-person-head"><path class="mc-person-face" d="M159 190Q153 128 218 125Q284 124 285 193L272 245Q244 284 203 264Q161 253 159 190Z"/><path class="mc-face-line" d="M160 181Q161 108 230 114Q290 117 289 183M176 159Q183 145 194 137M209 140l21-21M180 192l23 2M240 194l22-3M215 214l-4 10 10 2M204 243q18 4 34-2"/></g>
    <path d="M142 342l-16 69 74 15M298 341l18 69-76 15"/></g>
    <path d="M35 444H460M65 454v57M430 454v57"/><rect x="171" y="408" width="91" height="26" rx="4"/><path d="M184 416h63M181 425h68"/><path class="mc-person-cup" d="M367 391h40l-4 43h-32z"/><path d="M406 398q32-3 13 24h-13"/>
  </svg>`;
  /** Pure time-based illustration: no clock, randomness, GSAP or external assets. */
  function createThinkingPerson(target, options = {}) {
    const mount = typeof target === 'string' ? document.querySelector(target) : target;
    if (!mount) throw new Error('ThinkingPerson: mount missing');
    const root = document.createElement('div'); root.className = 'mc-thinking-person';
    root.style.width = (options.width ?? 510) + 'px'; root.innerHTML = drawing; mount.appendChild(root);
    root.querySelector('svg').setAttribute('aria-label', options.ariaLabel ?? '思考中的人停下来，轻轻叹气');
    const palette = { ink: '#172522', paper: '#f2f1eb', mint: '#b9dcd0', teal: '#16816c', coral: '#ce735b', yellow: '#e3be4d', shirt: '#29483b', ...options.palette };
    for (const [key, value] of Object.entries(palette)) root.style.setProperty('--mc-' + key, value);
    const at = options.at ?? 0, sighAt = options.sighAt ?? 6;
    const head = root.querySelector('.mc-person-head'), cloud = root.querySelector('.mc-thought-cloud');
    const loop = root.querySelector('.mc-thought-loop'), pages = [...root.querySelectorAll('.mc-thought-page')];
    function seek(seconds) {
      const time = Number.isFinite(Number(seconds)) ? Number(seconds) : 0;
      const enter = smooth((time - at) / .7), sigh = smooth((time - sighAt) / .65);
      const local = Math.max(0, time - at), drift = Math.sin(local * 1.7) * 4 * (1 - sigh);
      root.style.opacity = String(enter);
      root.style.transform = `translate3d(${((1 - enter) * 38).toFixed(4)}px,0,0)`;
      head.setAttribute('transform', `translate(0 ${(sigh * 14).toFixed(4)}) rotate(${(sigh * 7).toFixed(4)} 222 255)`);
      cloud.style.opacity = String(1 - sigh * .65);
      loop.style.strokeDashoffset = String(1 - smooth((time - at - .2) / 1.1));
      pages[0].setAttribute('transform', `translate(0 ${drift.toFixed(4)})`);
      pages[1].setAttribute('transform', `translate(0 ${(-drift).toFixed(4)})`);
      root.dataset.time = String(time);
      return { time, enter, sigh, drift };
    }
    const api = { seek, nodes: { root, head, cloud, loop, pages }, destroy: () => root.remove() };
    seek(-1); return api;
  }
  global.MotionComponents = { ...global.MotionComponents, createThinkingPerson };
})(window);
