(() => {
  const currentCategory = new URLSearchParams(window.location.search).get("cat") || document.body.dataset.category || "portrait";
  if (currentCategory !== "video" || !window.CATEGORY_DATA?.video) return;

  window.CATEGORY_DATA.video.title = "视频 / 漫剧";
  window.CATEGORY_DATA.video.en = "VIDEO / ANIMATION DRAMA";
  window.CATEGORY_DATA.video.subtitle = "文明影像记录区";
  window.CATEGORY_DATA.video.desc = "用影像记录文明，用故事连接未来。";
  window.CATEGORY_DATA.video.tone = "deep";
  window.CATEGORY_DATA.video.accent = "#d6a35f";
  window.CATEGORY_DATA.video.hero = "./assets/category-banners/video-final.png";
  window.CATEGORY_DATA.video.banner = "./assets/category-banners/video-final.png";
  window.CATEGORY_DATA.video.worksTitle = "视频作品";
  window.CATEGORY_DATA.video.worksEn = "VIDEO WORKS";
  window.CATEGORY_DATA.video.works = [
    { type: "video", src: "./assets/categories/video/video-01.mp4", title: "窖藏酒CG动画", orientation: "video-landscape" },
    { type: "video", src: "./assets/categories/video/video-02.mp4", title: "白酒广告短片", orientation: "video-landscape" },
    { type: "video", src: "./assets/categories/video/video-03.mp4", title: "护肤品精华水广告", orientation: "video-landscape" },
    { type: "video", src: "./废土温情_25MB版.mp4", title: "废土温情", orientation: "video-landscape", poster: "./废土温情.png" },
    { type: "video", src: "./猫粮广告_25MB版.mp4", title: "猫粮广告", orientation: "video-landscape" },
    { type: "video", src: "./耳机广告_25MB版.mp4", title: "耳机广告", orientation: "video-landscape", poster: "./小耳机.png" },
    { type: "video", src: "./渡鸦的礼物.mp4", title: "渡鸦的礼物", orientation: "video-landscape", poster: "./渡鸦的礼物.png" },
    { type: "video", src: "./山海镖局_GitHub_25MB内.mp4", title: "山海镖局", orientation: "video-landscape", poster: "./山海镖局.png" }
  ];
  window.CATEGORY_DATA.video.process = ["灵感脚本", "镜头设计", "AI辅助生成", "后期剪辑", "调色音效", "成片输出"];
})();