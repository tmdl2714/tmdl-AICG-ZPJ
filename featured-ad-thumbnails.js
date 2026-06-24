(() => {
  const VERSION = "featured-ad-thumbs-20260624";
  const works = [
    ["窖藏酒广告", "./assets/categories/video/video-01.mp4"],
    ["相机广告", "./assets/categories/video/video-02.mp4"],
    ["精华水广告", "./assets/categories/video/video-03.mp4"]
  ];

  const withVersion = (path) => `${path}?v=${VERSION}`;

  const apply = () => {
    if (document.body.dataset.featured !== "ad") return;
    document.querySelectorAll("[data-ad-work]").forEach((thumb, index) => {
      const work = works[index];
      if (!work) return;
      const [titleText, videoPath] = work;
      thumb.setAttribute("aria-label", `查看${titleText}`);
      const title = thumb.querySelector(".featured-ad-thumb-title");
      if (title) title.textContent = titleText;
      const video = thumb.querySelector("video");
      if (!video) return;
      video.src = withVersion(videoPath);
      video.preload = "metadata";
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("aria-label", `${titleText}缩略图`);
      video.load();
    });
  };

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", () => requestAnimationFrame(apply), { once: true });
  } else {
    requestAnimationFrame(apply);
  }
})();
