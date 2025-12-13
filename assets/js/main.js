(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('lc-theme');

  if (stored === 'light') {
    root.classList.add('light');
    toggle.setAttribute('aria-pressed', 'true');
  }

  toggle?.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    localStorage.setItem('lc-theme', isLight ? 'light' : 'dark');
    toggle.setAttribute('aria-pressed', String(isLight));
  });
})();
