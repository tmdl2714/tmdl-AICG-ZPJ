(() => {
  const appendUniqueWorks = (category, works) => {
    if (!window.CATEGORY_DATA?.[category]?.works) return;
    const currentWorks = window.CATEGORY_DATA[category].works;
    works.forEach((work) => {
      if (!currentWorks.some((item) => item.src === work.src)) currentWorks.push(work);
    });
  };

  const replaceVideoEndingWorks = () => {
    if (!window.CATEGORY_DATA?.video?.works) return;
    const currentWorks = window.CATEGORY_DATA.video.works;
    currentWorks.splice(-2, 2,
      { type: "video", src: "./渡鸦.mp4", title: "渡鸦", orientation: "video-landscape", poster: "./渡鸦.png" },
      { type: "video", src: "./山海镖局_GitHub_25MB内.mp4", title: "山海镖局", orientation: "video-landscape", poster: "./山海镖局.png" }
    );
  };

  appendUniqueWorks("icon", [
    { type: "image", src: "./01_拼车.png", title: "拼车", orientation: "icon-work" },
    { type: "image", src: "./02_剧本简介.png", title: "剧本简介", orientation: "icon-work" },
    { type: "image", src: "./03_会员.png", title: "会员", orientation: "icon-work" },
    { type: "image", src: "./04_杂谈.png", title: "杂谈", orientation: "icon-work" }
  ]);

  appendUniqueWorks("poster", [
    { type: "image", src: "./01_拼车计划.png", title: "拼车计划", orientation: "banner" },
    { type: "image", src: "./02_周末狂欢夜.png", title: "周末狂欢夜", orientation: "banner" },
    { type: "image", src: "./03_城限专场.png", title: "城限专场", orientation: "banner" },
    { type: "image", src: "./04_DM严选.png", title: "DM严选", orientation: "banner" },
    { type: "image", src: "./05_周年庆典.png", title: "周年庆典", orientation: "banner" },
    { type: "image", src: "./06_未知剧场.png", title: "未知剧场", orientation: "banner" }
  ]);

  replaceVideoEndingWorks();

  const VIDEO_POSTERS = {
    "./渡鸦.mp4": "./渡鸦.png",
    "./山海镖局_GitHub_25MB内.mp4": "./山海镖局.png"
  };

  const innerHTMLDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
  if (innerHTMLDescriptor?.set && innerHTMLDescriptor?.get) {
    Object.defineProperty(Element.prototype, "innerHTML", {
      configurable: true,
      enumerable: innerHTMLDescriptor.enumerable,
      get() {
        return innerHTMLDescriptor.get.call(this);
      },
      set(value) {
        let nextValue = value;
        if (typeof nextValue === "string" && this.matches?.("[data-category-page]")) {
          nextValue = nextValue
            .replace(/<video\s+src="([^"]+)"/g, (match, src) => `<video${VIDEO_POSTERS[src] ? ` poster="${VIDEO_POSTERS[src]}"` : ""} data-src="${src}"`)
            .replace(/preload="metadata"/g, 'preload="none"');
        }
        innerHTMLDescriptor.set.call(this, nextValue);
      }
    });
  }

  const appendChild = Element.prototype.appendChild;
  Element.prototype.appendChild = function appendChildOnce(node) {
    if (this === document.head && node?.tagName === "LINK" && node.href?.includes("category-process.css") && document.querySelector('link[href*="category-process.css"]')) {
      return node;
    }
    return appendChild.call(this, node);
  };

  const NEXT_MAP = {
    portrait: "outfit",
    outfit: "retouch",
    retouch: "poster",
    poster: "ip",
    ip: "typography",
    typography: "symbol",
    symbol: "ui",
    ui: "icon",
    icon: "video",
    video: "portrait"
  };

  const NEXT_IMAGES = {
    outfit: "./下一项/ChatGPT Image 2026年6月12日 19_41_24.png",
    portrait: "./下一项/ChatGPT Image 2026年6月12日 19_46_19.png",
    retouch: "./下一项/ChatGPT Image 2026年6月12日 19_48_41 (2).png",
    poster: "./下一项/ChatGPT Image 2026年6月12日 19_48_42 (3).png",
    ip: "./下一项/ChatGPT Image 2026年6月12日 19_48_42 (4).png",
    typography: "./下一项/ChatGPT Image 2026年6月12日 19_48_42 (5).png",
    symbol: "./下一项/ChatGPT Image 2026年6月12日 19_48_43 (6).png",
    ui: "./下一项/ChatGPT Image 2026年6月12日 19_48_43 (7).png",
    icon: "./下一项/ChatGPT Image 2026年6月12日 19_48_43 (8).png",
    video: "./下一项/ChatGPT Image 2026年6月12日 19_48_44 (9).png"
  };

  function currentCategory() {
    return document.body.dataset.category || new URLSearchParams(window.location.search).get("cat") || "portrait";
  }

  function labelFor(slug) {
    const item = window.CATEGORY_NAV?.find((entry) => entry.slug === slug);
    if (slug === "video") return "视频 / 漫剧";
    return item?.label || slug;
  }

  function tuneWorkImages() {
    const images = [...document.querySelectorAll(".category-work-grid .work-card img")];
    images.forEach((image, index) => {
      const highPriority = index < 4;
      image.loading = highPriority ? "eager" : "lazy";
      image.fetchPriority = highPriority ? "high" : "low";
      image.decoding = "async";
      if (!image.width) image.width = image.naturalWidth || 1000;
      if (!image.height) image.height = image.naturalHeight || 1000;
    });
  }

  function loadVideo(video) {
    if (!video || video.src || !video.dataset.src) return;
    video.src = video.dataset.src;
    video.load();
  }

  function deferWorkVideos() {
    const videos = [...document.querySelectorAll(".category-work-grid .work-card video")];
    if (!videos.length) return;

    videos.forEach((video) => {
      const originalSrc = video.getAttribute("src");
      if (originalSrc) {
        video.dataset.src = originalSrc;
        video.removeAttribute("src");
      }
      video.preload = "none";
      const card = video.closest(".work-card");
      const warm = () => loadVideo(video);
      card?.addEventListener("pointerenter", warm, { once: true, passive: true });
      card?.addEventListener("focus", warm, { once: true });
    });

    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadVideo(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "220px 0px", threshold: 0.01 });

    const start = () => videos.forEach((video) => observer.observe(video));
    if ("requestIdleCallback" in window) {
      requestIdleCallback(start, { timeout: 1600 });
    } else {
      window.setTimeout(start, 900);
    }
  }

  function interceptViewerVideos() {
    const mediaHost = document.querySelector(".work-viewer-media");
    if (!mediaHost || !("MutationObserver" in window)) return;
    new MutationObserver(() => {
      mediaHost.querySelectorAll("video").forEach((video) => {
        video.preload = "none";
        if (!video.src && video.dataset.src) loadVideo(video);
      });
    }).observe(mediaHost, { childList: true, subtree: true });
  }

  function renderNextCard() {
    const card = document.querySelector(".category-next");
    if (!card) return;
    const current = currentCategory();
    const next = NEXT_MAP[current] || "portrait";
    const imageSrc = NEXT_IMAGES[next];
    if (!imageSrc) return;

    const fallback = [...card.childNodes].map((node) => node.cloneNode(true));
    const image = document.createElement("img");
    image.className = "category-next-image";
    image.src = imageSrc;
    image.alt = labelFor(next);
    image.loading = "lazy";
    image.decoding = "async";
    image.fetchPriority = "low";
    image.width = 1920;
    image.height = 300;
    image.onerror = () => {
      card.classList.remove("category-next-card");
      card.replaceChildren(...fallback.map((node) => node.cloneNode(true)));
      window.renderIcons?.(card);
    };

    card.classList.add("category-next-card");
    card.href = `./category.html?cat=${encodeURIComponent(next)}`;
    card.setAttribute("aria-label", `下一项目：${labelFor(next)}`);
    card.replaceChildren(image);
  }

  function tuneDeferredSections() {
    document.querySelectorAll(".category-process, .category-next").forEach((section) => {
      section.style.contentVisibility = "auto";
      section.style.containIntrinsicSize = section.classList.contains("category-next") ? "320px" : "720px";
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    window.requestAnimationFrame(() => {
      tuneWorkImages();
      deferWorkVideos();
      interceptViewerVideos();
      renderNextCard();
      tuneDeferredSections();
    });
  });
})();