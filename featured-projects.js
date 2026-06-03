const featuredProjects = [
  {
    slug: "ad",
    nav: "01 广告",
    name: "广告",
    next: "banner",
    tone: "deep",
    kind: "video",
    media: "./assets/categories/video/proto-hero.png",
    leftText: "未来东方电影展厅",
    rightText: "光影叙事 / 商业影像",
    workflow: [
      { title: "需求提炼", desc: "明确传播目标与视觉基调", thumb: "./assets/categories/video/proto-04.png" },
      { title: "概念生成", desc: "形成影像方向与气氛参考", thumb: "./assets/categories/video/proto-05.png" },
      { title: "分镜构建", desc: "整理镜头节奏与关键画面", thumb: "./assets/categories/video/proto-06.png" },
      { title: "视频制作", desc: "生成动态画面并统一质感", thumb: "./assets/categories/video/proto-01.png" },
      { title: "成片输出", desc: "完成调色、声音与交付", thumb: "./assets/categories/video/proto-07.png" }
    ]
  },
  {
    slug: "banner",
    nav: "02 Banner",
    name: "Banner",
    next: "poster",
    tone: "light",
    kind: "banner",
    media: [
      "./assets/hero-banner-full.png",
      "./assets/categories/poster/proto-01.png",
      "./assets/categories/poster/proto-02.png",
      "./assets/categories/retouch/proto-01.png",
      "./assets/categories/poster/proto-07.png"
    ],
    workflow: [
      { title: "需求提炼", desc: "明确品牌调性与商品信息", thumb: "./assets/categories/retouch/proto-01.png" },
      { title: "关键词方向", desc: "确定画面气质与视觉重心", thumb: "./assets/categories/poster/proto-05.png" },
      { title: "AI视觉生成", desc: "生成商业视觉素材方案", thumb: "./assets/categories/poster/proto-01.png" },
      { title: "版式设计", desc: "平衡标题、产品与留白", thumb: "./assets/categories/poster/proto-02.png" },
      { title: "精修输出", desc: "统一质感、光影与交付规格", thumb: "./assets/categories/retouch/proto-06.png" }
    ]
  },
  {
    slug: "poster",
    nav: "03 竖版海报",
    name: "竖版海报",
    next: "drama",
    tone: "mist",
    kind: "poster",
    media: "./assets/categories/poster/poster-04.png",
    sideImages: [
      "./assets/categories/poster/poster-03.png",
      "./assets/categories/poster/poster-08.png"
    ],
    workflow: [
      { title: "主题定位", desc: "确定海报主题与情绪基调", thumb: "./assets/categories/poster/proto-03.png" },
      { title: "素材生成", desc: "生成主体、背景与气氛素材", thumb: "./assets/categories/poster/proto-04.png" },
      { title: "构图搭建", desc: "组织视觉动线与版面重心", thumb: "./assets/categories/poster/proto-08.png" },
      { title: "文字编排", desc: "处理标题、信息与阅读节奏", thumb: "./assets/categories/poster/proto-02.png" },
      { title: "后期精修", desc: "统一色彩、层次与最终输出", thumb: "./assets/categories/poster/proto-07.png" }
    ]
  },
  {
    slug: "drama",
    nav: "04 动漫短剧",
    name: "动漫短剧",
    next: "ui",
    tone: "deep",
    kind: "video",
    media: "./assets/categories/video/proto-01.png",
    leftText: "未来东方数字剧场",
    rightText: "动态影像 / 情绪沉浸",
    workflow: [
      { title: "故事设定", desc: "明确人物关系与短剧情绪", thumb: "./assets/categories/video/proto-05.png" },
      { title: "角色与场景", desc: "生成角色形象与关键场景", thumb: "./assets/categories/video/proto-02.png" },
      { title: "分镜脚本", desc: "规划镜头、动作与转场", thumb: "./assets/categories/video/proto-03.png" },
      { title: "动态生成", desc: "形成连续镜头与运动节奏", thumb: "./assets/categories/video/proto-01.png" },
      { title: "剪辑合成", desc: "完成剪辑、字幕与音效", thumb: "./assets/categories/video/proto-07.png" }
    ]
  },
  {
    slug: "ui",
    nav: "05 UI启动页",
    name: "UI启动页",
    next: "ip",
    tone: "light",
    kind: "launch",
    media: "./assets/categories/ui/proto-hero.png",
    workflow: [
      { title: "需求提炼", desc: "明确启动页目标与品牌调性", thumb: "./assets/categories/ui/proto-06.png" },
      { title: "概念方向", desc: "构建系统唤醒瞬间的气氛", thumb: "./assets/categories/ui/proto-07.png" },
      { title: "视觉生成", desc: "生成多组启动空间方案", thumb: "./assets/categories/ui/proto-01.png" },
      { title: "版式整合", desc: "优化主视觉、标题与留白", thumb: "./assets/categories/ui/proto-02.png" },
      { title: "精修输出", desc: "统一光感、细节与适配规格", thumb: "./assets/categories/ui/proto-10.png" }
    ]
  },
  {
    slug: "ip",
    nav: "06 IP设计",
    name: "IP设计",
    next: "ad",
    tone: "light",
    kind: "ip",
    media: "./assets/categories/ip/proto-01.png",
    leftGroups: [
      {
        title: "二维三视图",
        images: ["./assets/categories/ip/ip-01.png"]
      },
      {
        title: "三维三视图",
        images: ["./assets/categories/ip/ip-02.png"]
      },
      {
        title: "细节展示",
        images: ["./assets/categories/ip/proto-04.png", "./assets/categories/ip/proto-05.png", "./assets/categories/ip/proto-06.png", "./assets/categories/ip/proto-07.png"]
      }
    ],
    rightGroups: [
      {
        title: "同款服饰展示",
        images: ["./assets/categories/ip/proto-01.png", "./assets/categories/ip/proto-02.png", "./assets/categories/ip/proto-03.png"]
      },
      {
        title: "同风格延展服饰",
        images: ["./assets/categories/ip/proto-04.png", "./assets/categories/ip/proto-05.png", "./assets/categories/ip/proto-06.png"]
      },
      {
        title: "海报视觉延展",
        images: ["./assets/categories/ip/ip-01.png", "./assets/categories/ip/ip-02.png", "./assets/categories/ip/proto-hero.png"]
      }
    ],
    merch: [
      { label: "手办", image: "./assets/categories/ip/proto-01.png" },
      { label: "玩偶", image: "./assets/categories/ip/proto-02.png" },
      { label: "徽章", image: "./assets/categories/ip/proto-04.png" },
      { label: "手机壳", image: "./assets/categories/ip/proto-05.png" },
      { label: "杯子", image: "./assets/categories/ip/proto-06.png" },
      { label: "礼盒", image: "./assets/categories/ip/proto-08.png" },
      { label: "亚克力", image: "./assets/categories/ip/proto-07.png" },
      { label: "海报", image: "./assets/categories/ip/ip-01.png" }
    ],
    workflow: [
      { title: "角色定位", desc: "确定身份、性格与审美关键词", thumb: "./assets/categories/ip/proto-01.png" },
      { title: "草图设定", desc: "规划轮廓、比例与服饰方向", thumb: "./assets/categories/ip/proto-02.png" },
      { title: "AI建模", desc: "生成角色形象与多角度方案", thumb: "./assets/categories/ip/proto-03.png" },
      { title: "三视图完善", desc: "整理正面、侧面与背面结构", thumb: "./assets/categories/ip/proto-hero.png" },
      { title: "周边延展", desc: "拓展服饰、海报与周边应用", thumb: "./assets/categories/ip/proto-08.png" }
    ]
  }
];

const featuredProjectMap = new Map(featuredProjects.map((project) => [project.slug, project]));

function getFeaturedProject() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project") || params.get("p") || "ad";
  return featuredProjectMap.get(slug) || featuredProjects[0];
}

function mediaImage(src, alt = "") {
  return `<img src="${src}" alt="${alt}" loading="lazy">`;
}

function renderFeaturedNav(current) {
  const links = featuredProjects.map((project) => {
    const active = project.slug === current.slug ? " is-active" : "";
    return `<a class="featured-nav-link${active}" href="./featured.html?project=${project.slug}" aria-current="${project.slug === current.slug ? "page" : "false"}">${project.nav}</a>`;
  }).join("");

  return `
    <header class="featured-nav" aria-label="精品项目导航">
      <a class="featured-back" href="./index.html#projects">
        <span class="icon" data-icon="chevron-left"></span>
        <span>返回首页</span>
      </a>
      <nav class="featured-nav-center" aria-label="精品项目展厅">${links}</nav>
      <button class="featured-menu" type="button" aria-label="菜单">
        <span class="icon" data-icon="menu"></span>
      </button>
    </header>
  `;
}

function renderVideoWork(project) {
  return `
    <div class="featured-side-text">${project.leftText}</div>
    <figure class="featured-player" data-slot="main-video">
      ${mediaImage(project.media, `${project.name}作品视频占位`)}
      <button class="featured-play" type="button" aria-label="播放作品">
        <span class="icon" data-icon="play-circle"></span>
      </button>
      <figcaption class="featured-player-bar">
        <span></span>
        <strong>${project.nav}</strong>
        <small>VIEWING SLOT</small>
      </figcaption>
    </figure>
    <div class="featured-side-text featured-side-text-right">${project.rightText}</div>
  `;
}

function renderBannerWork(project) {
  return `
    <div class="banner-wall" data-slot="banner-gallery">
      <figure class="banner-frame banner-frame-main">${mediaImage(project.media[0], "Banner主作品占位")}</figure>
      <figure class="banner-frame banner-frame-side">${mediaImage(project.media[1], "Banner作品占位")}</figure>
      <figure class="banner-frame banner-frame-tall">${mediaImage(project.media[2], "Banner延展占位")}</figure>
      <figure class="banner-frame banner-frame-low">${mediaImage(project.media[3], "Banner细节占位")}</figure>
      <figure class="banner-frame banner-frame-wide">${mediaImage(project.media[4], "Banner横向占位")}</figure>
    </div>
  `;
}

function renderPosterWork(project) {
  return `
    <div class="poster-gallery" data-slot="vertical-poster">
      <figure class="poster-side poster-side-left">${mediaImage(project.sideImages[0], "竖版海报侧向占位")}</figure>
      <figure class="poster-main">${mediaImage(project.media, "竖版海报主作品占位")}</figure>
      <figure class="poster-side poster-side-right">${mediaImage(project.sideImages[1], "竖版海报延展占位")}</figure>
    </div>
  `;
}

function renderLaunchWork(project) {
  return `
    <div class="launch-space" data-slot="launch-kv">
      <figure class="launch-kv">${mediaImage(project.media, "UI启动页主KV占位")}</figure>
    </div>
  `;
}

function renderImageGroup(group) {
  const images = group.images.map((src) => `<figure>${mediaImage(src, `${group.title}占位`)}</figure>`).join("");
  return `
    <section class="ip-panel">
      <h2>${group.title}</h2>
      <div class="ip-panel-grid">${images}</div>
    </section>
  `;
}

function renderIpWork(project) {
  return `
    <div class="ip-display" data-slot="ip-showroom">
      <div class="ip-column ip-column-left">${project.leftGroups.map(renderImageGroup).join("")}</div>
      <section class="ip-life-pod">
        <div class="ip-pod-ring" aria-hidden="true"></div>
        ${mediaImage(project.media, "IP角色生命舱占位")}
      </section>
      <div class="ip-column ip-column-right">${project.rightGroups.map(renderImageGroup).join("")}</div>
      <section class="ip-merch" aria-label="周边展示">
        <h2>周边展示</h2>
        <div class="ip-merch-grid">
          ${project.merch.map((item) => `
            <figure>
              ${mediaImage(item.image, `${item.label}占位`)}
              <figcaption>${item.label}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderFeaturedWork(project) {
  const renderers = {
    video: renderVideoWork,
    banner: renderBannerWork,
    poster: renderPosterWork,
    launch: renderLaunchWork,
    ip: renderIpWork
  };

  return `
    <section class="featured-work featured-work-${project.kind}" aria-label="${project.nav}作品展示区">
      ${renderers[project.kind](project)}
    </section>
  `;
}

function renderFeaturedProcess(project) {
  return `
    <section class="featured-process" aria-label="${project.nav}工作流程">
      <div class="featured-process-title">
        <strong>工作流程</strong>
        <span>WORKFLOW</span>
      </div>
      <ol>
        ${project.workflow.map((step, index) => `
          <li>
            <span class="process-index">${String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>${step.title}</strong>
              <small>${step.desc}</small>
            </div>
            <figure>${mediaImage(step.thumb, `${step.title}流程占位`)}</figure>
          </li>
        `).join("")}
      </ol>
    </section>
  `;
}

function renderFeaturedNext(project) {
  const nextProject = featuredProjectMap.get(project.next) || featuredProjects[0];
  return `
    <a class="featured-next" href="./featured.html?project=${nextProject.slug}" aria-label="进入下一项目 ${nextProject.nav}">
      <span>NEXT PROJECT</span>
      <strong>${nextProject.nav}</strong>
      <i><span class="icon" data-icon="arrow-right"></span></i>
    </a>
  `;
}

function renderAdReferencePage() {
  return `
    <div class="featured-ad-reference-page" aria-label="01广告精品项目二级页面">
      <img src="./assets/featured-ad-reference-clean.png?v=ad-page-bg-20260602" alt="01广告精品项目二级页面">
      <div class="ad-ref-video-wrap" aria-label="01广告视频作品">
        <video class="ad-ref-video" src="./assets/featured-ad-video.mp4" poster="./assets/featured-ad-moonlake-bg.png?v=ad-page-bg-20260602" muted loop playsinline preload="metadata"></video>
        <div class="ad-ref-video-controls" aria-label="Video controls">
          <button class="ad-ref-video-play" type="button" aria-label="播放视频">播放</button>
          <input class="ad-ref-video-progress" type="range" min="0" max="100" step="0.1" value="0" aria-label="视频进度">
          <span class="ad-ref-video-time">00:00 / 00:00</span>
          <button class="ad-ref-video-sound" type="button" aria-label="打开声音">声音关</button>
        </div>
      </div>
      <span class="ad-ref-menu-mask" aria-hidden="true"></span>
      <span class="ad-ref-workflow-mask ad-ref-workflow-mask-1" aria-hidden="true"></span>
      <span class="ad-ref-workflow-mask ad-ref-workflow-mask-2" aria-hidden="true"></span>
      <span class="ad-ref-workflow-mask ad-ref-workflow-mask-3" aria-hidden="true"></span>
      <span class="ad-ref-workflow-mask ad-ref-workflow-mask-4" aria-hidden="true"></span>
      <span class="ad-ref-workflow-mask ad-ref-workflow-mask-5" aria-hidden="true"></span>
      <a class="ad-ref-hotspot ad-ref-back" href="./index.html#projects" aria-label="返回首页"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-ad" href="./featured.html?project=ad" aria-label="01 广告"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-banner" href="./featured.html?project=banner" aria-label="02 Banner"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-poster" href="./featured.html?project=poster" aria-label="03 竖版海报"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-drama" href="./featured.html?project=drama" aria-label="04 动漫短剧"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-ui" href="./featured.html?project=ui" aria-label="05 UI启动页"></a>
      <a class="ad-ref-hotspot ad-ref-nav ad-ref-nav-ip" href="./featured.html?project=ip" aria-label="06 IP设计"></a>
      <a class="ad-ref-hotspot ad-ref-next" href="./featured.html?project=banner" aria-label="进入下一项目 02 Banner"></a>
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

  if (project.slug === "ad") {
    root.innerHTML = renderAdReferencePage();
    const adVideo = root.querySelector(".ad-ref-video");
    const playButton = root.querySelector(".ad-ref-video-play");
    const progress = root.querySelector(".ad-ref-video-progress");
    const timeLabel = root.querySelector(".ad-ref-video-time");
    const soundButton = root.querySelector(".ad-ref-video-sound");

    function formatVideoTime(value) {
      if (!Number.isFinite(value)) return "00:00";
      const minutes = Math.floor(value / 60);
      const seconds = Math.floor(value % 60);
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    function updateVideoControls() {
      if (!adVideo || !progress || !timeLabel || !playButton || !soundButton) return;
      const duration = Number.isFinite(adVideo.duration) && adVideo.duration > 0 ? adVideo.duration : 0;
      progress.value = duration ? String((adVideo.currentTime / duration) * 100) : "0";
      timeLabel.textContent = `${formatVideoTime(adVideo.currentTime)} / ${formatVideoTime(duration)}`;
      playButton.textContent = adVideo.paused ? "播放" : "暂停";
      playButton.setAttribute("aria-label", adVideo.paused ? "播放视频" : "暂停视频");
      soundButton.textContent = adVideo.muted ? "声音关" : "声音开";
      soundButton.setAttribute("aria-label", adVideo.muted ? "打开声音" : "关闭声音");
    }

    if (adVideo && playButton && progress && soundButton) {
      adVideo.volume = 0.9;
      adVideo.pause();
      adVideo.currentTime = 0;
      adVideo.muted = true;
      updateVideoControls();

      playButton.addEventListener("click", () => {
        if (adVideo.paused) {
          adVideo.play().catch(() => {});
        } else {
          adVideo.pause();
        }
        updateVideoControls();
      });

      adVideo.addEventListener("click", () => {
        if (adVideo.paused) {
          adVideo.play().catch(() => {});
        } else {
          adVideo.pause();
        }
        updateVideoControls();
      });

      soundButton.addEventListener("click", () => {
        adVideo.muted = !adVideo.muted;
        updateVideoControls();
      });

      progress.addEventListener("input", () => {
        const duration = Number.isFinite(adVideo.duration) && adVideo.duration > 0 ? adVideo.duration : 0;
        if (duration) adVideo.currentTime = (Number(progress.value) / 100) * duration;
        updateVideoControls();
      });

      adVideo.addEventListener("loadedmetadata", updateVideoControls);
      adVideo.addEventListener("timeupdate", updateVideoControls);
      adVideo.addEventListener("play", updateVideoControls);
      adVideo.addEventListener("pause", updateVideoControls);
      adVideo.addEventListener("volumechange", updateVideoControls);
    }
    return;
  }

  root.innerHTML = `
    <div class="featured-shell">
      ${renderFeaturedNav(project)}
      ${renderFeaturedWork(project)}
      ${renderFeaturedProcess(project)}
      ${renderFeaturedNext(project)}
    </div>
  `;

  if (typeof renderIcons === "function") renderIcons();
}

renderFeaturedPage();
