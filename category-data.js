const CATEGORY_NAV = [
  { slug: "portrait", label: "AI写真", icon: "user-round" },
  { slug: "outfit", label: "电商模特换装", icon: "shopping-bag" },
  { slug: "retouch", label: "产品精修", icon: "box" },
  { slug: "poster", label: "海报Banner", icon: "image" },
  { slug: "ip", label: "IP设计", icon: "smile" },
  { slug: "typography", label: "字体设计", icon: "type" },
  { slug: "symbol", label: "超级符号", icon: "star" },
  { slug: "ui", label: "UI启动页", icon: "panel" },
  { slug: "icon", label: "ICON设计", icon: "grid" },
  { slug: "video", label: "视频", icon: "tv" }
];

function imageSeries(slug, extensions) {
  return extensions.map((ext, index) => ({
    type: "image",
    src: `./assets/categories/${slug}/${slug}-${String(index + 1).padStart(2, "0")}.${ext}`,
    title: `作品 ${String(index + 1).padStart(2, "0")}`
  }));
}

function prototypeSeries(slug, count) {
  return Array.from({ length: count }, (_, index) => ({
    type: "image",
    src: `./assets/categories/${slug}/proto-${String(index + 1).padStart(2, "0")}.png`,
    title: `作品 ${String(index + 1).padStart(2, "0")}`
  }));
}

const CATEGORY_DATA = {
  portrait: {
    title: "AI写真", en: "AI PORTRAIT", subtitle: "数字生命观测区",
    desc: "基于AIGC的人像视觉创作，探索光影、情绪与美的更多可能。",
    tone: "mist", accent: "#287cff", hero: "./assets/categories/portrait/proto-hero.png",
    works: [
      { type: "image", src: "./assets/categories/portrait/portrait-01.jpg", title: "AI写真 01" },
      { type: "image", src: "./assets/categories/portrait/portrait-02.jpeg", title: "AI写真 02" },
      { type: "image", src: "./assets/categories/portrait/portrait-03.jpeg", title: "AI写真 03" },
      { type: "image", src: "./assets/categories/portrait/portrait-04.jpeg", title: "AI写真 04" },
      { type: "image", src: "./assets/categories/portrait/portrait-05.jpeg", title: "AI写真 05" },
      { type: "image", src: "./assets/categories/portrait/portrait-06.jpeg", title: "AI写真 06" },
      { type: "image", src: "./assets/categories/portrait/portrait-07.jpeg", title: "AI写真 07" },
      { type: "image", src: "./assets/categories/portrait/portrait-08.jpeg", title: "AI写真 08" },
      { type: "image", src: "./assets/categories/portrait/portrait-09.jpeg", title: "AI写真 09" },
      { type: "image", src: "./assets/categories/portrait/portrait-10.jpeg", title: "AI写真 10" }
    ],
    process: [
      { icon: "user-round", title: "01 确定模特", desc: "确定人物气质" },
      { icon: "lightbulb", title: "02 灵感构思", desc: "构思主题风格" },
      { icon: "badge", title: "03 AI生成", desc: "多模型生成" },
      { icon: "scan", title: "04 细节精修", desc: "光影色彩优化" },
      { icon: "download", title: "05 成品输出", desc: "输出高品质成片" }
    ]
  },

  outfit: {
    title: "模特换装", en: "MODEL OUTFIT TRANSFORMATION", subtitle: "未来文明服饰实验室",
    desc: "基于AIGC的模特换装方案，高效生成多种风格造型。",
    tone: "warm", accent: "#c99a42", hero: "./assets/categories/outfit/proto-hero.png",
    banner: "./assets/category-banners/outfit-final.png", worksTitle: "案例展示", worksEn: "CASE STUDY",
    works: [
      { type: "image", src: "./2-电商模特换装/34cf39674ea047179e9a53663e1454b9.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png", title: "AI换装 01", orientation: "outfit-work" },
      { type: "image", src: "./2-电商模特换装/b50aaade3ad341a885ee0651f0d11164.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png", title: "AI换装 02", orientation: "outfit-work" },
      { type: "image", src: "./2-电商模特换装/b67598d46645401d949af9567fa7a49e.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png", title: "AI换装 03", orientation: "outfit-work" },
      { type: "image", src: "./2-电商模特换装/d49bfc380a7d48f7a6d9ed1f6f7a62ae.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png", title: "AI换装 04", orientation: "outfit-work" },
      { type: "image", src: "./2-电商模特换装/d634b2a1819740938b5897eece937163.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png", title: "AI换装 05", orientation: "outfit-work" },
      { type: "image", src: "./2-电商模特换装/1ffafcee4edb41d6adfa599ea929584b.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png", title: "AI换装 06", orientation: "outfit-work" },
      { type: "image", src: "./2-电商模特换装/3ca1b55ad36f403ca1dfc06bfeb0b487.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png", title: "AI换装 07", orientation: "outfit-work" },
      { type: "image", src: "./2-电商模特换装/4d7a2732a63b43758bbb98b20400846f.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png", title: "AI换装 08", orientation: "outfit-work" },
      { type: "image", src: "./2-电商模特换装/5c1856aff8b445209efc5f5230209064.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png", title: "AI换装 09", orientation: "outfit-work" },
      { type: "image", src: "./2-电商模特换装/17bb927e3f6543ed9694647423c5fdda.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png", title: "AI换装 10", orientation: "outfit-work" }
    ],
    process: [
      { icon: "user-round", title: "01 模特素材", desc: "统一模特姿态与视觉方向" },
      { icon: "shopping-bag", title: "02 服装参考", desc: "整理目标服饰与造型风格" },
      { icon: "sparkles", title: "03 AI智能换装", desc: "生成多种服装融合方案" },
      { icon: "scan", title: "04 细节精修", desc: "优化边缘、光影与质感" },
      { icon: "download", title: "05 商业输出", desc: "输出高品质成片" }
    ]
  },

  retouch: {
    title: "产品精修", en: "PRODUCT RETOUCH", subtitle: "文明器物研究区",
    desc: "重建光影、优化材质与细节，提升产品商业质感。",
    tone: "warm", accent: "#b58a4a", hero: "./assets/categories/retouch/proto-hero.png",
    banner: "./assets/category-banners/retouch-final.png",
    works: Array.from({ length: 10 }, (_, i) => ({
      type: "image", src: `./assets/categories/retouch/works/retouch-work-${String(i + 1).padStart(2, "0")}.png`,
      title: `产品精修 ${String(i + 1).padStart(2, "0")}`, orientation: "retouch-board"
    })),
    process: ["原图分析", "光影重建", "材质优化", "细节精修", "商业输出"]
  },

  poster: {
    title: "文明视觉档案馆", en: "POSTER / BANNER", subtitle: "记录文明的视觉表达，传递思想与未来。",
    desc: "面向商业传播、品牌塑造与活动视觉的横幅作品集合。",
    tone: "sky", accent: "#3e80a8", hero: "./assets/category-banners/poster-final.png",
    banner: "./assets/category-banners/poster-final.png",
    heroWorks: ["./d15079c8-14f0-47b8-864b-dd47c04d6d66.png", "./ac6fe018-f7f3-4ffa-b677-e88fb228d2eb.png", "./制作海报 (4).png"],
    heroFeatures: [
      { icon: "feather", title: "商业宣传", desc: "COMMERCIAL" },
      { icon: "badge", title: "活动视觉", desc: "ACTIVITY" },
      { icon: "package", title: "品牌塑造", desc: "BRAND" },
      { icon: "network", title: "概念海报", desc: "CONCEPT" }
    ],
    filters: ["全部作品", "商业宣传", "活动视觉", "品牌塑造", "概念海报", "科技视觉", "文化传播"],
    worksTitle: "作品展示", worksEn: "VISUAL WORKS",
    works: [
      { type: "image", src: "./ac6fe018-f7f3-4ffa-b677-e88fb228d2eb.png", title: "海报 Banner 01", orientation: "banner" },
      { type: "image", src: "./d15079c8-14f0-47b8-864b-dd47c04d6d66.png", title: "海报 Banner 02", orientation: "banner" },
      { type: "image", src: "./30cb955e-0822-43f3-98d9-4ba484c120d2.png", title: "海报 Banner 03", orientation: "banner" },
      { type: "image", src: "./4cca3669-f0f0-4b6e-8557-176422ad07b2.png", title: "海报 Banner 04", orientation: "banner" },
      { type: "image", src: "./01_拼车计划.png", title: "拼车计划", orientation: "vertical" },
      { type: "image", src: "./02_周末狂欢夜.png", title: "周末狂欢夜", orientation: "vertical" },
      { type: "image", src: "./03_城限专场.png", title: "城限专场", orientation: "vertical" },
      { type: "image", src: "./04_DM严选.png", title: "DM严选", orientation: "vertical" },
      { type: "image", src: "./05_周年庆典.png", title: "周年庆典", orientation: "vertical" },
      { type: "image", src: "./06_未知剧场.png", title: "未知剧场", orientation: "vertical" },
      { type: "image", src: "./e607c69f-7930-43c3-9774-86b421ee205b (1).png", title: "竖版海报 01", orientation: "vertical" },
      { type: "image", src: "./d2977236-d08b-41b3-b595-7e07d9005e6f.png", title: "竖版海报 02", orientation: "vertical" },
      { type: "image", src: "./b6a25755-6b4e-4a4a-9d1c-54a714fd7af5.png", title: "竖版海报 03", orientation: "vertical" },
      { type: "image", src: "./hp耳机2.png", title: "竖版海报 04", orientation: "vertical" },
      { type: "image", src: "./小水库8.png", title: "竖版海报 05", orientation: "vertical" },
      { type: "image", src: "./小水库10.png", title: "竖版海报 06", orientation: "vertical" },
      { type: "image", src: "./hp耳机4.1.png", title: "竖版海报 07", orientation: "vertical" },
      { type: "image", src: "./b64cc7fb-e4b1-4c98-8b1c-e6c5c0eaea00.png", title: "竖版海报 08", orientation: "vertical" },
      { type: "image", src: "./3b157685-11e4-44e0-b277-f60f370a452a.png", title: "竖版海报 09", orientation: "vertical" },
      { type: "image", src: "./1e8a75ec-0c7a-4906-8e73-032495bc0edf (1).png", title: "竖版海报 10", orientation: "vertical" },
      { type: "image", src: "./0ef45b3b-e083-49ce-a8f5-1a270e8b5662.png", title: "竖版海报 11", orientation: "vertical" },
      { type: "image", src: "./6e143708-8fcf-43d4-a238-808aaf208d1d.png", title: "竖版海报 12", orientation: "vertical" },
      { type: "image", src: "./b3b353e8-14ec-4ee0-a6a1-996110964114.png", title: "竖版海报 13", orientation: "vertical" },
      { type: "image", src: "./904f694f-8f4d-438f-bd72-7c43f7b049fd.png", title: "竖版海报 14", orientation: "vertical" },
      { type: "image", src: "./85a1d84b-234c-4be8-86c2-496943bfdc4c.png", title: "竖版海报 15", orientation: "vertical" },
      { type: "image", src: "./hp耳机10.1.png", title: "竖版海报 17", orientation: "vertical" },
      { type: "image", src: "./hp耳机7.png", title: "竖版海报 18", orientation: "vertical" },
      { type: "image", src: "./小水库5.png", title: "竖版海报 19", orientation: "vertical" },
      { type: "image", src: "./制作海报 (2).png", title: "竖版海报 20", orientation: "vertical" },
      { type: "image", src: "./制作海报 (4).png", title: "竖版海报 21", orientation: "vertical" }
    ],
    process: [
      { icon: "badge", title: "产品定位", desc: "明确商品目标与投放场景" },
      { icon: "lightbulb", title: "视觉概念", desc: "确定视觉方向与画面气质" },
      { icon: "sparkles", title: "AI生成", desc: "生成主视觉与商业素材" },
      { icon: "package", title: "商业合成", desc: "整合产品、人物与背景" },
      { icon: "type", title: "字体排版", desc: "强化标题层级与阅读节奏" },
      { icon: "share", title: "成品输出", desc: "适配多尺寸与交付规格" }
    ]
  },

  ip: {
    title: "IP设计", en: "IP DESIGN", subtitle: "文明生命样本库",
    desc: "用角色形象承载品牌记忆，形成可延展的视觉体系。",
    tone: "aqua", accent: "#14a9b8", hero: "./assets/categories/ip/proto-hero.png", banner: "./assets/category-banners/ip-final.png",
    works: [
      { type: "image", src: "./assets/categories/ip/works/ip-work-01.png", title: "PENGU IP 角色与周边", orientation: "ip-board" },
      { type: "image", src: "./assets/categories/ip/works/ip-work-02.png", title: "ROBO IP 角色与周边", orientation: "ip-board" },
      { type: "image", src: "./assets/categories/ip/works/ip-work-03.png", title: "酷白 IP 角色规范", orientation: "ip-board" },
      { type: "image", src: "./assets/categories/ip/works/ip-work-04.png", title: "山海旅人 IP 品牌系统", orientation: "ip-board" }
    ],
    process: ["角色定位", "草图设定", "AI建模", "三视图完善", "周边延展", "品牌应用"]
  },

  typography: {
    title: "字体设计", en: "FONT DESIGN", subtitle: "文明语言研究区", desc: "探索文字的视觉生命力，形成可感知的字体风格。",
    tone: "mist", accent: "#336ff0", hero: "./assets/categories/typography/proto-hero.png", banner: "./assets/category-banners/typography-final.png",
    works: [
      "36fc2684-c1ab-489e-acbd-785b4afe57dc.png", "ChatGPT Image 2026年6月2日 19_11_37.png", "ChatGPT Image 2026年6月2日 19_11_40.png",
      "ChatGPT Image 2026年6月2日 19_11_43.png", "ChatGPT Image 2026年6月2日 19_11_46.png", "ChatGPT Image 2026年6月2日 19_11_50.png",
      "ChatGPT Image 2026年6月2日 19_12_01.png", "ChatGPT Image 2026年6月2日 19_12_07.png", "ChatGPT Image 2026年6月2日 19_12_10.png",
      "ChatGPT Image 2026年6月2日 19_12_15.png", "ChatGPT Image 2026年6月2日 19_12_19.png", "ChatGPT Image 2026年6月2日 19_12_22.png",
      "ChatGPT Image 2026年6月2日 19_12_24.png", "ChatGPT Image 2026年6月2日 19_12_28.png"
    ].map((name, i) => ({ type: "image", src: `./6-字体设计/${name}`, title: `艺术字体 ${String(i + 1).padStart(2, "0")}`, orientation: "typography-work" })),
    process: ["灵感构思", "草图设计", "细节打磨", "色彩与质感", "成品输出"]
  },

  symbol: {
    title: "超级符号", en: "SUPER SYMBOL", subtitle: "文明标识系统", desc: "提炼核心视觉语言，构建简洁有力的符号体系。",
    tone: "dark", accent: "#d98535", hero: "./assets/categories/symbol/proto-hero.png", banner: "./assets/category-banners/symbol-final.png",
    works: ["png", "png", "png", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "png", "png"].map((ext, i) => ({
      type: "image", src: `./assets/categories/symbol/works/symbol-work-${String(i + 1).padStart(2, "0")}.${ext}`,
      title: `超级符号 ${String(i + 1).padStart(2, "0")}`, orientation: "symbol-board"
    })),
    process: ["基础图形", "元素提取", "结构融合", "细节优化", "超级符号"]
  },

  ui: {
    title: "UI启动页", en: "UI SPLASH SCREEN", subtitle: "文明交互系统", desc: "面向未来文明入口的界面视觉探索。",
    tone: "sky", accent: "#3067dd", hero: "./assets/categories/ui/proto-hero.png", banner: "./assets/category-banners/ui-final.png",
    works: [
      "62005ee6-8217-4247-bfc0-a3f515374dc7.png", "6a996e38-9282-400d-8ac5-867325edf4ce.png", "ba0879ce-7225-4b52-99b6-ea06a398726d.png",
      "e065b2f1-7625-4b6f-8500-ff998ba77a77.png", "e3a6819e-e4f6-4372-a9f9-4911d43bd73b.png", "光遇1.2.png"
    ].map((name, i) => ({ type: "image", src: `./ui启动页/${name}`, title: `UI启动页 ${String(i + 1).padStart(2, "0")}`, orientation: "ui-launch" })),
    process: ["灵感关键词", "世界观设定", "氛围构建", "细节打磨", "启动页输出"]
  },

  icon: {
    title: "ICON设计", en: "ICON DESIGN", subtitle: "文明图腾系统", desc: "通过图形语言构建清晰直观的视觉体验。",
    tone: "mist", accent: "#3158ff", hero: "./assets/categories/icon/proto-hero.png", banner: "./assets/category-banners/icon-final.png",
    works: [
      { type: "image", src: "./01_拼车.png", title: "拼车", orientation: "icon-work" },
      { type: "image", src: "./02_剧本简介.png", title: "剧本简介", orientation: "icon-work" },
      { type: "image", src: "./03_会员.png", title: "会员", orientation: "icon-work" },
      { type: "image", src: "./04_杂谈.png", title: "杂谈", orientation: "icon-work" },
      "1f287988-d307-42c2-a04f-92c9741b27ad.png", "6e0e42b4-00e1-437b-a06e-b3fe232661a7.png",
      "28abb13b-e8e5-47d0-822f-b0fd4047af47.png", "41f95525-d0c5-4b37-84ca-d1853195f241.png", "308ae02f-b7f3-45c5-85ec-2462dbc61ab1.png",
      "a65d121d-ea45-474b-8f0e-09659be66a28.png", "c625349d-9880-4ece-a11f-9601588b1e85.png", "e1fd8c75-e844-4fe3-bbfb-2392d28502f7.png",
      "fb80319d-4d1d-46ac-a5e6-428094c0814b.png", "ff567a90-1559-4b08-b4f5-57bcb6f93f44.png",
      "TyH4-3NQ0_AFh9uakupRiWLSJ6Rq599ZLeo_Kkeq3mfWbwt5iFS-2SrZYBF1Fs28Ws3caHvWwY4YpdZnZuFUCELTtQWYQlZ6c-iWwoZXmhxVKpiosWkB-1ABSB0Vli1GF-NZb7Blwx_SHfVFXJEu8oo02OJNEHS3ZeUW1U7GWgB1dZhKO5Lf5VMqefj_dLeG.jpg"
    ].map((item, i) => typeof item === "string"
      ? { type: "image", src: `./9-ICON/${item}`, title: `ICON设计 ${String(i + 1).padStart(2, "0")}`, orientation: "icon-work" }
      : item),
    process: ["需求分析", "概念构思", "草图绘制", "精细设计", "应用输出"]
  },

  video: {
    title: "视频 / 漫剧", en: "VIDEO / ANIMATION DRAMA", subtitle: "文明影像记录区",
    desc: "用影像记录文明，用故事连接未来。",
    tone: "deep", accent: "#d6a35f", hero: "./assets/category-banners/video-final.png", banner: "./assets/category-banners/video-final.png",
    works: [
      { type: "video", src: "./assets/categories/video/video-01.mp4", title: "窖藏酒CG动画", orientation: "video-landscape" },
      { type: "video", src: "./assets/categories/video/video-02.mp4", title: "白酒广告短片", orientation: "video-landscape" },
      { type: "video", src: "./assets/categories/video/video-03.mp4", title: "护肤品精华水广告", orientation: "video-landscape" },
      { type: "video", src: "./废土温情_25MB版.mp4", title: "废土温情", orientation: "video-landscape" },
      { type: "video", src: "./猫粮广告_25MB版.mp4", title: "猫粮广告", orientation: "video-landscape" },
      { type: "video", src: "./耳机广告_25MB版.mp4", title: "耳机广告", orientation: "video-landscape" },
      { type: "image", src: "./封面.png", title: "重生后，我撕了白莲妹妹", orientation: "video-link", href: "https://www.bilibili.com/video/BV1XZEe6KE9Z/" },
      { type: "image", src: "./assets/categories/video/works/video-destiny-cover.svg", title: "天命不接", orientation: "video-link", href: "https://www.bilibili.com/video/BV11TVF6yEQo/" }
    ],
    process: ["灵感脚本", "镜头设计", "AI辅助生成", "后期剪辑", "调色音效", "成片输出"]
  }
};
