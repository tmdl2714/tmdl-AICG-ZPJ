(() => {
  const POSTERS = [
    { video: "废土温情_25MB版.mp4", poster: "./废土温情.png" },
    { video: "耳机广告_25MB版.mp4", poster: "./小耳机.png" }
  ];

  const CHESS_UI_ORIGINAL = "ba0879ce-7225-4b52-99b6-ea06a398726d.png";
  const CHESS_UI_REPLACEMENT = "./象棋.png";

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

  function applyChessUiReplacement(root = document) {
    root.querySelectorAll(`img[src*="${CHESS_UI_ORIGINAL}"]`).forEach((img) => {
      img.src = CHESS_UI_REPLACEMENT;
      img.width = 900;
      img.height = 1200;
    });
  }

  function applyAll() {
    applyVideoPosters();
    applyChessUiReplacement();
  }

  function run() {
    applyAll();
    requestAnimationFrame(applyAll);
    setTimeout(applyAll, 300);
    setTimeout(applyAll, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }

  const observer = new MutationObserver(() => applyAll());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
