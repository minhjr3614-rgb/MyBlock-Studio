/* Shared theme controller; Studio's native color/customization system stays intact. */
(() => {
  const api = window.MyBlockUnified;
  if (!api || !api.settings) return;
  function paint(theme) {
    const value = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.mbTheme = value;
    if (document.body) document.body.dataset.theme = value; // Studio v1.5 native selector.
    const button = document.querySelector('[data-mb-action="theme"]');
    if (button) {
      const dark = value === 'dark';
      const vi = api.settings.state.language === 'vi';
      const label = dark ? (vi ? 'Sáng' : 'Light') : (vi ? 'Tối' : 'Dark');
      const accessible = dark ? (vi ? 'Chuyển sang giao diện sáng' : 'Switch to light mode') :
        (vi ? 'Chuyển sang giao diện tối' : 'Switch to dark mode');
      button.innerHTML = `<span class="mb-theme-symbol" aria-hidden="true">${dark ? '☀' : '☾'}</span><span class="mb-tool-label">${label}</span>`;
      button.setAttribute('aria-label', accessible);
      button.title = accessible;
      button.setAttribute('aria-pressed', String(dark));
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#111a28' : '#4c97ff';
  }
  function setTheme(theme, syncStudio = true) {
    const value = theme === 'dark' ? 'dark' : 'light';
    api.settings.save({ theme: value });
    paint(value);
    const input = document.getElementById('themeModeInput');
    if (syncStudio && input && input.value !== value) {
      input.value = value;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
  function toggleTheme() { setTheme(api.settings.state.theme === 'dark' ? 'light' : 'dark'); }
  function bindStudioControl() {
    const input = document.getElementById('themeModeInput');
    if (input && !input.dataset.mbUnifiedBound) {
      input.dataset.mbUnifiedBound = 'true';
      input.addEventListener('change', () => {
        api.settings.save({ theme: input.value });
        paint(input.value);
      });
    }
  }
  api.theme = { paint, setTheme, toggleTheme };
  const start = () => { bindStudioControl(); setTheme(api.settings.state.theme); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
