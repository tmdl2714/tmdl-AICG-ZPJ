(() => {
  const data = window.CATEGORY_DATA;
  if (!data?.poster?.works) return;

  const posterBannerSources = new Set([
    "./01_拼车计划.png",
    "./02_周末狂欢夜.png",
    "./03_城限专场.png",
    "./04_DM严选.png",
    "./05_周年庆典.png",
    "./06_未知剧场.png"
  ]);

  data.poster.works.forEach((work) => {
    if (posterBannerSources.has(work.src)) {
      work.orientation = "banner";
    }
  });
})();
