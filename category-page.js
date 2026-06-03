const pageRoot = document.querySelector("[data-category-page]");
const requestedSlug = new URLSearchParams(window.location.search).get("cat") || document.body.dataset.category || "portrait";
const current = CATEGORY_DATA[requestedSlug] ? requestedSlug : "portrait";
const category = CATEGORY_DATA[current];

function categoryUrl(slug) {
  return `./category.html?cat=${encodeURIComponent(slug)}`;
}

function nextSlug(slug) {
  const index = CATEGORY_NAV.findIndex((item) => item.slug === slug);
  return CATEGORY_NAV[(index + 1) % CATEGORY_NAV.length].slug;
}

function mediaMarkup(item, extra = "") {
  if (item.type === "video") {
    return `<video src="${item.src}" muted playsinline preload="metadata" ${extra}></video>`;
  }
  return `<img src="${item.src}" alt="${item.title}" ${extra}>`;
}

const CATEGORY_BANNER_COPY = {
  outfit: {
    title: "模特换装",
    en: "MODEL OUTFIT\nTRANSFORMATION",
    desc: "未来文明服饰实验室，\n探索时尚更多可能。"
  },
  retouch: {
    title: "产品精修",
    en: "PRODUCT RETOUCH",
    desc: "商业级产品视觉与细节精修，\n让每一个细节都传递品质价值。"
  },
  poster: {
    title: "海报Banner",
    en: "POSTER BANNER",
    desc: "打造高级引力的视觉海报，\n传递品牌价值与视觉冲击力。"
  },
  ip: {
    title: "IP设计",
    en: "IP DESIGN",
    desc: "从角色设定到世界观构建，\n打造有生命力的IP形象体系。"
  },
  typography: {
    title: "字体设计",
    en: "FONT DESIGN",
    desc: "探索文字的无限可能，\n用创意与视觉赋予文字新生。"
  },
  symbol: {
    title: "超级符号",
    en: "SUPER SYMBOL",
    desc: "提炼核心视觉语言，\n构建简洁有力的符号体系。"
  },
  ui: {
    title: "UI启动页",
    en: "UI SPLASH SCREEN",
    desc: "未来文明入口界面设计探索，\n打造沉浸式的交互体验。"
  },
  icon: {
    title: "ICON设计",
    en: "ICON DESIGN",
    desc: "通过图形语言构建清晰直观的视觉体验，\n服务多元场景应用。"
  },
  video: {
    title: "视频 / 漫剧",
    en: "VIDEO / ANIMATION DRAMA",
    desc: "AI影像创作与剧情表达，\n记录文明故事，探索未来想象。"
  }
};

function renderCategoryPage() {
  const next = CATEGORY_DATA[nextSlug(current)];
  const isPortrait = current === "portrait";
  const isPoster = current === "poster";
  const usesTemplateBanner = !isPortrait && Boolean(category.banner);
  const heroAttributes = usesTemplateBanner ? ` data-template-banner="true" style="--category-banner: url('${category.banner}');"` : "";
  const bannerCopy = usesTemplateBanner ? CATEGORY_BANNER_COPY[current] : null;
  const heroTitle = bannerCopy?.title || category.title;
  const heroEn = bannerCopy?.en || category.en;
  const heroDesc = bannerCopy?.desc || category.desc;
  const heroSubtitle = usesTemplateBanner ? "" : `<strong>${category.subtitle}</strong>`;
  const portraitHeroFigure = isPortrait && category.hero
    ? `<div class="portrait-hero-figure" aria-hidden="true"><img src="${category.hero}" alt=""></div>`
    : "";
  const posterHeroStage = isPoster && !usesTemplateBanner && category.heroWorks?.length
    ? `
      <div class="poster-hero-stage" aria-hidden="true">
        ${category.heroWorks.map((src, index) => `
          <figure class="${index === 0 ? "is-main" : ""}">
            <img src="${src}" alt="">
          </figure>
        `).join("")}
      </div>
    `
    : "";
  const posterHeroFeatures = isPoster && !usesTemplateBanner && category.heroFeatures?.length
    ? `
      <div class="poster-hero-features" aria-label="海报Banner能力标签">
        ${category.heroFeatures.map((item) => `
          <span>
            <span class="icon" data-icon="${item.icon}"></span>
            <strong>${item.title}</strong>
            <small>${item.desc}</small>
          </span>
        `).join("")}
      </div>
    `
    : "";
  const posterTopActions = isPoster && !usesTemplateBanner
    ? `
      <div class="poster-top-actions" aria-label="页面操作">
        <button type="button">
          <span class="icon" data-icon="landmark"></span>
          <span>文明视觉档案馆</span>
          <span class="icon" data-icon="chevron-right"></span>
        </button>
        <button type="button" aria-label="浅色模式">
          <span class="icon" data-icon="sun"></span>
        </button>
      </div>
    `
    : "";
  const posterFilterNav = isPoster && category.filters?.length
    ? `
      <nav class="poster-filter" aria-label="海报Banner筛选">
        ${category.filters.map((filter, index) => `
          <a class="${index === 0 ? "active" : ""}" href="#works-title">${filter}</a>
        `).join("")}
      </nav>
    `
    : "";
  const categorySwitch = isPoster && !usesTemplateBanner
    ? posterFilterNav
    : `
      <nav class="category-switch" aria-label="分类切换导航">
        ${CATEGORY_NAV.map((item) => `
          <a class="${item.slug === current ? "active" : ""}" href="${categoryUrl(item.slug)}">
            <span class="icon" data-icon="${item.icon}"></span>
            <span>${item.label}</span>
          </a>
        `).join("")}
      </nav>
    `;
  document.title = `${category.title} - 铁马德龙作品集`;
  document.body.dataset.category = current;
  document.body.dataset.tone = category.tone;
  document.body.style.setProperty("--cat-accent", category.accent);

  pageRoot.innerHTML = `
    <section class="category-hero" aria-labelledby="category-title"${heroAttributes}>
      <a class="category-back" href="./index.html#categories">
        <span class="icon" data-icon="chevron-left"></span>
        <span>${usesTemplateBanner ? "返回" : isPoster ? "返回首页" : "返回"}</span>
      </a>
      ${posterTopActions}
      <div class="category-hero-copy">
        <p>${heroEn}</p>
        <h1 id="category-title">${heroTitle}</h1>
        ${heroSubtitle}
        <span aria-hidden="true"></span>
        <em>${heroDesc}</em>
        ${posterHeroFeatures}
      </div>
      ${portraitHeroFigure}
      ${posterHeroStage}
    </section>

    ${categorySwitch}

    <section class="category-works" aria-labelledby="works-title">
      <div class="category-section-heading">
        <h2 id="works-title">${category.worksTitle || "作品展示"}</h2>
        <p>${category.worksEn || "VISUAL WORKS"}</p>
      </div>
      <div class="category-work-grid">
        ${category.works.map((item, index) => `
          <button class="work-card${item.orientation ? ` is-${item.orientation}` : ""}" type="button" data-work-index="${index}">
            ${mediaMarkup(item)}
            <span>${item.title}</span>
          </button>
        `).join("")}
      </div>
    </section>

    <section class="category-process" aria-labelledby="process-title">
      <div class="category-section-heading">
        <h2 id="process-title">创作流程</h2>
        <p>CREATION PROCESS</p>
      </div>
      <ol>
        ${category.process.map((step) => `
          <li>
            <span class="process-dot">${typeof step === "string" || !step.icon ? "" : `<span class="icon" data-icon="${step.icon}"></span>`}</span>
            <strong>${typeof step === "string" ? step : step.title}</strong>
            ${typeof step === "string" || !step.desc ? "" : `<small>${step.desc}</small>`}
          </li>
        `).join("")}
      </ol>
    </section>

    <a class="category-next" href="${categoryUrl(nextSlug(current))}">
      <div>
        <span>下一项目</span>
        <strong>${next.title}</strong>
        <small>${next.en}</small>
      </div>
      <span class="next-circle"><span class="icon" data-icon="arrow-right"></span></span>
    </a>
  `;

  renderIcons();
  setupWorkPreview();
}

function setupWorkPreview() {
  const cards = [...document.querySelectorAll(".work-card")];
  const viewer = document.querySelector(".work-viewer");
  const mediaHost = viewer.querySelector(".work-viewer-media");
  let active = 0;
  let touchStart = 0;

  function show(index) {
    active = (index + category.works.length) % category.works.length;
    const item = category.works[active];
    mediaHost.innerHTML = item.type === "video" ? mediaMarkup(item, "controls") : mediaMarkup(item);
    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    renderIcons();
  }

  function close() {
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    mediaHost.replaceChildren();
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => show(Number(card.dataset.workIndex)));
  });

  viewer.querySelector("[data-preview-close]").addEventListener("click", close);
  viewer.querySelector("[data-preview-prev]").addEventListener("click", () => show(active - 1));
  viewer.querySelector("[data-preview-next]").addEventListener("click", () => show(active + 1));
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) close();
  });
  viewer.addEventListener("touchstart", (event) => {
    touchStart = event.changedTouches[0].clientX;
  }, { passive: true });
  viewer.addEventListener("touchend", (event) => {
    const delta = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 46) show(active + (delta < 0 ? 1 : -1));
  }, { passive: true });
  document.addEventListener("keydown", (event) => {
    if (!viewer.classList.contains("is-open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(active - 1);
    if (event.key === "ArrowRight") show(active + 1);
  });
}

renderCategoryPage();
