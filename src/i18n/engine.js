/*
 * Shared language-picker + translation plumbing for the Life Path site.
 * Each per-language file (src/i18n/<code>.js) registers itself into
 * window.I18N.strings[code] and window.I18N.data[code] before this file's
 * init() runs. Pages call I18N.init(render) once their own markup and
 * render() function exist; init() picks the language, wires the picker,
 * and calls render() whenever the language changes.
 *
 * Required markup on every page using the picker:
 *   <div class="lang-picker">
 *     <button class="lang-trigger" id="lang-trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
 *       <span class="flag" id="lang-trigger-flag"></span>
 *       <span id="lang-trigger-name"></span>
 *       <span class="chevron">▾</span>
 *     </button>
 *     <ul class="lang-menu" id="lang-menu" role="listbox" hidden></ul>
 *   </div>
 */
(function (global) {
  var FLAG_GB = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#00247d"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#ffffff" stroke-width="4"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#cf142b" stroke-width="1.5"/><path d="M15,0 V20 M0,10 H30" stroke="#ffffff" stroke-width="6.5"/><path d="M15,0 V20 M0,10 H30" stroke="#cf142b" stroke-width="4"/></svg>';
  var FLAG_ES = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#aa151b"/><rect width="30" height="10" y="5" fill="#f1bf00"/></svg>';
  var FLAG_GALEGO = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#ffffff"/><polygon points="0,20 0,14 24,0 30,0" fill="#0090d6"/></svg>';
  var FLAG_FR = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="20" fill="#0055a4"/><rect width="10" height="20" x="10" fill="#ffffff"/><rect width="10" height="20" x="20" fill="#ef4135"/></svg>';
  var FLAG_PT = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#da291c"/><rect width="12" height="20" fill="#046a38"/><circle cx="12" cy="10" r="3.4" fill="#f2c500" stroke="#da291c" stroke-width="0.3"/></svg>';
  var FLAG_DE = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="6.67" fill="#000000"/><rect width="30" height="6.67" y="6.67" fill="#dd0000"/><rect width="30" height="6.66" y="13.34" fill="#ffce00"/></svg>';
  var FLAG_IT = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="20" fill="#009246"/><rect width="10" height="20" x="10" fill="#ffffff"/><rect width="10" height="20" x="20" fill="#ce2b37"/></svg>';
  var FLAG_RU = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="6.67" fill="#ffffff"/><rect width="30" height="6.67" y="6.67" fill="#0039a6"/><rect width="30" height="6.66" y="13.34" fill="#d52b1e"/></svg>';
  var FLAG_CN = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#de2910"/><g fill="#ffde00"><path d="M5,2 L6,5.2 L9,3.2 L7,6 L9,7 L5.8,6.6 L6,10 L4.6,6.9 L2,8.5 L3.8,5.7 L1,4.6 L4.4,4.6 Z"/><circle cx="10.5" cy="1.5" r="0.7"/><circle cx="12" cy="4" r="0.7"/><circle cx="12" cy="7" r="0.7"/><circle cx="10" cy="9" r="0.7"/></g></svg>';
  var FLAG_JP = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#ffffff"/><circle cx="15" cy="10" r="5.5" fill="#bc002d"/></svg>';
  var FLAG_KR = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#ffffff"/><circle cx="15" cy="10" r="4" fill="#cd2e3a"/><path d="M15,6 A2,2 0 0 1 15,10 A2,2 0 0 0 15,14 A4,4 0 0 0 15,6 Z" fill="#0047a0"/></svg>';
  var FLAG_SA = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#006c35"/><rect x="4" y="13.5" width="18" height="1.6" fill="#ffffff"/><polygon points="22,13.5 26,14.3 22,15.1" fill="#ffffff"/></svg>';
  var FLAG_IN = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="6.67" fill="#ff9933"/><rect width="30" height="6.67" y="6.67" fill="#ffffff"/><rect width="30" height="6.66" y="13.34" fill="#138808"/><circle cx="15" cy="10" r="2.4" fill="none" stroke="#000080" stroke-width="0.4"/></svg>';
  var FLAG_BD = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#006a4e"/><circle cx="13.5" cy="10" r="5.5" fill="#f42a41"/></svg>';
  var FLAG_PK = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#01411c"/><rect width="7.5" height="20" fill="#ffffff"/><circle cx="19" cy="10" r="4.5" fill="#ffffff"/><circle cx="20.5" cy="10" r="3.6" fill="#01411c"/><polygon points="24,6.5 24.9,9 27.5,9 25.4,10.6 26.2,13.1 24,11.6 21.8,13.1 22.6,10.6 20.5,9 23.1,9" fill="#ffffff"/></svg>';
  var FLAG_IR = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="6.67" fill="#239f40"/><rect width="30" height="6.67" y="6.67" fill="#ffffff"/><rect width="30" height="6.66" y="13.34" fill="#da0000"/><circle cx="15" cy="10" r="2.2" fill="none" stroke="#da0000" stroke-width="0.3"/></svg>';
  var FLAG_TR = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#e30a17"/><circle cx="12.5" cy="10" r="4.2" fill="#ffffff"/><circle cx="13.7" cy="10" r="3.4" fill="#e30a17"/><polygon points="18,6.5 18.9,9 21.5,9 19.4,10.6 20.2,13.1 18,11.6 15.8,13.1 16.6,10.6 14.5,9 17.1,9" fill="#ffffff"/></svg>';
  var FLAG_VN = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#da251d"/><polygon points="15,4.5 16.3,8.4 20.4,8.4 17.1,10.8 18.4,14.7 15,12.3 11.6,14.7 12.9,10.8 9.6,8.4 13.7,8.4" fill="#ffff00"/></svg>';
  var FLAG_ID = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="10" fill="#ce1126"/><rect width="30" height="10" y="10" fill="#ffffff"/></svg>';
  var FLAG_TH = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#a51931"/><rect width="30" height="13.33" y="3.33" fill="#ffffff"/><rect width="30" height="6.67" y="6.67" fill="#2d2a4a"/></svg>';
  var FLAG_TZ = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#1eb53a"/><polygon points="0,20 0,15 30,5 30,0" fill="#00a3dd"/><polygon points="0,20 0,16 30,6 30,2" fill="#fcd116"/><polygon points="0,19 0,17 30,7 30,5" fill="#000000"/></svg>';
  var FLAG_ESPERANTO = '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#007a3d"/><rect width="13" height="11" fill="#ffffff"/><text x="6.6" y="9.7" font-size="8" text-anchor="middle" dominant-baseline="middle" fill="#007a3d">★</text></svg>';

  var LANGUAGES = [
    { code: 'en', flag: FLAG_GB, name: 'English' },
    { code: 'es', flag: FLAG_ES, name: 'Español' },
    { code: 'gl', flag: FLAG_GALEGO, name: 'Galego' },
    { code: 'zh', flag: FLAG_CN, name: '中文' },
    { code: 'hi', flag: FLAG_IN, name: 'हिन्दी' },
    { code: 'ar', flag: FLAG_SA, name: 'العربية', rtl: true },
    { code: 'fr', flag: FLAG_FR, name: 'Français' },
    { code: 'bn', flag: FLAG_BD, name: 'বাংলা' },
    { code: 'pt', flag: FLAG_PT, name: 'Português' },
    { code: 'ru', flag: FLAG_RU, name: 'Русский' },
    { code: 'ur', flag: FLAG_PK, name: 'اردو', rtl: true },
    { code: 'id', flag: FLAG_ID, name: 'Bahasa Indonesia' },
    { code: 'de', flag: FLAG_DE, name: 'Deutsch' },
    { code: 'ja', flag: FLAG_JP, name: '日本語' },
    { code: 'sw', flag: FLAG_TZ, name: 'Kiswahili' },
    { code: 'te', flag: FLAG_IN, name: 'తెలుగు' },
    { code: 'tr', flag: FLAG_TR, name: 'Türkçe' },
    { code: 'ta', flag: FLAG_IN, name: 'தமிழ்' },
    { code: 'vi', flag: FLAG_VN, name: 'Tiếng Việt' },
    { code: 'ko', flag: FLAG_KR, name: '한국어' },
    { code: 'it', flag: FLAG_IT, name: 'Italiano' },
    { code: 'fa', flag: FLAG_IR, name: 'فارسی', rtl: true },
    { code: 'pa', flag: FLAG_PA_FLAG(), name: 'ਪੰਜਾਬੀ' },
    { code: 'th', flag: FLAG_TH, name: 'ไทย' },
    { code: 'eo', flag: FLAG_ESPERANTO, name: 'Esperanto' }
  ];

  function FLAG_PA_FLAG() {
    return '<svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#f8bd21"/><rect width="30" height="2.5" fill="#0039a6"/><rect width="30" height="2.5" y="17.5" fill="#0039a6"/><circle cx="15" cy="10" r="3.6" fill="#ff8000"/></svg>';
  }

  var SUPPORTED_LANGS = LANGUAGES.map(function (l) { return l.code; });
  var LANG_BY_CODE = {};
  LANGUAGES.forEach(function (l) { LANG_BY_CODE[l.code] = l; });

  var STORAGE_LANG = 'lifepath-lang';
  var currentLang = 'en';

  function isLoaded(code) {
    return !!global.I18N.strings[code];
  }

  // breren.com hands off the visitor's current language via ?lang= when
  // linking here, since a plain top-level navigation can't carry a
  // postMessage the way the vitralis/licenses iframes do.
  function detectLang() {
    var fromQuery = (new URLSearchParams(location.search).get('lang') || '').toLowerCase();
    if (fromQuery && isLoaded(fromQuery)) {
      localStorage.setItem(STORAGE_LANG, fromQuery);
      return fromQuery;
    }
    var stored = localStorage.getItem(STORAGE_LANG);
    if (stored && isLoaded(stored)) return stored;
    var candidates = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < candidates.length; i++) {
      var code = (candidates[i] || '').slice(0, 2).toLowerCase();
      if (isLoaded(code)) return code;
    }
    return 'en';
  }

  // Drops ?lang=&theme= from the URL once applied, so they don't linger in
  // the address bar or get bookmarked/shared with a stale snapshot baked in.
  function stripHandoffParams() {
    var params = new URLSearchParams(location.search);
    if (!params.has('lang') && !params.has('theme')) return;
    params.delete('lang');
    params.delete('theme');
    var qs = params.toString();
    var newUrl = location.pathname + (qs ? '?' + qs : '') + location.hash;
    window.history.replaceState(null, '', newUrl);
  }

  function applyDirection(code) {
    var lang = LANG_BY_CODE[code];
    document.documentElement.dir = lang && lang.rtl ? 'rtl' : 'ltr';
  }

  // Looks up `key` in the current language's strings, falling back to
  // English, then to the key itself. `{varName}` placeholders in the string
  // are replaced from `vars`.
  function t(key, vars) {
    var store = (global.I18N.strings[currentLang] || {});
    var fallback = global.I18N.strings.en || {};
    var raw = (key in store) ? store[key] : (key in fallback ? fallback[key] : key);
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        raw = raw.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
      });
    }
    return raw;
  }

  // Life-path number data (title/meaning/strengths/etc.) for the current
  // language, falling back to English per-entry if a language's data isn't
  // loaded yet or is missing a number.
  function lifePathData() {
    var store = global.I18N.data[currentLang] || {};
    var fallback = global.I18N.data.en || {};
    var merged = {};
    Object.keys(fallback).forEach(function (n) {
      merged[n] = store[n] || fallback[n];
    });
    return merged;
  }

  function getLang() { return currentLang; }

  function setupLangPicker(onChange) {
    var trigger = document.getElementById('lang-trigger');
    var menu = document.getElementById('lang-menu');
    var triggerFlag = document.getElementById('lang-trigger-flag');
    var triggerName = document.getElementById('lang-trigger-name');
    if (!trigger || !menu) return;

    var available = LANGUAGES.filter(function (lang) {
      return !!global.I18N.strings[lang.code];
    });

    available.forEach(function (lang) {
      var li = document.createElement('li');
      li.setAttribute('role', 'presentation');

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-option';
      btn.setAttribute('role', 'option');
      btn.setAttribute('aria-selected', String(lang.code === currentLang));
      btn.innerHTML = '<span class="flag">' + lang.flag + '</span><span>' + lang.name + '</span>';
      btn.addEventListener('click', function () {
        currentLang = lang.code;
        localStorage.setItem(STORAGE_LANG, lang.code);
        applyDirection(lang.code);
        updateTrigger();
        closeMenu();
        onChange(lang.code);
      });

      li.appendChild(btn);
      menu.appendChild(li);
    });

    updateTrigger();

    trigger.addEventListener('click', function () {
      if (menu.hidden) openMenu(); else closeMenu();
    });

    document.addEventListener('click', function (e) {
      if (!menu.hidden && !e.target.closest('.lang-picker')) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) {
        closeMenu();
        trigger.focus();
      }
    });

    function openMenu() {
      menu.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      menu.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }
    function updateTrigger() {
      var lang = LANG_BY_CODE[currentLang];
      triggerFlag.innerHTML = lang.flag;
      triggerName.textContent = lang.name;
      Array.prototype.forEach.call(menu.querySelectorAll('.lang-option'), function (btn, i) {
        btn.setAttribute('aria-selected', String(available[i].code === currentLang));
      });
    }
  }

  // Mirrors theme.js's tagOutboundLinks() but for ?lang= - kept separate
  // since theme.js runs (and tags ?theme=) before I18N.init() has picked a
  // language. URL.searchParams.set only touches its own key, so the two
  // tags layer onto the same href without clobbering each other.
  function tagOutboundLinks(lang) {
    document.querySelectorAll('a.topbar-logo').forEach(function (a) {
      try {
        var url = new URL(a.href, location.href);
        url.searchParams.set('lang', lang);
        a.href = url.toString();
      } catch (e) { /* malformed href, leave untouched */ }
    });
  }

  // Call once markup is in place. `render` is invoked immediately and again
  // on every language change.
  function init(render) {
    currentLang = detectLang();
    document.documentElement.lang = currentLang;
    applyDirection(currentLang);
    stripHandoffParams();
    tagOutboundLinks(currentLang);
    setupLangPicker(function (code) {
      document.documentElement.lang = code;
      tagOutboundLinks(code);
      render();
    });
    render();
  }

  global.I18N = {
    strings: (global.I18N && global.I18N.strings) || {},
    data: (global.I18N && global.I18N.data) || {},
    LANGUAGES: LANGUAGES,
    SUPPORTED_LANGS: SUPPORTED_LANGS,
    t: t,
    lifePathData: lifePathData,
    getLang: getLang,
    init: init
  };
})(window);
