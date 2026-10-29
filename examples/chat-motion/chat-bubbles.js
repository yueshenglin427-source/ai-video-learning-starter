(function (global) {
  'use strict';
  const clamp = n => Math.max(0, Math.min(1, n));
  const ease = n => 1 - Math.pow(1 - clamp(n), 3);
  const el = (tag, cls, parent, text) => {
    const n = document.createElement(tag); n.className = cls;
    if (text !== undefined) n.textContent = text;
    if (parent) parent.appendChild(n); return n;
  };
  /** Standalone DOM chat. All times are seconds relative to this instance. */
  function createChatBubbles(target, options = {}) {
    const mount = typeof target === 'string' ? document.querySelector(target) : target;
    if (!mount) throw new Error('ChatBubbles: mount missing');
    const single = options.mode === 'single';
    const width = options.width ?? 1680, height = options.height ?? (single ? 240 : 640);
    const duration = options.enterDuration ?? .52;
    if (!(width > 300 && height > 160 && duration > 0)) throw new Error('ChatBubbles: invalid dimensions/duration');
    const messages = (options.messages ?? [
      { id: 'request', side: 'self', text: '请整理这份资料。', at: .5 },
      { id: 'received', side: 'friend', text: '任务已收到。', at: 2.1 },
      { id: 'done', side: 'friend', text: '修改完成，可以查看了。', at: 4.3 }
    ]).map((m, i) => ({ ...m, id: String(m.id ?? i), text: String(m.text ?? ''), side: m.side === 'self' ? 'self' : 'friend', at: Number(m.at ?? 0) }));
    if (messages.some(m => !Number.isFinite(m.at))) throw new Error('ChatBubbles: message.at must be finite seconds');
    if (single && messages.length !== 1) throw new Error('ChatBubbles: single mode needs exactly one message');
    const people = {
      friend: { name: '协作者', initials: 'A', ...(options.friend ?? {}) },
      self: { name: '我', initials: 'B', ...(options.self ?? {}) }
    };
    const avatarSize = options.avatarSize ?? (single ? 144 : 96);
    const fontSize = options.fontSize ?? (single ? 56 : 42);
    const gap = single ? 0 : (options.gap ?? 22), bottom = single ? 0 : (options.bottom ?? 24);
    const root = el('div', 'mc-chat', mount); root.dataset.mode = single ? 'single' : 'conversation';
    root.style.width = width + 'px'; root.style.height = height + 'px';
    root.style.setProperty('--mc-avatar', avatarSize + 'px');
    root.style.setProperty('--mc-font', fontSize + 'px');
    if (options.fontFamily) root.style.fontFamily = options.fontFamily;
    root.setAttribute('aria-label', options.ariaLabel ?? '聊天演示');
    const header = el('div', 'mc-chat-header', root, options.title ?? people.friend.name);
    el('span', 'mc-chat-dots', header, '···');
    const viewport = el('div', 'mc-chat-viewport', root);
    el('div', 'mc-chat-shade', viewport);
    const rows = messages.map(message => {
      const person = people[message.side];
      const row = el('div', 'mc-chat-row', viewport); row.dataset.side = message.side;
      row.dataset.messageId = message.id;
      const avatar = el('div', 'mc-chat-avatar', row);
      if (person.avatarUrl) {
        const img = el('img', '', avatar); img.src = person.avatarUrl; img.alt = person.name;
        img.style.objectPosition = person.avatarPosition ?? '50% 50%';
      } else avatar.textContent = person.initials;
      const body = el('div', 'mc-chat-body', row);
      if (message.side !== 'self' || options.showSelfName) el('div', 'mc-chat-name', body, person.name);
      const bubble = el('div', 'mc-chat-bubble', body, message.text);
      return { row, avatar, body, bubble, message };
    });
    function seek(seconds) {
      const time = Number.isFinite(Number(seconds)) ? Number(seconds) : 0;
      const progress = rows.map(n => ease((time - n.message.at) / duration));
      const heights = rows.map(n => n.row.offsetHeight);
      const roomHeight = viewport.clientHeight;
      let push = 0; const states = [];
      for (let i = rows.length - 1; i >= 0; i--) {
        const n = rows[i], p = progress[i]; push += (heights[i] + gap) * p;
        const y = single ? 8 + (1 - p) * 22 : roomHeight - bottom - push + gap;
        const x = (n.message.side === 'self' ? 1 : -1) * (1 - p) * 16;
        n.row.style.opacity = String(p); n.row.style.visibility = p > 0 ? 'visible' : 'hidden';
        n.row.style.transform = `translate3d(${x.toFixed(3)}px,${y.toFixed(3)}px,0)`;
        states.unshift({ id: n.message.id, progress: p, y, height: heights[i], visible: p > 0 && y + heights[i] > 0 && y < roomHeight });
      }
      root.dataset.time = String(time);
      return { time, visible: states.filter(s => s.visible).map(s => s.id), states };
    }
    const api = { seek, messages, nodes: { root, header, viewport, rows }, destroy: () => root.remove() };
    seek(-1); return api;
  }
  global.MotionComponents = { ...global.MotionComponents, createChatBubbles };
})(window);
