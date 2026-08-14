/*
 * Dark/light theme toggle, shared across pages.
 * Required markup: <button class="theme-btn" id="theme-toggle" type="button"></button>
 * The head of every page must also run the anti-flash snippet that sets
 * data-theme on <html> before the stylesheet loads (see index.html/numbers.html).
 */
(function (global) {
  var STORAGE_KEY = 'lifepath-theme';

  function effectiveTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'dark';
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    root.classList.add('theme-switching');
    root.setAttribute('data-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'light' ? '🌙' : '☀️';
    tagOutboundLinks(theme);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.remove('theme-switching');
      });
    });
  }

  // Carries the current theme onto links back to breren.com via ?theme=,
  // since localStorage can't cross that origin boundary.
  function tagOutboundLinks(theme) {
    document.querySelectorAll('a.topbar-logo').forEach(function (a) {
      try {
        var url = new URL(a.href, location.href);
        url.searchParams.set('theme', theme);
        a.href = url.toString();
      } catch (e) { /* malformed href, leave untouched */ }
    });
  }

  function updateLabel(t) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var label = t(effectiveTheme() === 'light' ? 'themeToDark' : 'themeToLight');
    btn.setAttribute('aria-label', label);
    btn.title = label;
  }

  function setupThemeToggle(t) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    applyTheme(effectiveTheme());
    updateLabel(t);
    btn.addEventListener('click', function () {
      var next = effectiveTheme() === 'light' ? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      updateLabel(t);
    });
  }

  global.Theme = {
    effectiveTheme: effectiveTheme,
    applyTheme: applyTheme,
    setupThemeToggle: setupThemeToggle
  };
})(window);
