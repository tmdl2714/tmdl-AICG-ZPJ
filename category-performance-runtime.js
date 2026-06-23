(() => {
  const normalizeVideoWorks = () => {
    if (!window.CATEGORY_DATA?.video?.works) return;

    window.CATEGORY_DATA.video.works = [
      { type: "video", src: "./重生后.mp4", title: "重生后", orientation: "video-landscape", poster: "./重生后.jpg" },
      { type: "video", src: "./渡鸦的礼物.mp4", title: "渡鸦的礼物", orientation: "video-landscape", poster: "./渡鸦的礼物.png" },
      { type: "video", src: "./山海镖局_GitHub_25MB内.mp4", title: "山海镖局", orientation: "video-landscape", poster: "./山海镖局.png" },
      { type: "video", src: "./废土温情_25MB版.mp4", title: "废土温情", orientation: "video-landscape", poster: "./废土温情.png" },
      { type: "video", src: "./耳机广告_25MB版.mp4", title: "耳机广告", orientation: "video-landscape", poster: "./小耳机.png" },
      { type: "video", src: "./assets/categories/video/video-01.mp4", title: "窖藏酒CG动画", orientation: "video-landscape" }
    ];
  };

  normalizeVideoWorks();

  function videoPosterMap() {
    const works = window.CATEGORY_DATA?.video?.works || [];
    return new Map(
      works
        .filter((work) => work.type === "video" && work.poster)
        .map((work) => [work.src, work.poster])
    );
  }

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
          const posters = videoPosterMap();
          nextValue = nextValue
            .replace(/<video\s+src="([^"]+)"/g, (match, src) => `<video${posters.get(src) ? ` poster="${posters.get(src)}"` : ""} data-src="${src}"`)
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
    if (!video) return;
    if (!video.src && video.dataset.src) video.src = video.dataset.src;
    video.preload = "auto";
    video.load();
  }

  function playVideo(video) {
    if (!video) return;
    loadVideo(video);
    video.muted = false;
    video.controls = true;
    video.playsInline = true;
    const started = video.play();
    if (started?.catch) {
      started.catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }

  function pauseViewerVideos() {
    document.querySelectorAll(".work-viewer-media video").forEach((video) => video.pause());
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
      video.controls = false;
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
    if ("requestIdleCallback" in window) requestIdleCallback(start, { timeout: 1600 });
    else window.setTimeout(start, 900);
  }

  function interceptViewerVideos() {
    const mediaHost = document.querySelector(".work-viewer-media");
    if (!mediaHost || !("MutationObserver" in window)) return;
    new MutationObserver(() => {
      mediaHost.querySelectorAll("video").forEach((video) => {
        if (video.dataset.autoplayReady === "1") return;
        video.dataset.autoplayReady = "1";
        playVideo(video);
      });
    }).observe(mediaHost, { childList: true, subtree: true });
  }

  function bindVideoCardAutoplay() {
    document.addEventListener("click", () => {
      window.setTimeout(() => {
        document.querySelectorAll(".work-viewer-media video").forEach(playVideo);
      }, 0);
    }, true);
    document.querySelectorAll("[data-preview-close], .viewer-close").forEach((button) => {
      button.addEventListener("click", pauseViewerVideos, true);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") pauseViewerVideos();
    });
  }

  function tuneDeferredSections() {
    document.querySelectorAll(".category-process").forEach((section) => {
      section.style.contentVisibility = "auto";
      section.style.containIntrinsicSize = "720px";
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    window.requestAnimationFrame(() => {
      tuneWorkImages();
      deferWorkVideos();
      interceptViewerVideos();
      bindVideoCardAutoplay();
      tuneDeferredSections();
    });
  });
})();