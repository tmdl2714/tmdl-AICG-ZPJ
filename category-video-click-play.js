(() => {
  function posterMap() {
    const works = window.CATEGORY_DATA?.video?.works || [];
    return new Map(works.filter((work) => work.type === "video" && work.poster).map((work) => [work.src, work.poster]));
  }

  function videoSource(video) {
    return video?.dataset?.src || video?.getAttribute("src") || "";
  }

  function applyVideoPosters(root = document) {
    const posters = posterMap();
    root.querySelectorAll("video").forEach((video) => {
      const poster = posters.get(videoSource(video));
      if (poster) video.setAttribute("poster", poster);
    });
  }

  function ensureVideoSource(video) {
    if (!video) return;
    if (!video.currentSrc && !video.src && video.dataset.src) {
      video.src = video.dataset.src;
    }
    applyVideoPosters(video.parentElement || document);
    video.controls = true;
    video.playsInline = true;
    video.preload = "auto";
  }

  function playVideo(video) {
    if (!video) return;
    ensureVideoSource(video);
    video.muted = false;
    video.load();

    const started = video.play();
    if (started?.catch) {
      started.catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }

  function playViewerVideos() {
    document.querySelectorAll(".work-viewer-media video").forEach(playVideo);
  }

  function scheduleViewerPlayback() {
    playViewerVideos();
    window.requestAnimationFrame(playViewerVideos);
    window.setTimeout(playViewerVideos, 80);
    window.setTimeout(playViewerVideos, 220);
  }

  document.addEventListener("click", (event) => {
    const card = event.target instanceof Element ? event.target.closest(".work-card") : null;
    if (!card || card.matches("a[href]")) return;
    const video = card.querySelector("video");
    if (!video) return;
    scheduleViewerPlayback();
  }, true);

  const bindViewerObserver = () => {
    applyVideoPosters();

    const mediaHost = document.querySelector(".work-viewer-media");
    if (mediaHost && "MutationObserver" in window) {
      new MutationObserver(() => {
        applyVideoPosters(mediaHost);
        scheduleViewerPlayback();
      }).observe(mediaHost, {
        childList: true,
        subtree: true
      });
    }

    const grid = document.querySelector(".category-work-grid");
    if (grid && "MutationObserver" in window) {
      new MutationObserver(() => applyVideoPosters(grid)).observe(grid, {
        childList: true,
        subtree: true
      });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindViewerObserver, { once: true });
  } else {
    bindViewerObserver();
  }
})();
