(() => {
  const data = typeof CATEGORY_DATA !== "undefined" ? CATEGORY_DATA : window.CATEGORY_DATA;
  if (!data) return;

  if (data.ip) {
    const ipWorks = [
      ["IP综合1.0.png", "IP综合展示"],
      ["山海月IP.png", "山海月 IP"],
      ["NONO.png", "NONO IP"],
      ["源石之子.png", "源石之子"],
      ["酷白1.1.png", "酷白 IP"]
    ];

    data.ip.works = ipWorks.map(([filename, title], index) => ({
      type: "image",
      src: `./IPsj/${filename}`,
      title: `${String(index + 1).padStart(2, "0")} ${title}`,
      orientation: "ip-board"
    }));

    data.ip.worksTitle = "IP展示";
    data.ip.worksEn = "IP VISUAL SYSTEM";
  }

  if (data.typography) {
    data.typography.works = Array.from({ length: 14 }, (_, index) => ({
      type: "image",
      src: `./ztsj/字体设计-${String(index + 1).padStart(2, "0")}.png`,
      title: `字体设计 ${String(index + 1).padStart(2, "0")}`,
      orientation: "typography-work"
    }));

    data.typography.worksTitle = "字体展示";
    data.typography.worksEn = "TYPOGRAPHY WORKS";
  }

  if (data.symbol) {
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

    data.symbol.works = symbolWorks.map(([filename, title], index) => ({
      type: "image",
      src: `./cjfh/${filename}`,
      title: `${String(index + 1).padStart(2, "0")} ${title}`,
      orientation: "symbol-board"
    }));

    data.symbol.worksTitle = "符号展示";
    data.symbol.worksEn = "SYMBOL SYSTEM";
  }

  const style = document.createElement("style");
  style.textContent = `
    body.category-page[data-category="ip"] .work-card.is-ip-board,
    body.category-page[data-category="ip"] .work-card.is-ip-board:nth-child(n) {
      grid-column: span 5 !important;
      aspect-ratio: 16 / 9 !important;
      padding: clamp(8px, 1vw, 12px) !important;
      border: 1px solid rgba(190, 218, 245, .72) !important;
      border-radius: 18px !important;
      background: linear-gradient(135deg, rgba(255,255,255,.82), rgba(225,239,255,.58)) !important;
      box-shadow: 0 12px 30px rgba(22,58,96,.13) !important;
    }
    body.category-page[data-category="typography"] .work-card.is-typography-work,
    body.category-page[data-category="typography"] .work-card.is-typography-work:nth-child(n),
    body.category-page[data-category="symbol"] .work-card.is-symbol-board,
    body.category-page[data-category="symbol"] .work-card.is-symbol-board:nth-child(n) {
      grid-column: span 2 !important;
      aspect-ratio: 1 / 1 !important;
      padding: clamp(8px, 1vw, 12px) !important;
      border: 1px solid rgba(190, 218, 245, .72) !important;
      border-radius: 18px !important;
      background: linear-gradient(135deg, rgba(255,255,255,.82), rgba(225,239,255,.58)) !important;
      box-shadow: 0 12px 30px rgba(22,58,96,.13) !important;
    }
    body.category-page[data-category="ip"] .work-card.is-ip-board img,
    body.category-page[data-category="typography"] .work-card.is-typography-work img,
    body.category-page[data-category="symbol"] .work-card.is-symbol-board img {
      border-radius: 12px !important;
      object-fit: contain !important;
      background: transparent !important;
    }
    body.category-page[data-category="ip"] .work-card.is-ip-board span,
    body.category-page[data-category="typography"] .work-card.is-typography-work span,
    body.category-page[data-category="symbol"] .work-card.is-symbol-board span {
      font-size: clamp(12px, 1vw, 14px) !important;
      letter-spacing: .06em !important;
    }
    @media (max-width: 1180px) {
      body.category-page[data-category="ip"] .work-card.is-ip-board,
      body.category-page[data-category="ip"] .work-card.is-ip-board:nth-child(n) {
        grid-column: span 3 !important;
      }
    }
    @media (max-width: 760px) {
      body.category-page[data-category="ip"] .work-card.is-ip-board,
      body.category-page[data-category="ip"] .work-card.is-ip-board:nth-child(n) {
        grid-column: span 2 !important;
      }
      body.category-page[data-category="typography"] .work-card.is-typography-work,
      body.category-page[data-category="typography"] .work-card.is-typography-work:nth-child(n),
      body.category-page[data-category="symbol"] .work-card.is-symbol-board,
      body.category-page[data-category="symbol"] .work-card.is-symbol-board:nth-child(n) {
        grid-column: span 1 !important;
      }
    }
  `;
  document.head.appendChild(style);
})();