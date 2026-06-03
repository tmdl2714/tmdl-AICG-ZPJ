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
    title: "AI写真",
    en: "AI PORTRAIT",
    subtitle: "数字生命观测区",
    desc: "基于AIGC的人像视觉创作，探索光影、情绪与美的更多可能。",
    tone: "mist",
    accent: "#287cff",
    hero: "./assets/categories/portrait/proto-hero.png",
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
    title: "模特换装",
    en: "MODEL OUTFIT TRANSFORMATION",
    subtitle: "未来文明服饰实验室",
    desc: "基于AIGC的模特换装方案，高效生成多种风格造型。",
    tone: "warm",
    accent: "#c99a42",
    hero: "./assets/categories/outfit/proto-hero.png",
    banner: "./assets/category-banners/outfit-final.png",
    worksTitle: "案例展示",
    worksEn: "CASE STUDY",
    works: imageSeries("outfit", Array.from({ length: 10 }, () => "png")).map((item, index) => ({
      ...item,
      title: `换装案例 ${String(index + 1).padStart(2, "0")}`
    })),
    process: [
      { icon: "user-round", title: "01 模特素材", desc: "统一模特姿态与视觉方向" },
      { icon: "shopping-bag", title: "02 服装参考", desc: "整理目标服饰与造型风格" },
      { icon: "sparkles", title: "03 AI智能换装", desc: "生成多种服装融合方案" },
      { icon: "scan", title: "04 细节精修", desc: "优化边缘、光影与质感" },
      { icon: "download", title: "05 商业输出", desc: "输出高品质成片" }
    ]
  },
  retouch: {
    title: "产品精修",
    en: "PRODUCT RETOUCH",
    subtitle: "文明器物研究区",
    desc: "重建光影、优化材质与细节，提升产品商业质感。",
    tone: "warm",
    accent: "#b58a4a",
    hero: "./assets/categories/retouch/proto-hero.png",
    banner: "./assets/category-banners/retouch-final.png",
    works: [
      { type: "image", src: "./assets/categories/retouch/works/retouch-work-01.png", title: "产品精修 01", orientation: "retouch-board" },
      { type: "image", src: "./assets/categories/retouch/works/retouch-work-02.png", title: "产品精修 02", orientation: "retouch-board" },
      { type: "image", src: "./assets/categories/retouch/works/retouch-work-03.png", title: "产品精修 03", orientation: "retouch-board" },
      { type: "image", src: "./assets/categories/retouch/works/retouch-work-04.png", title: "产品精修 04", orientation: "retouch-board" },
      { type: "image", src: "./assets/categories/retouch/works/retouch-work-05.png", title: "产品精修 05", orientation: "retouch-board" },
      { type: "image", src: "./assets/categories/retouch/works/retouch-work-06.png", title: "产品精修 06", orientation: "retouch-board" },
      { type: "image", src: "./assets/categories/retouch/works/retouch-work-07.png", title: "产品精修 07", orientation: "retouch-board" },
      { type: "image", src: "./assets/categories/retouch/works/retouch-work-08.png", title: "产品精修 08", orientation: "retouch-board" },
      { type: "image", src: "./assets/categories/retouch/works/retouch-work-09.png", title: "产品精修 09", orientation: "retouch-board" },
      { type: "image", src: "./assets/categories/retouch/works/retouch-work-10.png", title: "产品精修 10", orientation: "retouch-board" }
    ],
    process: ["原图分析", "光影重建", "材质优化", "细节精修", "商业输出"]
  },
  poster: {
    title: "文明视觉档案馆",
    en: "POSTER / BANNER",
    subtitle: "记录文明的视觉表达，传递思想与未来。",
    desc: "面向商业传播、品牌塑造与活动视觉的横幅作品集合。",
    tone: "sky",
    accent: "#3e80a8",
    hero: "./assets/categories/poster/banner-03.jpg",
    banner: "./assets/category-banners/poster-final.png",
    heroWorks: [
      "./assets/categories/poster/banner-03.jpg",
      "./assets/categories/poster/banner-02.png",
      "./assets/categories/poster/banner-01.png"
    ],
    heroFeatures: [
      { icon: "feather", title: "商业宣传", desc: "COMMERCIAL" },
      { icon: "badge", title: "活动视觉", desc: "ACTIVITY" },
      { icon: "package", title: "品牌塑造", desc: "BRAND" },
      { icon: "network", title: "概念海报", desc: "CONCEPT" }
    ],
    filters: ["全部作品", "商业宣传", "活动视觉", "品牌塑造", "概念海报", "科技视觉", "文化传播"],
    worksTitle: "作品展示",
    worksEn: "VISUAL WORKS",
    works: [
      { type: "image", src: "./assets/categories/poster/works/poster-work-01.png", title: "海报 Banner 01", orientation: "banner" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-02.png", title: "海报 Banner 02", orientation: "banner" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-03.png", title: "竖版海报 01", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-04.png", title: "竖版海报 02", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-05.png", title: "竖版海报 03", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-06.png", title: "竖版海报 04", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-07.png", title: "竖版海报 05", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-08.png", title: "竖版海报 06", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-09.png", title: "竖版海报 07", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-10.png", title: "竖版海报 08", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-11.png", title: "竖版海报 09", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-12.png", title: "竖版海报 10", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-13.png", title: "竖版海报 11", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-14.png", title: "竖版海报 12", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-15.png", title: "竖版海报 13", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-16.png", title: "竖版海报 14", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-17.png", title: "竖版海报 15", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-18.png", title: "竖版海报 16", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-19.png", title: "竖版海报 17", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-20.png", title: "竖版海报 18", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-21.png", title: "竖版海报 19", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-22.png", title: "竖版海报 20", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-23.png", title: "竖版海报 21", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-24.png", title: "竖版海报 22", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-25.png", title: "竖版海报 23", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-26.png", title: "竖版海报 24", orientation: "vertical" },
      { type: "image", src: "./assets/categories/poster/works/poster-work-27.jpeg", title: "海报 Banner 03", orientation: "banner" }
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
    title: "IP设计",
    en: "IP DESIGN",
    subtitle: "文明生命样本库",
    desc: "用角色形象承载品牌记忆，形成可延展的视觉体系。",
    tone: "aqua",
    accent: "#14a9b8",
    hero: "./assets/categories/ip/proto-hero.png",
    banner: "./assets/category-banners/ip-final.png",
    works: [
      { type: "image", src: "./assets/categories/ip/works/ip-work-01.png", title: "PENGU IP 角色与周边", orientation: "ip-board" },
      { type: "image", src: "./assets/categories/ip/works/ip-work-02.png", title: "ROBO IP 角色与周边", orientation: "ip-board" },
      { type: "image", src: "./assets/categories/ip/works/ip-work-03.png", title: "酷白 IP 角色规范", orientation: "ip-board" },
      { type: "image", src: "./assets/categories/ip/works/ip-work-04.png", title: "山海旅人 IP 品牌系统", orientation: "ip-board" }
    ],
    process: ["角色定位", "草图设定", "AI建模", "三视图完善", "周边延展", "品牌应用"]
  },
  typography: {
    title: "字体设计",
    en: "FONT DESIGN",
    subtitle: "文明语言研究区",
    desc: "探索文字的视觉生命力，形成可感知的字体风格。",
    tone: "mist",
    accent: "#336ff0",
    hero: "./assets/categories/typography/proto-hero.png",
    banner: "./assets/category-banners/typography-final.png",
    works: prototypeSeries("typography", 6),
    process: ["灵感构思", "草图设计", "细节打磨", "色彩与质感", "成品输出"]
  },
  symbol: {
    title: "超级符号",
    en: "SUPER SYMBOL",
    subtitle: "文明标识系统",
    desc: "提炼核心视觉语言，构建简洁有力的符号体系。",
    tone: "dark",
    accent: "#d98535",
    hero: "./assets/categories/symbol/proto-hero.png",
    banner: "./assets/category-banners/symbol-final.png",
    works: [
      { type: "image", src: "./assets/categories/symbol/works/symbol-work-01.png", title: "超级符号 01", orientation: "symbol-board" },
      { type: "image", src: "./assets/categories/symbol/works/symbol-work-02.png", title: "超级符号 02", orientation: "symbol-board" },
      { type: "image", src: "./assets/categories/symbol/works/symbol-work-03.png", title: "超级符号 03", orientation: "symbol-board" },
      { type: "image", src: "./assets/categories/symbol/works/symbol-work-04.jpeg", title: "超级符号 04", orientation: "symbol-board" },
      { type: "image", src: "./assets/categories/symbol/works/symbol-work-05.jpeg", title: "超级符号 05", orientation: "symbol-board" },
      { type: "image", src: "./assets/categories/symbol/works/symbol-work-06.jpeg", title: "超级符号 06", orientation: "symbol-board" },
      { type: "image", src: "./assets/categories/symbol/works/symbol-work-07.jpeg", title: "超级符号 07", orientation: "symbol-board" },
      { type: "image", src: "./assets/categories/symbol/works/symbol-work-08.jpeg", title: "超级符号 08", orientation: "symbol-board" },
      { type: "image", src: "./assets/categories/symbol/works/symbol-work-09.jpeg", title: "超级符号 09", orientation: "symbol-board" },
      { type: "image", src: "./assets/categories/symbol/works/symbol-work-10.png", title: "超级符号 10", orientation: "symbol-board" },
      { type: "image", src: "./assets/categories/symbol/works/symbol-work-11.png", title: "超级符号 11", orientation: "symbol-board" }
    ],
    process: ["基础图形", "元素提取", "结构融合", "细节优化", "超级符号"]
  },
  ui: {
    title: "UI启动页",
    en: "UI SPLASH SCREEN",
    subtitle: "文明交互系统",
    desc: "面向未来文明入口的界面视觉探索。",
    tone: "sky",
    accent: "#3067dd",
    hero: "./assets/categories/ui/proto-hero.png",
    banner: "./assets/category-banners/ui-final.png",
    works: prototypeSeries("ui", 10),
    process: ["灵感关键词", "世界观设定", "氛围构建", "细节打磨", "启动页输出"]
  },
  icon: {
    title: "ICON设计",
    en: "ICON DESIGN",
    subtitle: "文明图腾系统",
    desc: "通过图形语言构建清晰直观的视觉体验。",
    tone: "mist",
    accent: "#3158ff",
    hero: "./assets/categories/icon/proto-hero.png",
    banner: "./assets/category-banners/icon-final.png",
    works: prototypeSeries("icon", 10),
    process: ["需求分析", "概念构思", "草图绘制", "精细设计", "应用输出"]
  },
  video: {
    title: "视频 / 漫剧",
    en: "VIDEO / ANIMATION DRAMA",
    subtitle: "文明影像记录区",
    desc: "用影像记录文明，用故事连接未来。",
    tone: "deep",
    accent: "#d6a35f",
    hero: "./assets/categories/video/proto-hero.png",
    banner: "./assets/category-banners/video-final.png",
    works: [1, 2, 3].map((num) => ({
      type: "video",
      src: `./assets/categories/video/video-${String(num).padStart(2, "0")}.mp4`,
      title: `视频作品 ${String(num).padStart(2, "0")}`
    })),
    process: ["灵感脚本", "镜头设计", "AI辅助生成", "后期剪辑", "调色音效", "成片输出"]
  }
};
