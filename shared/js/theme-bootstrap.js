/* Apply saved shared settings before the first paint to prevent theme/language flash. */
(() => {
  try {
    const current = JSON.parse(localStorage.getItem('myblock-unified-settings-v2') || 'null') ||
      JSON.parse(localStorage.getItem('myblock-unified-settings-v1') || 'null') ||
      JSON.parse(localStorage.getItem('myblock-studio-v15-preferences') || 'null') || {};
    document.documentElement.dataset.mbTheme = current.theme === 'dark' ? 'dark' : 'light';
    document.documentElement.lang = current.language === 'en' ? 'en' : 'vi';
  } catch (_) {
    document.documentElement.dataset.mbTheme = 'light';
  }
})();
