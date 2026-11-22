/* MyBlock Studio Unified v3 — robust page-aware Vietnamese/English translations. */
(() => {
  const api = window.MyBlockUnified;
  if (!api || !api.settings) return;

  const COPY = {
    home: {
      vi: {
        heroLead: 'Biến My Blocks trong project PenguinMod thành extension riêng. Phân tích, biên dịch và tùy biến block theo phong cách của bạn — ngay trên trình duyệt.',
        primary: 'Mở MyBlock Studio →', source: 'Xem mã nguồn ↗',
        featureTitle: 'Một công cụ. Nhiều khả năng.', featureSub: 'Các công cụ cần thiết để đưa My Blocks tiến xa hơn.',
        cards: [
          ['My Block Compiler', 'Phân tích project và chuyển định nghĩa My Blocks thành các block của PenguinMod extension.'],
          ['Tùy biến block', 'Đặt nhãn, màu sắc, tên danh mục và logo extension mà vẫn giữ cấu trúc input gốc.'],
          ['Reporter & hàm lồng', 'Hỗ trợ My Block trả về giá trị và gọi reporter lồng trong biểu thức.']
        ],
        ctaTitle: 'Khám phá hành trình phát triển', ctaText: 'Ghé thăm bảo tàng để xem những phiên bản trước của MyBlock Studio.', museum: 'Tham quan bảo tàng →',
        footer: '© 2026 MyBlock Studio · Dự án mã nguồn mở cộng đồng', launch: 'Mở Studio'
      },
      en: {
        heroLead: 'Turn My Blocks from a PenguinMod project into your own extension. Analyze, compile, and customize blocks right in your browser.',
        primary: 'Open MyBlock Studio →', source: 'View source ↗',
        featureTitle: 'One tool. Many possibilities.', featureSub: 'Everything you need to take My Blocks further.',
        cards: [
          ['My Block Compiler', 'Analyze projects and convert My Block definitions into PenguinMod extension blocks.'],
          ['Block customization', 'Customize labels, colors, category names, and extension logos while preserving the original input structure.'],
          ['Reporters & nested calls', 'Support value-returning My Blocks and nested reporter calls inside expressions.']
        ],
        ctaTitle: 'Explore the development journey', ctaText: 'Visit the museum to discover earlier versions of MyBlock Studio.', museum: 'Visit the museum →',
        footer: '© 2026 MyBlock Studio · Community-driven open-source project', launch: 'Launch Studio'
      }
    },
    museum: {
      vi: {
        title: 'MyBlock Studio Museum — Bảo tàng phiên bản',
        tagline: 'VIỆN BẢO TÀNG PHIÊN BẢN · LỊCH SỬ PHÁT TRIỂN',
        intro: 'Khám phá hành trình từ M2E Studio đến MyBlock Studio. Các phiên bản bên dưới được lưu dưới dạng tệp HTML độc lập để bạn có thể tải xuống hoặc mở lại.',
        noticeLabel: 'Thông tin lưu trữ:',
        notice: 'Đây là kho lưu niệm, không phải bản mới nhất. Phiên bản hiện hành là MyBlock Studio v1.5. Một số phiên bản đầu từng mang tên M2E Studio.',
        collection: 'Bộ sưu tập phiên bản cũ',
        descriptions: [
          'Giai đoạn M2E ban đầu · Inspector, Compiler và Extension Exporter.',
          'Cột mốc bổ sung My Block trả về giá trị và Boolean Reporter.',
          'Bắt đầu đổi nhận diện thương hiệu và tùy chỉnh nhãn, màu block.',
          'Giao diện lấy cảm hứng từ Scratch cùng các tùy chỉnh extension nâng cao.'
        ],
        download: 'Tải bản lưu trữ', open: 'Mở thử', fileNote: 'Bản HTML độc lập', footer: 'MyBlock Studio Museum · Lưu trữ lịch sử phát triển', home: 'Quay về trang chủ'
      },
      en: {
        title: 'MyBlock Studio Museum — Version Archive',
        tagline: 'VERSION MUSEUM · DEVELOPMENT HISTORY',
        intro: 'Explore the journey from M2E Studio to MyBlock Studio. The versions below are preserved as standalone HTML files that you can download or open again.',
        noticeLabel: 'Archive notice:',
        notice: 'This is a historical archive, not the latest release. The current version is MyBlock Studio v1.5. Some early releases used the M2E Studio name.',
        collection: 'Previous versions',
        descriptions: [
          'The early M2E era · Inspector, Compiler, and Extension Exporter.',
          'Added value-returning My Blocks and Boolean Reporter support.',
          'Introduced the new brand identity and customizable block labels and colors.',
          'Scratch-inspired interface with advanced extension customization.'
        ],
        download: 'Download HTML', open: 'Open version', fileNote: 'Standalone HTML file', footer: 'MyBlock Studio Museum · Development history archive', home: 'Back to homepage'
      }
    }
  };

  function text(el, value) {
    if (el) el.textContent = value;
  }
  function getPage() {
    const explicit = document.body?.dataset.mbPage;
    if (explicit) return explicit;
    const path = location.pathname.toLowerCase();
    if (path.endsWith('myblock_studio_museum.html')) return 'museum';
    if (path.endsWith('myblock_studio_v1_5.html')) return 'studio';
    return 'home';
  }

  function applyHome(lang) {
    const c = COPY.home[lang];
    text(document.querySelector('.hero .lead'), c.heroLead);
    text(document.querySelector('.hero .actions .btn.primary'), c.primary);
    text(document.querySelector('.hero .actions .btn.secondary'), c.source);
    text(document.querySelector('.section h2'), c.featureTitle);
    text(document.querySelector('.section .sub'), c.featureSub);
    document.querySelectorAll('.section .card').forEach((card, i) => {
      if (!c.cards[i]) return;
      text(card.querySelector('h3'), c.cards[i][0]);
      text(card.querySelector('p'), c.cards[i][1]);
    });
    text(document.querySelector('.cta h2'), c.ctaTitle);
    text(document.querySelector('.cta p'), c.ctaText);
    text(document.querySelector('.cta .btn'), c.museum);
    text(document.querySelector('footer span:first-child'), c.footer);
    text(document.querySelector('footer span:last-child a:last-child'), c.launch);
    document.title = lang === 'vi' ? 'MyBlock Studio — Build beyond blocks' : 'MyBlock Studio — Build beyond blocks';
  }

  function applyMuseum(lang) {
    const c = COPY.museum[lang];
    document.title = c.title;
    text(document.querySelector('.hero .brand > div .eyebrow'), c.tagline);
    text(document.querySelector('.hero .brand + p'), c.intro);

    const notice = document.querySelector('.notice');
    if (notice) {
      notice.replaceChildren();
      const strong = document.createElement('strong');
      strong.textContent = c.noticeLabel + ' ';
      notice.append(strong, document.createTextNode(c.notice));
    }
    text(document.querySelector('.section-title'), c.collection);

    const cards = document.querySelectorAll('main.wrap .grid > .card');
    cards.forEach((card, i) => {
      if (c.descriptions[i]) text(card.querySelector('p'), c.descriptions[i]);
      const actions = card.querySelectorAll('.actions .btn');
      text(actions[0], c.download);
      text(actions[1], c.open);
      const small = card.querySelector('small');
      if (small) {
        const original = small.dataset.fileSize || small.textContent;
        small.dataset.fileSize = original;
        const match = original.match(/^([\d,.]+\s*bytes?)/i);
        const size = match ? match[1] : '';
        small.textContent = size ? `${size} · ${c.fileNote}` : c.fileNote;
      }
      const download = card.querySelector('.actions .btn.primary');
      if (download && !download.hasAttribute('download')) {
        const heading = card.querySelector('h2')?.textContent || `MyBlock_Archive_${i + 1}`;
        const filename = heading.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') + '.html';
        download.setAttribute('download', filename);
      }
    });

    const footer = document.querySelector('main.wrap .footer');
    if (footer) {
      footer.replaceChildren(
        document.createTextNode(c.footer + ' · ')
      );
      const home = document.createElement('a');
      home.href = './index.html';
      home.textContent = c.home;
      footer.append(home);
    }
  }

  function setLanguage(language, syncStudio = true) {
    const lang = language === 'en' ? 'en' : 'vi';
    api.settings.save({ language: lang });
    document.documentElement.lang = lang;
    const page = getPage();
    if (page === 'home') applyHome(lang);
    else if (page === 'museum') applyMuseum(lang);
    api.navigation?.updateNavLanguage(lang);
    api.theme?.paint(api.settings.state.theme);

    const button = document.querySelector('[data-mb-action="language"]');
    if (button) {
      button.textContent = lang.toUpperCase();
      const label = lang === 'vi' ? 'Chuyển sang Tiếng Anh' : 'Switch to Vietnamese';
      button.setAttribute('aria-label', label);
      button.title = label;
    }
    const studioInput = document.getElementById('languageModeInput');
    if (syncStudio && studioInput && studioInput.value !== lang) {
      studioInput.value = lang;
      studioInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  function bindStudioControl() {
    const input = document.getElementById('languageModeInput');
    if (input && !input.dataset.mbUnifiedBound) {
      input.dataset.mbUnifiedBound = 'true';
      input.addEventListener('change', () => setLanguage(input.value, false));
    }
  }

  api.language = { setLanguage, applyHome, applyMuseum, getPage };

  // Delegated click handler: survives navigation markup updates and prevents a dead toggle.
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-mb-action="language"]');
    if (!button) return;
    event.preventDefault();
    const current = api.settings.state.language === 'en' ? 'en' : 'vi';
    setLanguage(current === 'vi' ? 'en' : 'vi');
  });

  function start() {
    bindStudioControl();
    setLanguage(api.settings.state.language, true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
