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

const imageWork = (src, title, orientation) => ({ type: "image", src, title, ...(orientation ? { orientation } : {}) });
const videoWork = (src, title, poster) => ({ type: "video", src, title, orientation: "video-landscape", ...(poster ? { poster } : {}) });

const CATEGORY_DATA = {
  portrait: {
    title: "AI写真", en: "AI PORTRAIT", subtitle: "数字生命观测区",
    desc: "基于AIGC的人像视觉创作，探索光影、情绪与美的更多可能。",
    tone: "mist", accent: "#287cff", hero: "./assets/categories/portrait/proto-hero.png",
    works: Array.from({ length: 10 }, (_, i) => imageWork(`./assets/categories/portrait/portrait-${String(i + 1).padStart(2, "0")}.${i === 0 ? "jpg" : "jpeg"}`, `AI写真 ${String(i + 1).padStart(2, "0")}`)),
    process: ["确定模特", "灵感构思", "AI生成", "细节精修", "成品输出"]
  },

  outfit: {
    title: "模特换装", en: "MODEL OUTFIT TRANSFORMATION", subtitle: "未来文明服饰实验室",
    desc: "基于AIGC的模特换装方案，高效生成多种风格造型。",
    tone: "warm", accent: "#c99a42", hero: "./assets/categories/outfit/proto-hero.png",
    banner: "./assets/category-banners/outfit-final.png", worksTitle: "案例展示", worksEn: "CASE STUDY",
    works: [
      "34cf39674ea047179e9a53663e1454b9", "b50aaade3ad341a885ee0651f0d11164", "b67598d46645401d949af9567fa7a49e", "d49bfc380a7d48f7a6d9ed1f6f7a62ae", "d634b2a1819740938b5897eece937163",
      "1ffafcee4edb41d6adfa599ea929584b", "3ca1b55ad36f403ca1dfc06bfeb0b487", "4d7a2732a63b43758bbb98b20400846f", "5c1856aff8b445209efc5f5230209064", "17bb927e3f6543ed9694647423c5fdda"
    ].map((name, i) => imageWork(`./2-电商模特换装/${name}.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png`, `AI换装 ${String(i + 1).padStart(2, "0")}`, "outfit-work")),
    process: ["模特素材", "服装参考", "AI智能换装", "细节精修", "商业输出"]
  },

  retouch: {
    title: "产品精修", en: "PRODUCT RETOUCH", subtitle: "文明器物研究区",
    desc: "重建光影、优化材质与细节，提升产品商业质感。",
    tone: "warm", accent: "#b58a4a", hero: "./assets/categories/retouch/proto-hero.png",
    banner: "./assets/category-banners/retouch-final.png",
    works: Array.from({ length: 10 }, (_, i) => imageWork(`./assets/categories/retouch/works/retouch-work-${String(i + 1).padStart(2, "0")}.png`, `产品精修 ${String(i + 1).padStart(2, "0")}`, "retouch-board")),
    process: ["原图分析", "光影重建", "材质优化", "细节精修", "商业输出"]
  },

  poster: {
    title: "文明视觉档案馆", en: "POSTER / BANNER", subtitle: "记录文明的视觉表达，传递思想与未来。",
    desc: "面向商业传播、品牌塑造与活动视觉的横幅作品集合。",
    tone: "sky", accent: "#3e80a8", hero: "./assets/category-banners/poster-final.png", banner: "./assets/category-banners/poster-final.png",
    filters: ["全部作品", "商业宣传", "活动视觉", "品牌塑造", "概念海报", "科技视觉", "文化传播"],
    worksTitle: "作品展示", worksEn: "VISUAL WORKS",
    works: [
      ["./ac6fe018-f7f3-4ffa-b677-e88fb228d2eb.png", "海报 Banner 01", "banner"],
      ["./d15079c8-14f0-47b8-864b-dd47c04d6d66.png", "海报 Banner 02", "banner"],
      ["./30cb955e-0822-43f3-98d9-4ba484c120d2.png", "海报 Banner 03", "banner"],
      ["./4cca3669-f0f0-4b6e-8557-176422ad07b2.png", "海报 Banner 04", "banner"],
      ["./01_拼车计划.png", "拼车计划", "vertical"],
      ["./02_周末狂欢夜.png", "周末狂欢夜", "vertical"],
      ["./03_城限专场.png", "城限专场", "vertical"],
      ["./04_DM严选.png", "DM严选", "vertical"],
      ["./05_周年庆典.png", "周年庆典", "vertical"],
      ["./06_未知剧场.png", "未知剧场", "vertical"],
      ["./制作海报 (4).png", "竖版海报", "vertical"]
    ].map(([src, title, orientation]) => imageWork(src, title, orientation)),
    process: ["主题定位", "视觉概念", "AI生成", "商业合成", "字体排版", "成品输出"]
  },

  ip: {
    title: "IP设计", en: "IP DESIGN", subtitle: "文明生命样本库",
    desc: "用角色形象承载品牌记忆，形成可延展的视觉体系。",
    tone: "aqua", accent: "#14a9b8", hero: "./assets/categories/ip/proto-hero.png", banner: "./assets/category-banners/ip-final.png",
    worksTitle: "IP展示", worksEn: "IP VISUAL SYSTEM",
    works: [
      ["IP综合1.0.png", "IP综合展示"],
      ["山海月IP.png", "山海月 IP"],
      ["NONO.png", "NONO IP"],
      ["源石之子.png", "源石之子"],
      ["酷白1.1.png", "酷白 IP"]
    ].map(([name, title], i) => imageWork(`./IPsj/${name}`, `${String(i + 1).padStart(2, "0")} ${title}`, "ip-board")),
    process: ["角色定位", "草图设定", "三视图完善", "周边延展", "品牌应用"]
  },

  typography: {
    title: "字体设计", en: "FONT DESIGN", subtitle: "文明语言研究区",
    desc: "探索文字的视觉生命力，形成可感知的字体风格。",
    tone: "mist", accent: "#336ff0", hero: "./assets/categories/typography/proto-hero.png", banner: "./assets/category-banners/typography-final.png",
    worksTitle: "字体展示", worksEn: "TYPOGRAPHY WORKS",
    works: Array.from({ length: 14 }, (_, i) => imageWork(`./ztsj/字体设计-${String(i + 1).padStart(2, "0")}.png`, `字体设计 ${String(i + 1).padStart(2, "0")}`, "typography-work")),
    process: ["灵感构思", "草图设计", "细节打磨", "色彩与质感", "成品输出"]
  },

  symbol: {
    title: "超级符号", en: "SUPER SYMBOL", subtitle: "文明标识系统",
    desc: "提炼核心视觉语言，构建简洁有力的符号体系。",
    tone: "dark", accent: "#d98535", hero: "./assets/categories/symbol/proto-hero.png", banner: "./assets/category-banners/symbol-final.png",
    worksTitle: "符号展示", worksEn: "SYMBOL SYSTEM",
    works: [
      ["cjfh-欢狐图标.png", "欢狐图标"],
      ["cjfh-欢狐火漆印.png", "欢狐火漆印"],
      ["cjfh-欢狐玻璃.png", "欢狐玻璃"],
      ["cjfh-标识.png", "标识符号"],
      ["cjfh-无限.png", "无限符号"],
      ["cjfh-太极.png", "太极符号"],
      ["cjfh-四叶草.png", "四叶草符号"],
      ["cjfh-云彩.png", "云彩符号"],
      ["cjfh-眼睛.png", "眼睛符号"],
      ["cjfh-箭头.png", "箭头符号"],
      ["cjfh-玉石.png", "玉石符号"],
      ["cjfh-鸽子.png", "鸽子符号"],
      ["cjfh-整合运动.png", "整合运动符号"]
    ].map(([name, title], i) => imageWork(`./cjfh/${name}`, `${String(i + 1).padStart(2, "0")} ${title}`, "symbol-board")),
    process: ["基础图形", "元素提取", "结构融合", "细节优化", "统一应用"]
  },

  ui: {
    title: "UI启动页", en: "UI SPLASH SCREEN", subtitle: "终端启动空间",
    desc: "以单张启动视觉建立应用氛围，兼顾识别度与沉浸感。",
    tone: "deep", accent: "#65c4ff", hero: "./assets/categories/ui/proto-hero.png", banner: "./assets/category-banners/ui-final.png",
    works: [
      ["./app1.png", "UI启动页 01"],
      ["./象棋.png", "UI启动页 02"],
      ["./DM助手.png", "UI启动页 03"],
      ["./小程序启动页.png", "UI启动页 04"],
      ["./天气启动页.png", "UI启动页 05"],
      ["./外卖启动页.png", "UI启动页 06"]
    ].map(([src, title]) => imageWork(src, title, "ui-launch")),
    process: ["关键词定位", "视觉设定", "氛围构建", "细节打磨", "启动页输出"]
  },

  icon: {
    title: "ICON设计", en: "ICON DESIGN", subtitle: "功能符号研究所",
    desc: "围绕应用场景提炼图形语言，形成清晰直观的图标表达。",
    tone: "mist", accent: "#2268ff", hero: "./assets/categories/icon/proto-hero.png", banner: "./assets/category-banners/icon-final.png",
    worksTitle: "图标展示", worksEn: "ICON WORKS",
    works: Array.from({ length: 15 }, (_, i) => imageWork(`./icon/${i + 1}.png`, `ICON ${String(i + 1).padStart(2, "0")}`, "icon-work")),
    process: ["需求分析", "概念构思", "草图绘制", "精细设计", "应用输出"]
  },

  video: {
    title: "视频", en: "VIDEO", subtitle: "动态影像实验场",
    desc: "将AI生成、分镜设计与后期剪辑结合，形成完整动态内容。",
    tone: "deep", accent: "#6ab8ff", hero: "./assets/categories/video/proto-hero.png", banner: "./assets/category-banners/video-final.png",
    worksTitle: "视频作品", worksEn: "VIDEO WORKS",
    works: [
      videoWork("./重生后.mp4", "重生后", "./重生后.jpg"),
      videoWork("./山海镖局.mp4", "山海镖局", "./山海镖局.jpg"),
      videoWork("./废土温情.mp4", "废土温情", "./废土温情.png"),
      videoWork("./耳机广告.mp4", "耳机广告", "./小耳机.png")
    ],
    process: ["项目大纲", "脚本设定", "镜头设计", "AI生成", "后期剪辑", "调色音效"]
  }
};

window.CATEGORY_NAV = CATEGORY_NAV;
window.CATEGORY_DATA = CATEGORY_DATA;
