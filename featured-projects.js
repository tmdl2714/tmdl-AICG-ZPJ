const FEATURED_VERSION = "featured-performance-20260615";

const FEATURED_CSS_ASSET_VERSIONS = {
  "./assets/featured-ad-page-strict-reference.png": "featured-no-layer-20260606"
};

const featuredProjects = [
  { slug: "ad", nav: "01 广告", tone: "deep" },
  { slug: "banner", nav: "02 Banner", tone: "light" },
  { slug: "poster", nav: "03 竖版海报", tone: "mist" },
  { slug: "drama", nav: "04 动漫短剧", tone: "deep" },
  { slug: "ui", nav: "05 UI启动页", tone: "light" },
  { slug: "ip", nav: "06 IP设计", tone: "light" }
];

const featuredProjectMap = new Map(featuredProjects.map((project) => [project.slug, project]));

function getFeaturedProject() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project") || params.get("p") || "ad";
  return featuredProjectMap.get(slug) || featuredProjects[0];
}

function asset(path, version = FEATURED_VERSION) {
  return `${path}?v=${version}`;
}

function cssAsset(path) {
  return asset(path, FEATURED_CSS_ASSET_VERSIONS[path] || FEATURED_VERSION);
}

function imageAttrs({ loading = "lazy", decoding = "async", fetchpriority = "", hidden = false, width, height } = {}) {
  return [
    hidden ? "aria-hidden=\"true\"" : "",
    loading ? `loading="${loading}"` : "",
    decoding ? `decoding="${decoding}"` : "",
    fetchpriority ? `fetchpriority="${fetchpriority}"` : "",
    width ? `width="${width}"` : "",
    height ? `height="${height}"` : ""
  ].filter(Boolean).join(" ");
}

const featuredImageAttrs = {
  banner: imageAttrs({ loading: "eager", fetchpriority: "high", width: 1600, height: 900 }),
  poster: imageAttrs({ loading: "eager", fetchpriority: "high", width: 900, height: 1200 }),
  drama: imageAttrs({ loading: "eager", fetchpriority: "high", width: 1672, height: 941 }),
  uiDm: imageAttrs({ loading: "lazy", width: 852, height: 1846 }),
  uiDanmu: imageAttrs({ loading: "eager", fetchpriority: "high", width: 853, height: 1844 }),
  uiSky: imageAttrs({ loading: "lazy", width: 853, height: 1844 }),
  ip: imageAttrs({ loading: "eager", fetchpriority: "high", width: 1536, height: 1024 })
};

function setupDeferredVideos(root) {
  root.querySelectorAll("video[data-video-src]").forEach((video) => {
    let loaded = false;
    const loadVideo = () => {
      if (loaded) return;
      loaded = true;
      video.src = video.dataset.videoSrc;
      video.load();
    };

    video.addEventListener("error", () => {
      video.removeAttribute("src");
      video.load();
    }, { once: true });

    ["pointerenter", "focus", "pointerdown"].forEach((eventName) => {
      video.addEventListener(eventName, loadVideo, { once: true });
    });
    video.addEventListener("touchstart", loadVideo, { once: true, passive: true });
  });
}

function renderFrostNav(activeSlug) {
  const links = featuredProjects.map((project) => {
    const [number, ...labelParts] = project.nav.split(" ");
    const label = labelParts.join(" ") || project.nav.replace(number, "").trim();
    const active = project.slug === activeSlug ? " is-active" : "";
    return `<a class="${active}" href="./featured.html?project=${project.slug}"><span>${number}</span> ${label}</a>`;
  }).join("");

  return `
    <nav class="frost-ref-nav" aria-label="精品项目导航">
      <a class="frost-ref-back" href="./index.html#projects">
        <span class="frost-ref-chevron" aria-hidden="true"></span>
        <span>返回首页</span>
      </a>
      <div class="frost-ref-tabs" aria-label="精品项目分类">${links}</div>
      <button class="frost-ref-menu" type="button" aria-label="菜单">
        <span></span>
        <span></span>
      </button>
    </nav>
  `;
}

function renderDarkNav(activeSlug, prefix) {
  const links = featuredProjects.map((project) => {
    const [number, ...labelParts] = project.nav.split(" ");
    const label = labelParts.join(" ") || project.nav.replace(number, "").trim();
    const active = project.slug === activeSlug ? " is-active" : "";
    return `<a class="${active}" href="./featured.html?project=${project.slug}"><span>${number}</span> ${label}</a>`;
  }).join("");

  return `
    <nav class="${prefix}-crisp-nav" aria-label="精品项目导航">
      <a class="${prefix}-crisp-back" href="./index.html#projects">
        <span class="${prefix}-crisp-chevron" aria-hidden="true"></span>
        <span>返回首页</span>
      </a>
      <div class="${prefix}-crisp-tabs" aria-label="精品项目分类">${links}</div>
      <button class="${prefix}-crisp-menu" type="button" aria-label="菜单">
        <span></span>
        <span></span>
      </button>
    </nav>
  `;
}

function renderAdReferencePage() {
  return `
    <div class="featured-ad-reference-page" aria-label="01广告精品项目二级页面">
      <div class="ad-work-video-frame" aria-label="01广告视频作品">
        <video class="ad-work-video" data-video-src="${asset("./video-02.mp4", "featured-ad-video-20260612")}" controls preload="none" playsinline width="1600" height="900"></video>
      </div>
      ${renderDarkNav("ad", "ad-ref")}
      <a class="ad-ref-hotspot ad-ref-back" href="./index.html#projects" aria-label="返回首页"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-ad" href="./featured.html?project=ad" aria-label="01 广告"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-banner" href="./featured.html?project=banner" aria-label="02 Banner"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-poster" href="./featured.html?project=poster" aria-label="03 竖版海报"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-drama" href="./featured.html?project=drama" aria-label="04 动漫短剧"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-ui" href="./featured.html?project=ui" aria-label="05 UI启动页"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-ip" href="./featured.html?project=ip" aria-label="06 IP设计"></a>
    </div>
  `;
}

function renderBannerReferencePage() {
  return `
    <div class="featured-frost-page featured-banner-frost-page" aria-label="02 Banner精品项目二级页面">
      ${renderFrostNav("banner")}
      <section class="featured-frost-stage" aria-label="02 Banner作品展示">
        <div class="featured-frost-panel banner-frost-panel">
          <img class="banner-frost-art" src="${asset("./assets/featured-banner-art-baijiu.jpeg")}" alt="02 Banner精品项目作品展示" ${featuredImageAttrs.banner}>
        </div>
      </section>
    </div>
  `;
}

function renderPosterReferencePage() {
  return `
    <div class="featured-frost-page featured-poster-frost-page" aria-label="03竖版海报精品项目二级页面">
      ${renderFrostNav("poster")}
      <section class="featured-frost-stage" aria-label="03竖版海报作品展示">
        <div class="featured-frost-panel poster-frost-panel">
          <img class="poster-frost-art" src="${asset("./assets/featured-poster-art-bridge.png")}" alt="03竖版海报精品项目作品展示" ${featuredImageAttrs.poster}>
        </div>
      </section>
    </div>
  `;
}

function renderDramaReferencePage() {
  return `
    <div class="featured-drama-reference-page" aria-label="04动漫短剧精品项目二级页面">
      <a class="featured-drama-player-shell" href="https://www.bilibili.com/video/BV1XZEe6KE9Z/" target="_blank" rel="noopener noreferrer" aria-label="打开《重生后，我撕了白莲妹妹》作品网页">
        <img class="featured-drama-player-art" src="${asset("./封面.png", "featured-drama-rebirth-20260612")}" alt="重生后，我撕了白莲妹妹" ${featuredImageAttrs.drama}>
        <span class="featured-drama-play-overlay" aria-hidden="true"><span></span></span>
      </a>
      ${renderDarkNav("drama", "drama-ref")}
    </div>
  `;
}

function renderUiReferencePage() {
  return `
    <div class="featured-frost-page featured-ui-frost-page" aria-label="05 UI启动页精品项目二级页面">
      ${renderFrostNav("ui")}
      <section class="featured-frost-stage" aria-label="05 UI启动页作品展示">
        <div class="featured-frost-panel ui-frost-panel ui-frost-gallery">
          <figure class="ui-frost-work ui-frost-work-dm">
            <img class="ui-frost-art" src="${asset("./DM助手.png", "featured-ui-dm-assistant-20260613")}" alt="05 UI启动页作品展示：须尽欢 DM助手" ${featuredImageAttrs.uiDm}>
          </figure>
          <figure class="ui-frost-work ui-frost-work-danmu">
            <img class="ui-frost-art" src="${asset("./ui启动页/62005ee6-8217-4247-bfc0-a3f515374dc7.png", "featured-ui-startup-20260612")}" alt="05 UI启动页作品展示：精彩弹幕 不止视频" ${featuredImageAttrs.uiDanmu}>
          </figure>
          <figure class="ui-frost-work ui-frost-work-sky">
            <img class="ui-frost-art" src="${asset("./ui启动页/光遇1.2.png", "featured-ui-startup-20260612")}" alt="05 UI启动页作品展示：光遇" ${featuredImageAttrs.uiSky}>
          </figure>
        </div>
      </section>
    </div>
  `;
}

function renderIpReferencePage() {
  return `
    <div class="featured-frost-page featured-ip-frost-page" aria-label="06 IP设计精品项目二级页面">
      ${renderFrostNav("ip")}
      <section class="featured-frost-stage" aria-label="06 IP设计作品展示">
        <img class="ip-placement-art" src="${asset("./山海月IP.png", "featured-ip-shanhai-20260612")}" alt="06 IP设计精品项目作品展示" ${featuredImageAttrs.ip}>
      </section>
    </div>
  `;
}

function renderFeaturedPage() {
  const root = document.querySelector("[data-featured-page]");
  if (!root) return;

  const project = getFeaturedProject();
  document.body.dataset.featured = project.slug;
  document.body.dataset.tone = project.tone;
  document.title = `${project.nav} - 未来东方 AI 数字艺术馆`;

  if (project.slug === "ad") root.innerHTML = renderAdReferencePage();
  if (project.slug === "banner") root.innerHTML = renderBannerReferencePage();
  if (project.slug === "poster") root.innerHTML = renderPosterReferencePage();
  if (project.slug === "drama") root.innerHTML = renderDramaReferencePage();
  if (project.slug === "ui") root.innerHTML = renderUiReferencePage();
  if (project.slug === "ip") root.innerHTML = renderIpReferencePage();

  setupDeferredVideos(root);
}

renderFeaturedPage();