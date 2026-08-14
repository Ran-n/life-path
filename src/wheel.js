const SVG_NS = 'http://www.w3.org/2000/svg';

function wheelAngle(number) {
  const i = WHEEL_ORDER.indexOf(number);
  return i >= 0 ? i * 30 : 0;
}

function polarPoint(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

// Full dial: 12 ticks + labels + sweeping needle. Used on the calculator.
function buildDial(size) {
  const cx = 100, cy = 100;
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 200 200');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.classList.add('dial');
  svg.setAttribute('aria-hidden', 'true');

  const outer = document.createElementNS(SVG_NS, 'circle');
  outer.setAttribute('cx', cx);
  outer.setAttribute('cy', cy);
  outer.setAttribute('r', 92);
  outer.setAttribute('class', 'dial-ring');
  svg.appendChild(outer);

  const inner = document.createElementNS(SVG_NS, 'circle');
  inner.setAttribute('cx', cx);
  inner.setAttribute('cy', cy);
  inner.setAttribute('r', 58);
  inner.setAttribute('class', 'dial-ring dial-ring-inner');
  svg.appendChild(inner);

  WHEEL_ORDER.forEach((n, i) => {
    const angle = i * 30;
    const tickOuter = polarPoint(cx, cy, 92, angle);
    const tickInner = polarPoint(cx, cy, 80, angle);
    const tick = document.createElementNS(SVG_NS, 'line');
    tick.setAttribute('x1', tickInner.x);
    tick.setAttribute('y1', tickInner.y);
    tick.setAttribute('x2', tickOuter.x);
    tick.setAttribute('y2', tickOuter.y);
    tick.setAttribute('data-n', n);
    tick.setAttribute('class', 'dial-tick');
    svg.appendChild(tick);

    const labelPos = polarPoint(cx, cy, 68, angle);
    const text = document.createElementNS(SVG_NS, 'text');
    text.setAttribute('x', labelPos.x);
    text.setAttribute('y', labelPos.y);
    text.setAttribute('data-n', n);
    text.setAttribute('class', 'dial-label');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'central');
    text.textContent = n;
    svg.appendChild(text);
  });

  const needleGroup = document.createElementNS(SVG_NS, 'g');
  needleGroup.setAttribute('class', 'dial-needle-group');
  const needle = document.createElementNS(SVG_NS, 'line');
  needle.setAttribute('x1', cx);
  needle.setAttribute('y1', cy);
  needle.setAttribute('x2', cx);
  needle.setAttribute('y2', cy - 54);
  needle.setAttribute('class', 'dial-needle');
  needleGroup.appendChild(needle);
  svg.appendChild(needleGroup);

  const hub = document.createElementNS(SVG_NS, 'circle');
  hub.setAttribute('cx', cx);
  hub.setAttribute('cy', cy);
  hub.setAttribute('r', 4);
  hub.setAttribute('class', 'dial-hub');
  svg.appendChild(hub);

  svg._needleGroup = needleGroup;
  return svg;
}

function setDialActive(svg, number) {
  const angle = wheelAngle(number);
  svg._needleGroup.style.transform = `rotate(${angle}deg)`;
  svg.querySelectorAll('.dial-tick').forEach(t => {
    t.classList.toggle('dial-tick-active', Number(t.dataset.n) === number);
  });
  svg.querySelectorAll('.dial-label').forEach(t => {
    t.classList.toggle('dial-label-active', Number(t.dataset.n) === number);
  });
  svg.classList.add('dial-set');
}

// Mini badge: ring + 12 unlabeled ticks + one highlighted position. Used on the guide cards.
function buildMiniDial(number, size) {
  const cx = 100, cy = 100;
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 200 200');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.classList.add('mini-dial');
  svg.setAttribute('aria-hidden', 'true');

  const ring = document.createElementNS(SVG_NS, 'circle');
  ring.setAttribute('cx', cx);
  ring.setAttribute('cy', cy);
  ring.setAttribute('r', 88);
  ring.setAttribute('class', 'mini-dial-ring');
  svg.appendChild(ring);

  WHEEL_ORDER.forEach((n, i) => {
    const angle = i * 30;
    const isActive = n === number;
    const tickOuter = polarPoint(cx, cy, 88, angle);
    const tickInner = polarPoint(cx, cy, isActive ? 62 : 74, angle);
    const tick = document.createElementNS(SVG_NS, 'line');
    tick.setAttribute('x1', tickInner.x);
    tick.setAttribute('y1', tickInner.y);
    tick.setAttribute('x2', tickOuter.x);
    tick.setAttribute('y2', tickOuter.y);
    tick.setAttribute('class', 'mini-dial-tick' + (isActive ? ' mini-dial-tick-active' : ''));
    svg.appendChild(tick);
  });

  return svg;
}
