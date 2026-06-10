const FEATURED_VERSION = "featured-scale-up-20260606";

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

function imageAttrs({ loading = "lazy", fetchpriority = "low", hidden = false } = {}) {
  return `${hidden ? " aria-hidden=\"true\"" : ""} loading="${loading}" decoding="async" fetchpriority="${fetchpriority}"`;
}

const primaryImageAttrs = imageAttrs({ loading: "eager", fetchpriority: "high" });

function setupDeferredVideos(root) {
  root.querySelectorAll("video[data-src]").forEach((video) => {
    let loaded = false;
    const loadVideo = () => {
      if (loaded) return;
      loaded = true;
      video.src = video.dataset.src;
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
      <img class="featured-ad-reference-art" src="${cssAsset("./assets/featured-ad-page-strict-reference.png")}" alt="01广告精品项目二级页面最终效果"${primaryImageAttrs}>
      <div class="ad-work-video-frame" aria-label="01广告视频作品">
        <video class="ad-work-video" data-src="${asset("./assets/featured-ad-video-baijiu.mp4")}" controls preload="metadata" playsinline></video>
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
          <img class="banner-frost-art" src="${asset("./assets/featured-banner-art-baijiu.jpeg")}" alt="02 Banner精品项目作品展示"${primaryImageAttrs}>
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
          <img class="poster-frost-art" src="${asset("./assets/featured-poster-art-bridge.png")}" alt="03竖版海报精品项目作品展示"${primaryImageAttrs}>
        </div>
      </section>
    </div>
  `;
}

function renderDramaReferencePage() {
  return `
    <div class="featured-drama-reference-page" aria-label="04动漫短剧精品项目二级页面">
      <div class="featured-drama-player-shell" aria-label="04动漫短剧视频模块">
        <img class="featured-drama-player-art" src="${asset("./assets/featured-drama-player-crop.png")}" alt="04动漫短剧播放器模块"${primaryImageAttrs}>
      </div>
      ${renderDarkNav("drama", "drama-ref")}
    </div>
  `;
}

function renderUiReferencePage() {
  return `
    <div class="featured-frost-page featured-ui-frost-page" aria-label="05 UI启动页精品项目二级页面">
      ${renderFrostNav("ui")}
      <section class="featured-frost-stage" aria-label="05 UI启动页作品展示">
        <div class="featured-frost-panel ui-frost-panel">
          <img class="ui-frost-art" src="${asset("./assets/featured-ui-card-reference.png")}" alt="05 UI启动页精品项目作品展示"${primaryImageAttrs}>
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
        <img class="ip-placement-art" src="${asset("./assets/featured-ip-art-reference.png")}" alt="06 IP设计精品项目作品展示"${primaryImageAttrs}>
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
