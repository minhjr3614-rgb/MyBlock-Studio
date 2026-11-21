/* Shared navigation shell for Homepage, Studio and Museum. */
(() => {
  const api = window.MyBlockUnified;
  if (!api) return;
  const path = window.location.pathname.toLowerCase();
  const inferredPage = path.endsWith('myblock_studio_v1_5.html') ? 'studio' :
    path.endsWith('myblock_studio_museum.html') ? 'museum' : 'home';
  const page = document.body?.dataset.mbPage || inferredPage;
  if (document.body) document.body.dataset.mbPage = page;
  const target = document.getElementById('mb-shared-nav');
  if (!target) return;
  target.innerHTML = `
    <a class="mb-skip-link" href="#mb-main-content" data-mb-label="skip">Skip to content</a>
    <header class="mb-topbar">
      <div class="mb-nav-inner">
        <a class="mb-brand" href="./index.html" aria-label="MyBlock Studio — Home">
          <span class="mb-logo" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none"><path d="M10 47V18q0-6 6-2l16 13 16-13q6-4 6 2v29" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span>MyBlock Studio</span>
        </a>
        <nav class="mb-nav-links" aria-label="Main navigation">
          <a href="./index.html" ${page === 'home' ? 'aria-current="page"' : ''} data-mb-label="home">Home</a>
          <a href="./MyBlock_Studio_v1_5.html" ${page === 'studio' ? 'aria-current="page"' : ''} data-mb-label="studio">Studio</a>
          <a href="./MyBlock_Studio_Museum.html" ${page === 'museum' ? 'aria-current="page"' : ''} data-mb-label="museum">Museum</a>
        </nav>
        <div class="mb-nav-tools">
          <button class="mb-tool-btn" type="button" data-mb-action="language" aria-label="Switch language" title="Switch language">VI</button>
          <button class="mb-tool-btn" type="button" data-mb-action="theme" aria-label="Toggle theme" title="Toggle theme"><span class="mb-theme-symbol" aria-hidden="true">☾</span><span class="mb-tool-label">Dark</span></button>
        </div>
      </div>
    </header>`;
  const labels = {
    vi: { home: 'Trang chủ', studio: 'Studio', museum: 'Bảo tàng', skip: 'Chuyển đến nội dung' },
    en: { home: 'Home', studio: 'Studio', museum: 'Museum', skip: 'Skip to content' }
  };
  function updateNavLanguage(lang) {
    const dict = labels[lang] || labels.vi;
    target.querySelectorAll('[data-mb-label]').forEach(el => { el.textContent = dict[el.dataset.mbLabel] || ''; });
    const nav = target.querySelector('.mb-nav-links');
    if (nav) nav.setAttribute('aria-label', lang === 'vi' ? 'Điều hướng chính' : 'Main navigation');
  }
  target.querySelector('[data-mb-action="theme"]')?.addEventListener('click', () => api.theme?.toggleTheme());
  target.querySelector('[data-mb-action="language"]')?.addEventListener('click', () => api.language?.setLanguage(api.settings.state.language === 'vi' ? 'en' : 'vi'));
  api.navigation = { updateNavLanguage, page };
  updateNavLanguage(api.settings.state.language);
  api.theme?.paint(api.settings.state.theme);
  api.language?.setLanguage(api.settings.state.language);
})();
