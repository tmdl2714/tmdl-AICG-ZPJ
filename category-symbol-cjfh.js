(() => {
  if (typeof CATEGORY_DATA === "undefined" || !CATEGORY_DATA.symbol) return;

  const symbolWorks = [
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
  ];

  CATEGORY_DATA.symbol.works = symbolWorks.map(([filename, title], index) => ({
    type: "image",
    src: `./cjfh/${filename}`,
    title: `${String(index + 1).padStart(2, "0")} ${title}`,
    orientation: "symbol-board"
  }));

  CATEGORY_DATA.symbol.worksTitle = "符号展示";
  CATEGORY_DATA.symbol.worksEn = "SYMBOL SYSTEM";
})();
