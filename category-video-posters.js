(() => {
  const POSTERS = [
    { video: "废土温情_25MB版.mp4", poster: "./废土温情.png" },
    { video: "耳机广告_25MB版.mp4", poster: "./小耳机.png" }
  ];

  function applyVideoPosters(root = document) {
    POSTERS.forEach(({ video, poster }) => {
      root.querySelectorAll(`video[src*="${video}"]`).forEach((el) => {
        el.setAttribute("poster", poster);
        if (!el.hasAttribute("controls")) {
          el.preload = "none";
        }
      });
    });
  }

  applyVideoPosters();

  const observer = new MutationObserver(() => applyVideoPosters());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
