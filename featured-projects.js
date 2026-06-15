const FEATURED_VERSION = "featured-ad-performance-20260615";

const featuredProjects = [
  { slug: "ad", nav: "01 广告", tone: "deep" },
  { slug: "banner", nav: "02 Banner", tone: "light" },
  { slug: "poster", nav: "03 竖版海报", tone: "mist" },
  { slug: "drama", nav: "04 动漫短剧", tone: "deep" },
  { slug: "ui", nav: "05 UI启动页", tone: "light" },
  { slug: "ip", nav: "06 IP设计", tone: "light" }
];

const featuredAdWorks = [
  { title: "窖藏酒CG动画", src: "./assets/categories/video/video-01.mp4" },
  { title: "白酒广告短片", src: "./assets/categories/video/video-02.mp4" },
  { title: "护肤品精华水广告", src: "./assets/categories/video/video-03.mp4" }
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

function imageAttrs({ loading = "lazy", decoding = "async", fetchpriority = "", width, height } = {}) {
  return [
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

function renderFrostNav(activeSlug) {
  const links = featuredProjects.map((project) => {
    const [number, ...labelParts] = project.nav.split(" ");
    const label = labelParts.join(" ") || project.nav.replace(number, "").trim();
    return `<a class="${project.slug === activeSlug ? "is-active" : ""}" href="./featured.html?project=${project.slug}"><span>${number}</span> ${label}</a>`;
  }).join("");

  return `
    <nav class="frost-ref-nav" aria-label="精品项目导航">
      <a class="frost-ref-back" href="./index.html#projects"><span class="frost-ref-chevron" aria-hidden="true"></span><span>返回首页</span></a>
      <div class="frost-ref-tabs" aria-label="精品项目分类">${links}</div>
      <button class="frost-ref-menu" type="button" aria-label="菜单"><span></span><span></span></button>
    </nav>`;
}

function renderDarkNav(activeSlug, prefix) {
  const links = featuredProjects.map((project) => {
    const [number, ...labelParts] = project.nav.split(" ");
    const label = labelParts.join(" ") || project.nav.replace(number, "").trim();
    return `<a class="${project.slug === activeSlug ? "is-active" : ""}" href="./featured.html?project=${project.slug}"><span>${number}</span> ${label}</a>`;
  }).join("");

  return `
    <nav class="${prefix}-crisp-nav" aria-label="精品项目导航">
      <a class="${prefix}-crisp-back" href="./index.html#projects"><span class="${prefix}-crisp-chevron" aria-hidden="true"></span><span>返回首页</span></a>
      <div class="${prefix}-crisp-tabs" aria-label="精品项目分类">${links}</div>
      <button class="${prefix}-crisp-menu" type="button" aria-label="菜单"><span></span><span></span></button>
    </nav>`;
}

function injectFeaturedAdGalleryStyles() {
  if (document.getElementById("featured-ad-gallery-styles")) return;
  const style = document.createElement("style");
  style.id = "featured-ad-gallery-styles";
  style.textContent = `
    body.featured-page[data-featured="ad"] .featured-ad-reference-page{min-height:100vh!important;height:auto!important;overflow-x:hidden!important;overflow-y:auto!important;padding:clamp(106px,9vw,136px) 0 clamp(38px,5vw,68px)!important}
    body.featured-page[data-featured="ad"] .featured-ad-gallery{position:relative;z-index:4;width:min(78vw,1180px);margin:0 auto}
    body.featured-page[data-featured="ad"] .ad-work-video-frame{position:relative!important;top:auto!important;left:auto!important;width:100%!important;transform:none!important;border:1px solid rgba(223,236,255,.52)!important;border-radius:12px!important;box-shadow:0 0 0 1px rgba(104,164,232,.16),0 0 34px rgba(75,143,226,.24),0 28px 72px rgba(0,8,22,.5)!important;transition:box-shadow .26s ease,border-color .26s ease!important}
    body.featured-page[data-featured="ad"] .ad-work-video-frame.is-switching{border-color:rgba(255,222,161,.82)!important;box-shadow:0 0 0 1px rgba(255,204,126,.26),0 0 46px rgba(255,190,96,.28),0 28px 72px rgba(0,8,22,.5)!important}
    body.featured-page[data-featured="ad"] .featured-ad-thumbs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,1.7vw,24px);margin-top:clamp(20px,2.4vw,30px)}
    body.featured-page[data-featured="ad"] .featured-ad-thumb{position:relative;display:block;width:100%;padding:0;overflow:hidden;border:1px solid rgba(183,213,248,.28);border-radius:10px;background:linear-gradient(145deg,#0b1d35,#020812);box-shadow:0 14px 30px rgba(0,8,22,.28);cursor:pointer;transform:scale(1);transition:transform .24s ease,border-color .24s ease,box-shadow .24s ease,filter .24s ease}
    body.featured-page[data-featured="ad"] .featured-ad-thumb::after{position:absolute;inset:0;border-radius:inherit;background:linear-gradient(180deg,transparent 46%,rgba(1,7,16,.82) 100%);pointer-events:none;content:""}
    body.featured-page[data-featured="ad"] .featured-ad-thumb:hover,body.featured-page[data-featured="ad"] .featured-ad-thumb:focus-visible{transform:translateY(-2px) scale(1.018);border-color:rgba(207,228,255,.6);outline:none}
    body.featured-page[data-featured="ad"] .featured-ad-thumb.is-active{z-index:2;transform:scale(1.04);border-color:rgba(255,220,157,.9);box-shadow:0 0 0 1px rgba(255,204,121,.3),0 0 30px rgba(255,185,83,.34),0 18px 40px rgba(0,8,22,.42);filter:brightness(1.05)}
    body.featured-page[data-featured="ad"] .featured-ad-thumb video{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:transparent;pointer-events:none}
    body.featured-page[data-featured="ad"] .featured-ad-thumb-title{position:absolute;left:16px;right:48px;bottom:13px;z-index:2;color:rgba(246,239,223,.94);font-size:clamp(13px,1vw,16px);line-height:1.35;text-align:left;text-shadow:0 2px 10px rgba(0,0,0,.76)}
    body.featured-page[data-featured="ad"] .featured-ad-thumb-play{position:absolute;right:14px;bottom:12px;z-index:2;display:grid;place-items:center;width:28px;aspect-ratio:1;border:1px solid rgba(255,236,200,.76);border-radius:50%;background:rgba(2,9,20,.42);color:rgba(255,246,226,.96);font-size:11px;line-height:1}
    @media(max-width:820px){body.featured-page[data-featured="ad"] .featured-ad-reference-page{padding-top:116px!important}body.featured-page[data-featured="ad"] .featured-ad-gallery{width:min(92vw,760px)}body.featured-page[data-featured="ad"] .featured-ad-thumbs{gap:9px}body.featured-page[data-featured="ad"] .featured-ad-thumb-title{left:9px;right:34px;bottom:8px;font-size:11px}body.featured-page[data-featured="ad"] .featured-ad-thumb-play{right:8px;bottom:7px;width:23px;font-size:9px}}
  `;
  document.head.appendChild(style);
}

function setupFeaturedAdGallery(root) {
  const player = root.querySelector("[data-ad-player]");
  const frame = root.querySelector(".ad-work-video-frame");
  const thumbs = [...root.querySelectorAll("[data-ad-work]")];
  if (!player || !frame || !thumbs.length) return;

  let activeIndex = -1;
  const loadedThumbs = new Set();

  const loadThumb = (index) => {
    if (loadedThumbs.has(index)) return;
    const thumbVideo = thumbs[index]?.querySelector("video[data-thumb-src]");
    if (!thumbVideo) return;
    loadedThumbs.add(index);
    thumbVideo.src = thumbVideo.dataset.thumbSrc;
    thumbVideo.load();
  };

  const selectWork = (index, autoplay = false) => {
    const work = featuredAdWorks[index];
    if (!work || activeIndex === index) {
      if (autoplay && player.paused) player.play().catch(() => {});
      return;
    }

    activeIndex = index;
    thumbs.forEach((thumb, thumbIndex) => {
      const active = thumbIndex === index;
      thumb.classList.toggle("is-active", active);
      thumb.setAttribute("aria-pressed", active ? "true" : "false");
    });

    loadThumb(index);
    frame.classList.add("is-switching");
    player.pause();
    player.preload = "metadata";
    player.src = asset(work.src, "featured-ad-work-20260615");
    player.setAttribute("aria-label", work.title);
    player.load();
    window.setTimeout(() => frame.classList.remove("is-switching"), 320);

    if (autoplay) player.play().catch(() => {});
  };

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("pointerenter", () => loadThumb(index), { once: true });
    thumb.addEventListener("focus", () => loadThumb(index), { once: true });
    thumb.addEventListener("click", () => selectWork(index, true));
  });

  selectWork(0, false);
}

function renderAdReferencePage() {
  const thumbs = featuredAdWorks.map((work, index) => `
    <button class="featured-ad-thumb${index === 0 ? " is-active" : ""}" type="button" data-ad-work="${index}" aria-label="播放${work.title}" aria-pressed="${index === 0 ? "true" : "false"}">
      <video data-thumb-src="${asset(work.src, "featured-ad-thumb-20260615")}" muted playsinline preload="none" width="640" height="360"></video>
      <span class="featured-ad-thumb-title">${work.title}</span>
      <span class="featured-ad-thumb-play" aria-hidden="true">▶</span>
    </button>`).join("");

  return `
    <div class="featured-ad-reference-page" aria-label="01广告精品项目二级页面">
      <div class="featured-ad-gallery">
        <div class="ad-work-video-frame" aria-label="01广告视频作品"><video class="ad-work-video" data-ad-player controls preload="none" playsinline width="1600" height="900"></video></div>
        <div class="featured-ad-thumbs" aria-label="广告作品列表">${thumbs}</div>
      </div>
      ${renderDarkNav("ad", "ad-ref")}
    </div>`;
}

function renderBannerReferencePage() {
  return `<div class="featured-frost-page featured-banner-frost-page" aria-label="02 Banner精品项目二级页面">${renderFrostNav("banner")}<section class="featured-frost-stage" aria-label="02 Banner作品展示"><div class="featured-frost-panel banner-frost-panel"><img class="banner-frost-art" src="${asset("./assets/featured-banner-art-baijiu.jpeg")}" alt="02 Banner精品项目作品展示" ${featuredImageAttrs.banner}></div></section></div>`;
}

function renderPosterReferencePage() {
  return `<div class="featured-frost-page featured-poster-frost-page" aria-label="03竖版海报精品项目二级页面">${renderFrostNav("poster")}<section class="featured-frost-stage" aria-label="03竖版海报作品展示"><div class="featured-frost-panel poster-frost-panel"><img class="poster-frost-art" src="${asset("./assets/featured-poster-art-bridge.png")}" alt="03竖版海报精品项目作品展示" ${featuredImageAttrs.poster}></div></section></div>`;
}

function renderDramaReferencePage() {
  return `<div class="featured-drama-reference-page" aria-label="04动漫短剧精品项目二级页面"><a class="featured-drama-player-shell" href="https://www.bilibili.com/video/BV1XZEe6KE9Z/" target="_blank" rel="noopener noreferrer" aria-label="打开《重生后，我撕了白莲妹妹》作品网页"><img class="featured-drama-player-art" src="${asset("./封面.png", "featured-drama-rebirth-20260612")}" alt="重生后，我撕了白莲妹妹" ${featuredImageAttrs.drama}><span class="featured-drama-play-overlay" aria-hidden="true"><span></span></span></a>${renderDarkNav("drama", "drama-ref")}</div>`;
}

function renderUiReferencePage() {
  return `<div class="featured-frost-page featured-ui-frost-page" aria-label="05 UI启动页精品项目二级页面">${renderFrostNav("ui")}<section class="featured-frost-stage" aria-label="05 UI启动页作品展示"><div class="featured-frost-panel ui-frost-panel ui-frost-gallery"><figure class="ui-frost-work ui-frost-work-dm"><img class="ui-frost-art" src="${asset("./DM助手.png", "featured-ui-dm-assistant-20260613")}" alt="05 UI启动页作品展示：须尽欢 DM助手" ${featuredImageAttrs.uiDm}></figure><figure class="ui-frost-work ui-frost-work-danmu"><img class="ui-frost-art" src="${asset("./ui启动页/62005ee6-8217-4247-bfc0-a3f515374dc7.png", "featured-ui-startup-20260612")}" alt="05 UI启动页作品展示：精彩弹幕 不止视频" ${featuredImageAttrs.uiDanmu}></figure><figure class="ui-frost-work ui-frost-work-sky"><img class="ui-frost-art" src="${asset("./ui启动页/光遇1.2.png", "featured-ui-startup-20260612")}" alt="05 UI启动页作品展示：光遇" ${featuredImageAttrs.uiSky}></figure></div></section></div>`;
}

function renderIpReferencePage() {
  return `<div class="featured-frost-page featured-ip-frost-page" aria-label="06 IP设计精品项目二级页面">${renderFrostNav("ip")}<section class="featured-frost-stage" aria-label="06 IP设计作品展示"><img class="ip-placement-art" src="${asset("./山海月IP.png", "featured-ip-shanhai-20260612")}" alt="06 IP设计精品项目作品展示" ${featuredImageAttrs.ip}></section></div>`;
}

function renderFeaturedPage() {
  const root = document.querySelector("[data-featured-page]");
  if (!root) return;

  const project = getFeaturedProject();
  document.body.dataset.featured = project.slug;
  document.body.dataset.tone = project.tone;
  document.title = `${project.nav} - 未来东方 AI 数字艺术馆`;

  if (project.slug === "ad") {
    injectFeaturedAdGalleryStyles();
    root.innerHTML = renderAdReferencePage();
    setupFeaturedAdGallery(root);
  } else if (project.slug === "banner") root.innerHTML = renderBannerReferencePage();
  else if (project.slug === "poster") root.innerHTML = renderPosterReferencePage();
  else if (project.slug === "drama") root.innerHTML = renderDramaReferencePage();
  else if (project.slug === "ui") root.innerHTML = renderUiReferencePage();
  else if (project.slug === "ip") root.innerHTML = renderIpReferencePage();
}

renderFeaturedPage();