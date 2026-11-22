/* Shared preferences with migration from Unified v1 and Studio v1.5. */
(() => {
  const KEY = 'myblock-unified-settings-v2';
  const PREVIOUS_KEY = 'myblock-unified-settings-v1';
  const LEGACY_KEY = 'myblock-studio-v15-preferences';
  const safeRead = (key) => {
    try { return JSON.parse(window.localStorage.getItem(key) || 'null'); }
    catch (_) { return null; }
  };
  const previous = safeRead(PREVIOUS_KEY) || {};
  const legacy = safeRead(LEGACY_KEY) || {};
  const saved = safeRead(KEY) || {};
  const state = {
    theme: ['light', 'dark'].includes(saved.theme) ? saved.theme :
      (['light', 'dark'].includes(previous.theme) ? previous.theme : (legacy.theme === 'dark' ? 'dark' : 'light')),
    language: ['vi', 'en'].includes(saved.language) ? saved.language :
      (['vi', 'en'].includes(previous.language) ? previous.language : (legacy.language === 'en' ? 'en' : 'vi'))
  };
  function save(patch = {}) {
    Object.assign(state, patch);
    state.theme = state.theme === 'dark' ? 'dark' : 'light';
    state.language = state.language === 'en' ? 'en' : 'vi';
    try { window.localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) { /* Storage may be unavailable in private/restricted contexts. */ }
  }
  window.MyBlockUnified = window.MyBlockUnified || {};
  window.MyBlockUnified.settings = { KEY, PREVIOUS_KEY, LEGACY_KEY, state, save };
  save(state);
})();
