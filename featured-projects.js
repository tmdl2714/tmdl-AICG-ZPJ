const FEATURED_VERSION = "featured-banner-spacing-radius-20260616";

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

const featuredBannerWorks = [
  { title: "定格每一道光", src: "./30cb955e-0822-43f3-98d9-4ba484c120d2.png" },
  { title: "窖藏白酒", src: "./assets/featured-banner-art-baijiu.jpeg" },
  { title: "新本上架", src: "./d15079c8-14f0-47b8-864b-dd47c04d6d66.png" },
  { title: "今日上新", src: "./4cca3669-f0f0-4b6e-8557-176422ad07b2.png" }
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

function injectFeaturedIpFlipStyles() {
  if (document.getElementById("featured-ip-flip-styles")) return;
  const style = document.createElement("style");
  style.id = "featured-ip-flip-styles";
  style.textContent = `
    body.featured-page[data-featured="ip"] .ip-flip-stage{aspect-ratio:3/2;pointer-events:auto;perspective:1280px;perspective-origin:center;cursor:pointer}
    body.featured-page[data-featured="ip"] .ip-flip-card{position:absolute;inset:0;border-radius:inherit;transform:rotateY(var(--ip-flip-rotation,0deg));transform-origin:center;transform-style:preserve-3d;transition:transform 780ms cubic-bezier(.22,.72,.2,1);will-change:transform}
    body.featured-page[data-featured="ip"] .ip-flip-face{position:absolute;inset:0;display:block;width:100%;height:100%;overflow:hidden;border-radius:inherit;backface-visibility:hidden;-webkit-backface-visibility:hidden}
    body.featured-page[data-featured="ip"] .ip-flip-face-back{transform:rotateY(180deg)}
    body.featured-page[data-featured="ip"] .ip-flip-face img{display:block;width:100%;height:100%;border-radius:inherit;object-fit:cover;object-position:center;user-select:none;-webkit-user-drag:none}
    body.featured-page[data-featured="ip"] .ip-flip-hit{position:absolute;top:0;bottom:0;z-index:3;display:block;padding:0;border:0;background:transparent;cursor:pointer}
    body.featured-page[data-featured="ip"] .ip-flip-hit-left{left:0;width:50%}
    body.featured-page[data-featured="ip"] .ip-flip-hit-right{right:0;width:50%}
    body.featured-page[data-featured="ip"] .ip-flip-arrow{position:absolute;top:50%;z-index:4;display:grid;place-items:center;width:clamp(34px,3.1vw,48px);aspect-ratio:1;padding:0;border:1px solid rgba(221,242,255,.36);border-radius:50%;background:linear-gradient(145deg,rgba(10,36,64,.38),rgba(222,243,255,.12));box-shadow:0 10px 28px rgba(12,35,64,.2),inset 0 1px rgba(255,255,255,.38);color:rgba(246,253,255,.78);opacity:.46;cursor:pointer;transform:translateY(-50%);transition:opacity 180ms ease,border-color 180ms ease,box-shadow 180ms ease,color 180ms ease;backdrop-filter:blur(12px) saturate(1.1);-webkit-backdrop-filter:blur(12px) saturate(1.1)}
    body.featured-page[data-featured="ip"] .ip-flip-arrow-left{left:max(-64px,-4.4vw)}
    body.featured-page[data-featured="ip"] .ip-flip-arrow-right{right:max(-64px,-4.4vw)}
    body.featured-page[data-featured="ip"] .ip-flip-arrow::before{width:30%;height:30%;border-top:1.8px solid currentColor;border-left:1.8px solid currentColor;content:""}
    body.featured-page[data-featured="ip"] .ip-flip-arrow-left::before{transform:translateX(12%) rotate(-45deg)}
    body.featured-page[data-featured="ip"] .ip-flip-arrow-right::before{transform:translateX(-12%) rotate(135deg)}
    body.featured-page[data-featured="ip"] .ip-flip-arrow:hover,body.featured-page[data-featured="ip"] .ip-flip-arrow:focus-visible{border-color:rgba(238,249,255,.74);box-shadow:0 12px 30px rgba(12,35,64,.24),0 0 20px rgba(174,223,255,.28),inset 0 1px rgba(255,255,255,.58);color:#fff;opacity:.86;outline:none}
    @media(prefers-reduced-motion:reduce){body.featured-page[data-featured="ip"] .ip-flip-card{transition-duration:120ms}}
    @media(max-width:820px){body.featured-page[data-featured="ip"] .ip-flip-arrow{width:34px;opacity:.58}body.featured-page[data-featured="ip"] .ip-flip-arrow-left{left:max(-42px,-6vw)}body.featured-page[data-featured="ip"] .ip-flip-arrow-right{right:max(-42px,-6vw)}}`;
  document.head.appendChild(style);
}

function setupFeaturedIpFlip(root) {
  const stage = root.querySelector("[data-ip-flip-stage]");
  const card = root.querySelector("[data-ip-flip-card]");
  if (!stage || !card) return;
  let rotation = 0;
  const rotate = (direction) => {
    rotation += direction === "left" ? -180 : 180;
    card.style.setProperty("--ip-flip-rotation", `${rotation}deg`);
  };
  stage.querySelectorAll("[data-ip-flip]").forEach((control) => {
    control.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      rotate(control.dataset.ipFlip);
    });
  });
}

function renderFrostNav(activeSlug) {
  const links = featuredProjects.map((project) => {
    const [number, ...labelParts] = project.nav.split(" ");
    const label = labelParts.join(" ") || project.nav.replace(number, "").trim();
    return `<a class="${project.slug === activeSlug ? "is-active" : ""}" href="./featured.html?project=${project.slug}"><span>${number}</span> ${label}</a>`;
  }).join("");
  return `<nav class="frost-ref-nav" aria-label="精品项目导航"><a class="frost-ref-back" href="./index.html#projects"><span class="frost-ref-chevron" aria-hidden="true"></span><span>返回首页</span></a><div class="frost-ref-tabs" aria-label="精品项目分类">${links}</div><button class="frost-ref-menu" type="button" aria-label="菜单"><span></span><span></span></button></nav>`;
}

function renderDarkNav(activeSlug, prefix) {
  const links = featuredProjects.map((project) => {
    const [number, ...labelParts] = project.nav.split(" ");
    const label = labelParts.join(" ") || project.nav.replace(number, "").trim();
    return `<a class="${project.slug === activeSlug ? "is-active" : ""}" href="./featured.html?project=${project.slug}"><span>${number}</span> ${label}</a>`;
  }).join("");
  return `<nav class="${prefix}-crisp-nav" aria-label="精品项目导航"><a class="${prefix}-crisp-back" href="./index.html#projects"><span class="${prefix}-crisp-chevron" aria-hidden="true"></span><span>返回首页</span></a><div class="${prefix}-crisp-tabs" aria-label="精品项目分类">${links}</div><button class="${prefix}-crisp-menu" type="button" aria-label="菜单"><span></span><span></span></button></nav>`;
}

function injectFeaturedAdGalleryStyles() {
  if (document.getElementById("featured-ad-gallery-styles")) return;
  const style = document.createElement("style");
  style.id = "featured-ad-gallery-styles";
  style.textContent = `
    body.featured-page[data-featured="ad"] .featured-ad-reference-page{min-height:100vh!important;height:auto!important;overflow-x:hidden!important;overflow-y:auto!important;padding:clamp(106px,9vw,136px) 0 clamp(38px,5vw,68px)!important}
    body.featured-page[data-featured="ad"] .featured-ad-gallery{position:relative;z-index:4;width:min(78vw,1180px);margin:0 auto}
    body.featured-page[data-featured="ad"] .ad-work-video-frame{position:relative!important;top:auto!important;left:auto!important;width:100%!important;transform:none!important;border:1px solid rgba(223,236,255,.52)!important;border-radius:12px!important;box-shadow:0 0 0 1px rgba(104,164,232,.16),0 0 34px rgba(75,143,226,.24),0 28px 72px rgba(0,8,22,.5)!important}
    body.featured-page[data-featured="ad"] .featured-ad-thumbs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,1.7vw,24px);margin-top:clamp(20px,2.4vw,30px)}
    body.featured-page[data-featured="ad"] .featured-ad-thumb{position:relative;display:block;width:100%;padding:0;overflow:hidden;border:1px solid rgba(183,213,248,.28);border-radius:10px;background:linear-gradient(145deg,#0b1d35,#020812);box-shadow:0 14px 30px rgba(0,8,22,.28);cursor:pointer;transition:transform .24s ease,border-color .24s ease,box-shadow .24s ease}
    body.featured-page[data-featured="ad"] .featured-ad-thumb:hover{transform:translateY(-2px)}
    body.featured-page[data-featured="ad"] .featured-ad-thumb.is-active{border-color:rgba(255,220,157,.9);box-shadow:0 0 30px rgba(255,185,83,.34)}
    body.featured-page[data-featured="ad"] .featured-ad-thumb video{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;pointer-events:none}
    body.featured-page[data-featured="ad"] .featured-ad-thumb-title{position:absolute;left:16px;bottom:13px;color:#fff;text-shadow:0 2px 10px #000}
    body.featured-page[data-featured="ad"] .featured-ad-thumb-play{position:absolute;right:14px;bottom:12px;color:#fff}
    @media(max-width:820px){body.featured-page[data-featured="ad"] .featured-ad-gallery{width:min(92vw,760px)}}`;
  document.head.appendChild(style);
}

function setupFeaturedAdGallery(root) {
  const player = root.querySelector("[data-ad-player]");
  const thumbs = [...root.querySelectorAll("[data-ad-work]")];
  if (!player || !thumbs.length) return;
  const selectWork = (index, autoplay = false) => {
    const work = featuredAdWorks[index];
    if (!work) return;
    thumbs.forEach((thumb, i) => thumb.classList.toggle("is-active", i === index));
    player.pause();
    player.src = asset(work.src, "featured-ad-work-20260615");
    player.load();
    if (autoplay) player.play().catch(() => {});
  };
  thumbs.forEach((thumb, index) => thumb.addEventListener("click", () => selectWork(index, true)));
  selectWork(0, false);
}

function injectFeaturedBannerGalleryStyles() {
  if (document.getElementById("featured-banner-gallery-styles")) return;
  const style = document.createElement("style");
  style.id = "featured-banner-gallery-styles";
  style.textContent = `
    body.featured-page[data-featured="banner"] .featured-frost-stage{overflow:hidden!important}
    .featured-banner-grid{position:absolute;left:50%;top:55%;z-index:3;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(14px,1.6vw,24px);width:min(64vw,900px);max-height:calc(100vh - 150px);transform:translate(-50%,-50%);perspective:1400px}
    .featured-banner-card{position:relative;display:grid;place-items:center;width:100%;aspect-ratio:16/9;padding:0;overflow:visible;border:1px solid rgba(160,196,226,.34);border-radius:9px;background:rgba(240,248,255,.16);box-shadow:0 16px 34px rgba(52,91,126,.16),0 0 20px rgba(170,216,250,.14);cursor:pointer;animation:bannerFloat 4.8s ease-in-out infinite;transition:border-color .28s ease,box-shadow .28s ease,filter .28s ease,opacity .22s ease,top .28s ease}
    .featured-banner-card:nth-child(2){animation-delay:-1.2s}.featured-banner-card:nth-child(3){animation-delay:-2.4s;top:-20px}.featured-banner-card:nth-child(4){animation-delay:-3.6s}
    .featured-banner-card:hover,.featured-banner-card:focus-visible{border-color:rgba(212,166,85,.72);box-shadow:0 20px 42px rgba(52,91,126,.22),0 0 26px rgba(225,177,91,.18);outline:none}
    .featured-banner-card-camera{top:-12px;overflow:hidden;border-color:transparent;border-radius:9px;background:transparent;box-shadow:none}
    .featured-banner-card-camera img{border-radius:inherit}
    .featured-banner-card-camera:hover,.featured-banner-card-camera:focus-visible{border-color:transparent;box-shadow:none;filter:brightness(1.03);outline:none}
    .featured-banner-card.is-source-hidden{opacity:0;pointer-events:none}
    .featured-banner-card img{display:block;width:100%;height:100%;object-fit:contain;object-position:center;pointer-events:none;border-radius:inherit;background:transparent}
    .featured-banner-focus{position:fixed;z-index:80;display:none;overflow:hidden;border:1px solid rgba(195,220,240,.72);border-radius:10px;background:rgba(238,246,251,.96);box-shadow:0 32px 90px rgba(45,76,109,.32),0 0 42px rgba(210,166,84,.22);cursor:zoom-out;transform-origin:center;will-change:left,top,width,height}
    .featured-banner-focus.is-visible{display:block}
    .featured-banner-focus img{display:block;width:100%;height:100%;object-fit:contain;object-position:center;background:transparent}
    .featured-banner-focus::after{position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(255,255,255,.45);pointer-events:none;content:""}
    @keyframes bannerFloat{0%,100%{transform:translateY(-3px)}50%{transform:translateY(3px)}}
    @media(max-width:1180px){.featured-banner-grid{width:min(72vw,820px)}}
    @media(max-width:820px){.featured-banner-grid{top:54%;width:min(90vw,700px);gap:10px}.featured-banner-card{border-radius:7px}.featured-banner-focus{border-radius:8px}}
    @media(prefers-reduced-motion:reduce){.featured-banner-card{animation:none}.featured-banner-focus{transition:none}}`;
  document.head.appendChild(style);
}

function setupFeaturedBannerGallery(root) {
  const cards = [...root.querySelectorAll("[data-banner-work]")];
  const focus = root.querySelector("[data-banner-focus]");
  const focusImage = focus?.querySelector("img");
  if (!cards.length || !focus || !focusImage) return;
  let activeCard = null;
  let animating = false;

  const targetRect = () => {
    const maxWidthByHeight = Math.max(320, (window.innerHeight - 150) * 16 / 9);
    const width = Math.min(window.innerWidth * .62, 980, maxWidthByHeight);
    const height = width * 9 / 16;
    return { left:(window.innerWidth-width)/2, top:Math.max(96,(window.innerHeight-height)/2+8), width, height };
  };

  const setRect = (rect) => {
    focus.style.left = `${rect.left}px`;
    focus.style.top = `${rect.top}px`;
    focus.style.width = `${rect.width}px`;
    focus.style.height = `${rect.height}px`;
  };

  const closeFocus = () => {
    if (!activeCard || animating) return;
    animating = true;
    const from = focus.getBoundingClientRect();
    const to = activeCard.getBoundingClientRect();
    const animation = focus.animate([
      { left:`${from.left}px`,top:`${from.top}px`,width:`${from.width}px`,height:`${from.height}px` },
      { left:`${to.left}px`,top:`${to.top}px`,width:`${to.width}px`,height:`${to.height}px` }
    ], { duration:520, easing:"cubic-bezier(.22,.72,.2,1)", fill:"forwards" });
    animation.onfinish = () => {
      activeCard.classList.remove("is-source-hidden");
      focus.classList.remove("is-visible");
      focus.getAnimations().forEach((item) => item.cancel());
      activeCard = null;
      animating = false;
    };
  };

  const openCard = (card) => {
    if (animating) return;
    if (activeCard === card) { closeFocus(); return; }
    if (activeCard) activeCard.classList.remove("is-source-hidden");
    activeCard = card;
    const image = card.querySelector("img");
    focusImage.src = image.src;
    focusImage.alt = image.alt;
    const from = card.getBoundingClientRect();
    const to = targetRect();
    setRect(from);
    focus.classList.add("is-visible");
    card.classList.add("is-source-hidden");
    animating = true;
    const animation = focus.animate([
      { left:`${from.left}px`,top:`${from.top}px`,width:`${from.width}px`,height:`${from.height}px` },
      { left:`${to.left}px`,top:`${to.top}px`,width:`${to.width}px`,height:`${to.height}px` }
    ], { duration:620, easing:"cubic-bezier(.18,.78,.18,1)", fill:"forwards" });
    animation.onfinish = () => {
      setRect(to);
      focus.getAnimations().forEach((item) => item.cancel());
      animating = false;
    };
  };

  cards.forEach((card) => card.addEventListener("click", () => openCard(card)));
  focus.addEventListener("click", closeFocus);
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeFocus(); });
  root.querySelector(".featured-frost-stage")?.addEventListener("click", (event) => {
    if (activeCard && event.target === event.currentTarget) closeFocus();
  });
}

function renderAdReferencePage() {
  const thumbs = featuredAdWorks.map((work,index)=>`<button class="featured-ad-thumb${index===0?" is-active":""}" type="button" data-ad-work="${index}"><video muted playsinline preload="none"></video><span class="featured-ad-thumb-title">${work.title}</span><span class="featured-ad-thumb-play">▶</span></button>`).join("");
  return `<div class="featured-ad-reference-page" aria-label="01广告精品项目二级页面"><div class="featured-ad-gallery"><div class="ad-work-video-frame"><video class="ad-work-video" data-ad-player controls preload="none" playsinline width="1600" height="900"></video></div><div class="featured-ad-thumbs">${thumbs}</div></div>${renderDarkNav("ad","ad-ref")}</div>`;
}

function renderBannerReferencePage() {
  const cards = featuredBannerWorks.map((work,index)=>`<button class="featured-banner-card${index === 0 ? " featured-banner-card-camera" : ""}" type="button" data-banner-work="${index}" aria-label="查看${work.title}"><img src="${asset(work.src)}" alt="${work.title}" ${featuredImageAttrs.banner}></button>`).join("");
  return `<div class="featured-frost-page featured-banner-frost-page" aria-label="02 Banner精品项目二级页面">${renderFrostNav("banner")}<section class="featured-frost-stage" aria-label="02 Banner作品展示"><div class="featured-banner-grid">${cards}</div><button class="featured-banner-focus" type="button" data-banner-focus aria-label="关闭当前Banner展示"><img alt=""></button></section></div>`;
}

function renderPosterReferencePage() {
  return `<div class="featured-frost-page featured-poster-frost-page" aria-label="03竖版海报精品项目二级页面">${renderFrostNav("poster")}<section class="featured-frost-stage"><div class="featured-frost-panel poster-frost-panel"><img class="poster-frost-art" src="${asset("./assets/featured-poster-art-bridge.png")}" alt="03竖版海报精品项目作品展示" ${featuredImageAttrs.poster}></div></section></div>`;
}

function renderDramaReferencePage() {
  return `<div class="featured-drama-reference-page" aria-label="04动漫短剧精品项目二级页面"><a class="featured-drama-player-shell" href="https://www.bilibili.com/video/BV1XZEe6KE9Z/" target="_blank" rel="noopener noreferrer"><img class="featured-drama-player-art" src="${asset("./封面.png","featured-drama-rebirth-20260612")}" alt="重生后，我撕了白莲妹妹" ${featuredImageAttrs.drama}><span class="featured-drama-play-overlay"><span></span></span></a>${renderDarkNav("drama","drama-ref")}</div>`;
}

function renderUiReferencePage() {
  return `<div class="featured-frost-page featured-ui-frost-page" aria-label="05 UI启动页精品项目二级页面">${renderFrostNav("ui")}<section class="featured-frost-stage"><div class="featured-frost-panel ui-frost-panel ui-frost-gallery"><figure class="ui-frost-work ui-frost-work-dm"><img class="ui-frost-art" src="${asset("./DM助手.png","featured-ui-dm-assistant-20260613")}" alt="须尽欢 DM助手" ${featuredImageAttrs.uiDm}></figure><figure class="ui-frost-work ui-frost-work-danmu"><img class="ui-frost-art" src="${asset("./ui启动页/62005ee6-8217-4247-bfc0-a3f515374dc7.png","featured-ui-startup-20260612")}" alt="精彩弹幕 不止视频" ${featuredImageAttrs.uiDanmu}></figure><figure class="ui-frost-work ui-frost-work-sky"><img class="ui-frost-art" src="${asset("./ui启动页/光遇1.2.png","featured-ui-startup-20260612")}" alt="光遇" ${featuredImageAttrs.uiSky}></figure></div></section></div>`;
}

function renderIpReferencePage() {
  return `<div class="featured-frost-page featured-ip-frost-page" aria-label="06 IP设计精品项目二级页面">${renderFrostNav("ip")}<section class="featured-frost-stage"><div class="ip-placement-art ip-flip-stage" data-ip-flip-stage aria-label="06 IP设计双面作品展示"><div class="ip-flip-card" data-ip-flip-card><figure class="ip-flip-face ip-flip-face-front"><img src="${asset("./山海月IP.png","featured-ip-shanhai-20260612")}" alt="06 IP设计精品项目作品展示正面" ${featuredImageAttrs.ip}></figure><figure class="ip-flip-face ip-flip-face-back"><img src="${asset("./IP综合1.0.png","featured-ip-back-huanhu-20260615")}" alt="06 IP设计精品项目作品展示背面" ${imageAttrs({ loading: "lazy", width: 1536, height: 1024 })}></figure></div><button class="ip-flip-hit ip-flip-hit-left" type="button" data-ip-flip="left" aria-label="向左旋转 IP 作品"></button><button class="ip-flip-hit ip-flip-hit-right" type="button" data-ip-flip="right" aria-label="向右旋转 IP 作品"></button><button class="ip-flip-arrow ip-flip-arrow-left" type="button" data-ip-flip="left" aria-label="向左旋转"></button><button class="ip-flip-arrow ip-flip-arrow-right" type="button" data-ip-flip="right" aria-label="向右旋转"></button></div></section></div>`;
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
  } else if (project.slug === "banner") {
    injectFeaturedBannerGalleryStyles();
    root.innerHTML = renderBannerReferencePage();
    setupFeaturedBannerGallery(root);
  } else if (project.slug === "poster") root.innerHTML = renderPosterReferencePage();
  else if (project.slug === "drama") root.innerHTML = renderDramaReferencePage();
  else if (project.slug === "ui") root.innerHTML = renderUiReferencePage();
  else if (project.slug === "ip") {
    injectFeaturedIpFlipStyles();
    root.innerHTML = renderIpReferencePage();
    setupFeaturedIpFlip(root);
  }
}

renderFeaturedPage();