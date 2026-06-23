(() => {
  if (!window.CATEGORY_DATA?.ui?.works?.[2]) return;
  window.CATEGORY_DATA.ui.works[2].src = "./象棋.png";
  window.CATEGORY_DATA.ui.works[2].title = "象棋启动页";
  window.CATEGORY_DATA.ui.works[2].orientation = "ui-launch";
})();
