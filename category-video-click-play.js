(() => {
  function ensureVideoSource(video) {
    if (!video) return;
    if (!video.currentSrc && !video.src && video.dataset.src) {
      video.src = video.dataset.src;
    }
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
    const mediaHost = document.querySelector(".work-viewer-media");
    if (!mediaHost || !("MutationObserver" in window)) return;

    new MutationObserver(scheduleViewerPlayback).observe(mediaHost, {
      childList: true,
      subtree: true
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindViewerObserver, { once: true });
  } else {
    bindViewerObserver();
  }
})();
