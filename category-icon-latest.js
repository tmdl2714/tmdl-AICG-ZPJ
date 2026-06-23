(() => {
  const data = window.CATEGORY_DATA;
  if (!data?.icon) return;

  data.icon.works = [
    { type: "image", src: "./01_拼车.png", title: "拼车", orientation: "icon-work" },
    { type: "image", src: "./02_剧本简介.png", title: "剧本简介", orientation: "icon-work" },
    { type: "image", src: "./03_会员.png", title: "会员", orientation: "icon-work" },
    { type: "image", src: "./04_杂谈.png", title: "杂谈", orientation: "icon-work" }
  ];

  data.icon.worksTitle = "图标展示";
  data.icon.worksEn = "ICON WORKS";
})();
