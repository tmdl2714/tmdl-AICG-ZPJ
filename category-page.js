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

function mediaDimensions(item) {
  const orientation = item.orientation || "square";
  if (["banner", "video-landscape", "video-link", "retouch-board", "ip-board", "symbol-board"].includes(orientation)) {
    return { width: 1600, height: 900 };
  }
  if (["vertical", "outfit-work", "ui-launch"].includes(orientation) || current === "portrait") {
    return { width: 900, height: 1200 };
  }
  return { width: 1000, height: 1000 };
}

function imageLoadingAttrs(item, extraAttrs = "") {
  const { width, height } = mediaDimensions(item);
  return `loading="lazy" decoding="async" width="${width}" height="${height}" ${extraAttrs}`.trim();
}

function mediaMarkup(item, extra = "") {
  if (item.type === "video") {
    const { width, height } = mediaDimensions(item);
    return `<video src="${item.src}" muted playsinline preload="metadata" width="${width}" height="${height}" ${extra}></video>`;
  }
  return `<img src="${item.src}" alt="${item.title}" ${imageLoadingAttrs(item, extra)}>`;
}

function workCardMarkup(item, index) {
  const className = `work-card${item.orientation ? ` is-${item.orientation}` : ""}`;
  const content = `
            ${mediaMarkup(item)}
            <span>${item.title}</span>
          `;

  if (item.href) {
    return `
          <a class="${className}" href="${item.href}" target="_blank" rel="noopener noreferrer" data-work-index="${index}" aria-label="打开${item.title}作品页">
            ${content}
          </a>
        `;
  }

  return `
          <button class="${className}" type="button" data-work-index="${index}">
            ${content}
          </button>
        `;
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

const CATEGORY_PROCESS_STEPS = {
  portrait: [
    { icon: "user-round", title: "01 确定模特", desc: "确定人物气质 / 统一视觉方向" },
    { icon: "lightbulb", title: "02 灵感构思", desc: "构思主题风格 / 收集灵感参考" },
    { icon: "sparkles", title: "03 AI生成", desc: "多模型生成 / 探索更多可能" },
    { icon: "scan", title: "04 细节精修", desc: "光影色彩优化 / 统一整体质感" },
    { icon: "download", title: "05 成品输出", desc: "输出高品质成品 / 完成最终呈现" }
  ],
  outfit: [
    { icon: "user-round", title: "01 锁定模特", desc: "选择优质模特照片 / 统一拍摄风格" },
    { icon: "shopping-bag", title: "02 服装参考", desc: "提供服装参考图 / 确定换装方向" },
    { icon: "sparkles", title: "03 AI换装", desc: "AI智能换装生成 / 多种造型方案" },
    { icon: "scan", title: "04 细节精修", desc: "优化细节与质感 / 提升画面品质" },
    { icon: "download", title: "05 商业输出", desc: "输出高品质成片 / 满足商业需求" }
  ],
  retouch: [
    { icon: "image", title: "01 原图分析", desc: "分析光影与材质问题 / 确定优化方向" },
    { icon: "sun", title: "02 光影重建", desc: "修正光影与明暗关系 / 重塑立体感" },
    { icon: "box", title: "03 材质优化", desc: "增强纹理与细节质感 / 提升真实表现" },
    { icon: "scan", title: "04 细节精修", desc: "优化边缘与结构 / 去瑕疵与杂点" },
    { icon: "download", title: "05 商业输出", desc: "输出高质量成片 / 满足商业需求" }
  ],
  poster: [
    { icon: "badge", title: "01 主题定位", desc: "明确传播目标 / 分析受众需求" },
    { icon: "lightbulb", title: "02 视觉概念", desc: "创意构思 / 确定视觉方向" },
    { icon: "sparkles", title: "03 AI生成", desc: "多方案生成 / 探索更多可能" },
    { icon: "package", title: "04 商业合成", desc: "精修画面 / 统一视觉风格" },
    { icon: "type", title: "05 字体排版", desc: "信息层级梳理 / 强化视觉表达" },
    { icon: "share", title: "06 成品输出", desc: "多尺寸适配 / 输出成品应用" }
  ],
  ip: [
    { icon: "smile", title: "01 角色定位", desc: "确定角色性格 / 分析受众需求" },
    { icon: "edit", title: "02 草图设定", desc: "创意草图 / 构建造型" },
    { icon: "box", title: "03 三视图完善", desc: "标准三视图绘制 / 确定比例细节" },
    { icon: "package", title: "04 周边延展", desc: "构建产品体系 / 丰富应用场景" },
    { icon: "badge", title: "05 品牌应用", desc: "统一视觉规范 / 落地多场景应用" }
  ],
  typography: [
    { icon: "lightbulb", title: "01 灵感构思", desc: "从主题与情绪中 / 汲取视觉灵感" },
    { icon: "edit", title: "02 草图设计", desc: "手绘构思字体 / 结构与笔画" },
    { icon: "scan", title: "03 细节打磨", desc: "优化笔画细节 / 调整光影与节奏" },
    { icon: "sparkles", title: "04 色彩质感", desc: "搭配材质与光效 / 增强画面表现" },
    { icon: "download", title: "05 成品输出", desc: "输出多格式文件 / 应用于多场景" }
  ],
  symbol: [
    { icon: "box", title: "01 基础图形", desc: "构建视觉骨架 / 统一稳定方向" },
    { icon: "scan", title: "02 元素提取", desc: "提炼关键元素 / 提纯核心特征" },
    { icon: "network", title: "03 结构融合", desc: "组合与结构构建 / 平衡与统一" },
    { icon: "sparkles", title: "04 细节优化", desc: "强化细节与层次 / 提升精致度" },
    { icon: "share", title: "05 统一应用", desc: "建立规范与应用 / 赋能多场景落地" }
  ],
  ui: [
    { icon: "scan", title: "01 关键词定位", desc: "提炼核心关键词 / 明确视觉方向" },
    { icon: "panel", title: "02 视觉设定", desc: "构建设计语言 / 确定风格基调" },
    { icon: "sun", title: "03 氛围构建", desc: "色彩 光影 构图 / 营造整体氛围" },
    { icon: "sparkles", title: "04 细节打磨", desc: "界面 交互 动效 / 提升设计精度" },
    { icon: "download", title: "05 启动页输出", desc: "多端适配 / 最终呈现" }
  ],
  icon: [
    { icon: "badge", title: "01 需求分析", desc: "明确功能与目标 / 分析用户与场景" },
    { icon: "lightbulb", title: "02 概念构思", desc: "提炼关键词 / 构建图形方向" },
    { icon: "edit", title: "03 草图绘制", desc: "多方案草图 / 确定图形语言" },
    { icon: "scan", title: "04 精细设计", desc: "细化图形细节 / 统一视觉规范" },
    { icon: "download", title: "05 应用输出", desc: "多尺寸输出 / 适配不同场景" }
  ],
  video: [
    { icon: "badge", title: "01 项目大纲", desc: "梳理创作方向 / 明确核心主题" },
    { icon: "edit", title: "02 脚本设定", desc: "构建故事脉络 / 设定角色与情节" },
    { icon: "tv", title: "03 镜头设计", desc: "分镜脚本规划 / 镜头语言预设" },
    { icon: "sparkles", title: "04 AI生成", desc: "多模型生成 / 探索更多可能" },
    { icon: "image", title: "05 后期剪辑", desc: "剪辑节奏 / 画面合成" },
    { icon: "sun", title: "06 调色音效", desc: "色彩调校 / 音效与配乐" },
    { icon: "download", title: "07 成片输出", desc: "输出成片 / 多平台发布" }
  ]
};

function renderCategoryPage() {
  const next = CATEGORY_DATA[nextSlug(current)];
  const isPortrait = current === "portrait";
  const isPoster = current === "poster";
  const processSteps = CATEGORY_PROCESS_STEPS[current] || category.process;
  const usesTemplateBanner = !isPortrait && Boolean(category.banner);
  const heroAttributes = usesTemplateBanner ? ` data-template-banner="true" style="--category-banner: url('${category.banner}');"` : "";
  const bannerCopy = usesTemplateBanner ? CATEGORY_BANNER_COPY[current] : null;
  const heroTitle = bannerCopy?.title || category.title;
  const heroEn = bannerCopy?.en || category.en;
  const heroDesc = bannerCopy?.desc || category.desc;
  const heroSubtitle = usesTemplateBanner ? "" : `<strong>${category.subtitle}</strong>`;
  const portraitHeroFigure = isPortrait && category.hero
    ? `<div class="portrait-hero-figure" aria-hidden="true"><img src="${category.hero}" alt="" loading="lazy" decoding="async" width="900" height="1200"></div>`
    : "";
  const posterHeroStage = isPoster && !usesTemplateBanner && category.heroWorks?.length
    ? `
      <div class="poster-hero-stage" aria-hidden="true">
        ${category.heroWorks.map((src, index) => `
          <figure class="${index === 0 ? "is-main" : ""}">
            <img src="${src}" alt="" loading="lazy" decoding="async" width="1600" height="900">
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
        ${category.works.map((item, index) => workCardMarkup(item, index)).join("")}
      </div>
    </section>

    <section class="category-process" aria-labelledby="process-title">
      <div class="category-section-heading">
        <h2 id="process-title">创作流程</h2>
        <p>CREATION PROCESS</p>
      </div>
      <ol>
        ${processSteps.map((step) => `
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
    if (card.matches("a[href]")) return;
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
