(() => {
  const POSTERS = [
    { video: "废土温情_25MB版.mp4", poster: "./废土温情.png" },
    { video: "耳机广告_25MB版.mp4", poster: "./小耳机.png" }
  ];

  function applyVideoPosters(root = document) {
    POSTERS.forEach(({ video, poster }) => {
      root.querySelectorAll(`video[src*="${video}"]`).forEach((videoEl) => {
        videoEl.setAttribute("poster", poster);
        if (!videoEl.hasAttribute("controls")) {
          const img = document.createElement("img");
          img.src = poster;
          img.alt = videoEl.closest(".work-card")?.querySelector("span")?.textContent || "视频封面";
          img.loading = "lazy";
          img.decoding = "async";
          img.width = videoEl.getAttribute("width") || 1600;
          img.height = videoEl.getAttribute("height") || 900;
          img.style.width = "100%";
          img.style.height = "100%";
          img.style.objectFit = "contain";
          img.style.objectPosition = "center center";
          videoEl.replaceWith(img);
        }
      });
    });
  }

  function run() {
    applyVideoPosters();
    requestAnimationFrame(applyVideoPosters);
    setTimeout(applyVideoPosters, 300);
    setTimeout(applyVideoPosters, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }

  const observer = new MutationObserver(() => applyVideoPosters());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
