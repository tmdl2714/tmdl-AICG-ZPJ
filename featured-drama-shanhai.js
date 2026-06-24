(() => {
  const DRAMA_VERSION = "featured-drama-shanhai-biaoju-20260624";

  function asset(path) {
    return `${path}?v=${DRAMA_VERSION}`;
  }

  function renderShanhaiDrama() {
    if (document.body.dataset.featured !== "drama") return;
    const root = document.querySelector("[data-featured-page]");
    if (!root || typeof renderDarkNav !== "function") return;

    root.innerHTML = `<div class="featured-drama-reference-page" aria-label="04动漫短剧精品项目二级页面"><div class="featured-drama-player-shell" aria-label="山海镖局视频播放"><video class="featured-drama-player-art" src="${asset("./山海镖局_GitHub_25MB内.mp4")}" poster="${asset("./山海镖局.png")}" controls preload="metadata" playsinline width="1672" height="941" aria-label="山海镖局"></video></div>${renderDarkNav("drama", "drama-ref")}</div>`;
  }

  window.addEventListener("DOMContentLoaded", () => requestAnimationFrame(renderShanhaiDrama), { once: true });
})();
