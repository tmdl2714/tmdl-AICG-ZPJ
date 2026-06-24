(() => {
  const frameStyle = document.createElement("style");
  frameStyle.textContent = `
    body.category-page .work-card.is-typography-work,
    body.category-page .work-card.is-typography-work:nth-child(n) {
      background: rgba(248, 251, 255, 0.84) !important;
      border: 1px solid rgba(150, 176, 205, 0.46) !important;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.64), 0 12px 30px rgba(20, 48, 84, 0.16) !important;
      padding: 8px !important;
      border-radius: 12px !important;
    }

    body.category-page .work-card.is-typography-work img {
      border-radius: 7px !important;
      box-shadow: none !important;
      background: transparent !important;
    }

    body.category-page .work-card.is-symbol-board,
    body.category-page .work-card.is-symbol-board:nth-child(n) {
      background: rgba(9, 18, 31, 0.84) !important;
      border: 1px solid rgba(217, 133, 53, 0.5) !important;
      box-shadow: inset 0 0 0 1px rgba(255, 198, 118, 0.14), 0 14px 34px rgba(0, 0, 0, 0.28) !important;
      padding: 9px !important;
      border-radius: 12px !important;
    }

    body.category-page .work-card.is-symbol-board img {
      border-radius: 7px !important;
      box-shadow: none !important;
      background: transparent !important;
    }
  `;
  document.head.appendChild(frameStyle);

  const data = window.CATEGORY_DATA;
  if (!data) return;

  data.ui = {
    title: "UI启动页",
    en: "UI SPLASH SCREEN",
    subtitle: "文明交互系统",
    desc: "面向未来文明入口的界面视觉探索。",
    tone: "sky",
    accent: "#3067dd",
    hero: "./assets/categories/ui/proto-hero.png",
    banner: "./assets/category-banners/ui-final.png",
    works: [
      { type: "image", src: "./ui启动页/62005ee6-8217-4247-bfc0-a3f515374dc7.png", title: "UI启动页 01", orientation: "ui-launch" },
      { type: "image", src: "./ui启动页/6a996e38-9282-400d-8ac5-867325edf4ce.png", title: "UI启动页 02", orientation: "ui-launch" },
      { type: "image", src: "./象棋.png", title: "象棋启动页", orientation: "ui-launch" },
      { type: "image", src: "./ui启动页/e065b2f1-7625-4b6f-8500-ff998ba77a77.png", title: "UI启动页 04", orientation: "ui-launch" },
      { type: "image", src: "./ui启动页/e3a6819e-e4f6-4372-a9f9-4911d43bd73b.png", title: "UI启动页 05", orientation: "ui-launch" },
      { type: "image", src: "./ui启动页/光遇1.2.png", title: "UI启动页 06", orientation: "ui-launch" }
    ],
    process: ["灵感关键词", "世界观设定", "氛围构建", "细节打磨", "启动页输出"]
  };

  data.icon = {
    title: "ICON设计",
    en: "ICON DESIGN",
    subtitle: "功能符号研究所",
    desc: "围绕应用场景提炼图形语言，形成清晰直观的图标表达。",
    tone: "mist",
    accent: "#2268ff",
    hero: "./assets/categories/icon/proto-hero.png",
    banner: "./assets/category-banners/icon-final.png",
    worksTitle: "图标展示",
    worksEn: "ICON WORKS",
    works: [
      ["./icon/icon01-拼车.png", "拼车"],
      ["./icon/icon02-剧本简介.png", "剧本简介"],
      ["./icon/icon03-会员.png", "会员"],
      ["./icon/icon04-杂谈.png", "杂谈"],
      ["./icon/icon-上门维修.png", "上门维修"],
      ["./icon/icon-地图.png", "地图"],
      ["./icon/icon-天气.png", "天气"],
      ["./icon/icon-宠物之家.png", "宠物之家"],
      ["./icon/icon-小说.png", "小说"],
      ["./icon/icon-扫雷.png", "扫雷"],
      ["./icon/icon-桌面宠物.png", "桌面宠物"],
      ["./icon/icon-相机.png", "相机"],
      ["./icon/icon-线上课堂.png", "线上课堂"],
      ["./icon/icon-购物.png", "购物"],
      ["./icon/icon-银行.png", "银行"]
    ].map(([src, title]) => ({ type: "image", src, title, orientation: "icon-work" })),
    process: ["需求分析", "概念构思", "草图绘制", "精细设计", "应用输出"]
  };
})();