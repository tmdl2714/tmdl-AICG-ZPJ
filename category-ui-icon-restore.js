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
      { type: "image", src: "./ui启动页/e3a6819e-e4f6-4372-a9f9-49111d43bd73b.png", title: "UI启动页 05", orientation: "ui-launch" },
      { type: "image", src: "./ui启动页/光遇1.2.png", title: "UI启动页 06", orientation: "ui-launch" }
    ],
    process: ["灵感关键词", "世界观设定", "氛围构建", "细节打磨", "启动页输出"]
  };

  data.icon = {
    title: "ICON设计",
    en: "ICON DESIGN",
    subtitle: "文明图腾系统",
    desc: "通过图形语言构建清晰直观的视觉体验。",
    tone: "mist",
    accent: "#3158ff",
    hero: "./assets/categories/icon/proto-hero.png",
    banner: "./assets/category-banners/icon-final.png",
    works: [
      { type: "image", src: "./01_拼车.png", title: "拼车", orientation: "icon-work" },
      { type: "image", src: "./02_剧本简介.png", title: "剧本简介", orientation: "icon-work" },
      { type: "image", src: "./03_会员.png", title: "会员", orientation: "icon-work" },
      { type: "image", src: "./04_杂谈.png", title: "杂谈", orientation: "icon-work" },
      "1f287988-d307-42c2-a04f-92c9741b27ad.png",
      "6e0e42b4-00e1-437b-a06e-b3fe232661a7.png",
      "28abb13b-e8e5-47d0-822f-b0fd4047af47.png",
      "41f95525-d0c5-4b37-84ca-d1853195f241.png",
      "308ae02f-b7f3-45c5-85ec-2462dbc61ab1.png",
      "a65d121d-ea45-474b-8f0e-09659be66a28.png",
      "c625349d-9880-4ece-a11f-9601588b1e85.png",
      "e1fd8c75-e844-4fe3-bbfb-2392d28502f7.png",
      "fb80319d-4d1d-46ac-a5e6-428094c0814b.png",
      "ff567a90-1559-4b08-b4f5-57bcb6f93f44.png",
      "TyH4-3NQ0_AFh9uakupRiWLSJ6Rq599ZLeo_Kkeq3mfWbwt5iFS-2SrZYBF1Fs28Ws3caHvWwY4YpdZnZuFUCELTtQWYQlZ6c-iWwoZXmhxVKpiosWkB-1ABSB0Vli1GF-NZb7Blwx_SHfVFXJEu8oo02OJNEHS3ZeUW1U7GWgB1dZhKO5Lf5VMqefj_dLeG.jpg"
    ].map((item, index) => typeof item === "string"
      ? { type: "image", src: `./9-ICON/${item}`, title: `ICON设计 ${String(index + 1).padStart(2, "0")}`, orientation: "icon-work" }
      : item),
    process: ["需求分析", "概念构思", "草图绘制", "精细设计", "应用输出"]
  };
})();
