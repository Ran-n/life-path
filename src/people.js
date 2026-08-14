const personCache = new Map();

function shuffledCopy(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

async function fetchPersonSummary(name) {
  if (personCache.has(name)) return personCache.get(name);

  const promise = (async () => {
    try {
      const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name.replace(/ /g, '_'))}`
      );
      if (!res.ok) throw new Error('not found');
      const json = await res.json();
      return {
        name,
        thumbnail: json.thumbnail ? json.thumbnail.source : null,
        extract: json.extract || '',
        url: (json.content_urls && json.content_urls.desktop && json.content_urls.desktop.page)
          || `https://en.wikipedia.org/wiki/${encodeURIComponent(name.replace(/ /g, '_'))}`
      };
    } catch (e) {
      return {
        name,
        thumbnail: null,
        extract: '',
        url: `https://en.wikipedia.org/wiki/${encodeURIComponent(name.replace(/ /g, '_'))}`
      };
    }
  })();

  personCache.set(name, promise);
  return promise;
}

function buildPersonCard(name) {
  const card = document.createElement('a');
  card.className = 'person-card';
  card.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(name.replace(/ /g, '_'))}`;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';

  card.innerHTML = `
    <div class="person-photo person-photo-loading">
      <span class="person-initials">${initials(name)}</span>
    </div>
    <div class="person-info">
      <div class="person-name">${name}</div>
      <div class="person-extract"></div>
    </div>
  `;

  fetchPersonSummaryForCard(card, name);
  return card;
}

function fetchPersonSummaryForCard(card, name) {
  fetchPersonSummary(name).then(data => {
    const photoEl = card.querySelector('.person-photo');
    const extractEl = card.querySelector('.person-extract');
    photoEl.classList.remove('person-photo-loading');

    if (data.thumbnail) {
      const img = document.createElement('img');
      img.src = data.thumbnail;
      img.alt = name;
      img.loading = 'lazy';
      photoEl.innerHTML = '';
      photoEl.appendChild(img);
    }

    if (data.extract) {
      extractEl.textContent = data.extract.length > 110
        ? data.extract.slice(0, 107).trim() + '…'
        : data.extract;
    }

    card.href = data.url;
  });

  return card;
}

// Toggle button + lazy-loaded people panel, shared by the calculator and guide pages.
function buildPeopleSection(figures) {
  const wrap = document.createElement('div');
  wrap.className = 'people-section';

  if (!figures || !figures.length) return wrap;

  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'people-toggle';
  toggleBtn.innerHTML = `
    <span class="people-toggle-label">${I18N.t('seeWhoLabel')}</span>
    <span class="people-toggle-count">${figures.length}</span>
  `;

  const panel = document.createElement('div');
  panel.className = 'people-panel';
  panel.hidden = true;

  const labelEl = toggleBtn.querySelector('.people-toggle-label');
  let loaded = false;

  toggleBtn.addEventListener('click', () => {
    const opening = panel.hidden;

    if (opening) {
      panel.hidden = false;
      toggleBtn.classList.add('people-toggle-open');
      labelEl.textContent = I18N.t('hideFiguresLabel');
      if (!loaded) {
        loaded = true;
        figures.forEach(name => panel.appendChild(buildPersonCard(name)));
      }
    } else {
      panel.hidden = true;
      toggleBtn.classList.remove('people-toggle-open');
      labelEl.textContent = I18N.t('seeWhoLabel');
    }
  });

  wrap.appendChild(toggleBtn);
  wrap.appendChild(panel);
  return wrap;
}

// Toggle button + expandable deep-dive panel, shared by the calculator and guide pages.
function buildDetailsSection(details) {
  const wrap = document.createElement('div');
  wrap.className = 'details-section';

  if (!details || !details.length) return wrap;

  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'people-toggle details-toggle';
  toggleBtn.innerHTML = `<span class="people-toggle-label">${I18N.t('readFullProfile')}</span>`;

  const panel = document.createElement('div');
  panel.className = 'details-panel';
  panel.hidden = true;
  panel.innerHTML = details.map(p => `<p>${p}</p>`).join('');

  const labelEl = toggleBtn.querySelector('.people-toggle-label');

  toggleBtn.addEventListener('click', () => {
    const opening = panel.hidden;
    panel.hidden = !opening;
    toggleBtn.classList.toggle('people-toggle-open', opening);
    labelEl.textContent = opening ? I18N.t('hideFullProfile') : I18N.t('readFullProfile');
  });

  wrap.appendChild(toggleBtn);
  wrap.appendChild(panel);
  return wrap;
}
