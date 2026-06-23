(() => {
  const works = [
    ["./ac6fe018-f7f3-4ffa-b677-e88fb228d2eb.png", "海报 Banner 01", "banner"],
    ["./d15079c8-14f0-47b8-864b-dd47c04d6d66.png", "海报 Banner 02", "banner"],
    ["./30cb955e-0822-43f3-98d9-4ba484c120d2.png", "海报 Banner 03", "banner"],
    ["./4cca3669-f0f0-4b6e-8557-176422ad07b2.png", "海报 Banner 04", "banner"],
    ["./01_拼车计划.png", "拼车计划", "activity-poster"],
    ["./02_周末狂欢夜.png", "周末狂欢夜", "activity-poster"],
    ["./03_城限专场.png", "城限专场", "activity-poster"],
    ["./04_DM严选.png", "DM严选", "activity-poster"],
    ["./05_周年庆典.png", "周年庆典", "activity-poster"],
    ["./06_未知剧场.png", "未知剧场", "activity-poster"],
    ["./e607c69f-7930-43c3-9774-86b421ee205b (1).png", "竖版海报 01", "vertical"],
    ["./d2977236-d08b-41b3-b595-7e07d9005e6f.png", "竖版海报 02", "vertical"],
    ["./b6a25755-6b4e-4a4a-9d1c-54a714fd7af5.png", "竖版海报 03", "vertical"],
    ["./hp耳机2.png", "竖版海报 04", "vertical"],
    ["./小水库8.png", "竖版海报 05", "vertical"],
    ["./小水库10.png", "竖版海报 06", "vertical"],
    ["./hp耳机4.1.png", "竖版海报 07", "vertical"],
    ["./b64cc7fb-e4b1-4c98-8b1c-e6c5c0eaea00.png", "竖版海报 08", "vertical"],
    ["./3b157685-11e4-44e0-b277-f60f370a452a.png", "竖版海报 09", "vertical"],
    ["./1e8a75ec-0c7a-4906-8e73-032495bc0edf (1).png", "竖版海报 10", "vertical"],
    ["./0ef45b3b-e083-49ce-a8f5-1a270e8b5662.png", "竖版海报 11", "vertical"],
    ["./6e143708-8fcf-43d4-a238-808aaf208d1d.png", "竖版海报 12", "vertical"],
    ["./b3b353e8-14ec-4ee0-a6a1-996110964114.png", "竖版海报 13", "vertical"],
    ["./904f694f-8f4d-438f-bd72-7c43f7b049fd.png", "竖版海报 14", "vertical"],
    ["./85a1d84b-234c-4be8-86c2-496943bfdc4c.png", "竖版海报 15", "vertical"],
    ["./hp耳机10.1.png", "竖版海报 17", "vertical"],
    ["./hp耳机7.png", "竖版海报 18", "vertical"],
    ["./小水库5.png", "竖版海报 19", "vertical"],
    ["./制作海报 (2).png", "竖版海报 20", "vertical"],
    ["./制作海报 (4).png", "竖版海报 21", "vertical"]
  ].map(([src, title, orientation]) => ({ type: "image", src, title, orientation }));

  const baseCard = "position:relative;display:block;width:100%;height:auto;min-height:0;overflow:hidden;color:inherit;text-decoration:none;cursor:zoom-in;";
  const imageStyle = "display:block;width:100%;height:100%;object-fit:contain;object-position:center center;background:transparent;transform:none;";

  function cardStyle(orientation) {
    if (orientation === "banner") return `${baseCard}grid-column:span 30;aspect-ratio:16/9;border-radius:10px;padding:0;`;
    if (orientation === "activity-poster") return `${baseCard}grid-column:span 10;aspect-ratio:4/9;padding:4px;border:1px solid rgba(175,214,255,.58);border-radius:14px;background:linear-gradient(145deg,rgba(255,255,255,.68),rgba(226,240,255,.22));box-shadow:inset 0 1px 0 rgba(255,255,255,.82),0 10px 22px rgba(23,62,108,.12),0 0 0 1px rgba(255,255,255,.18);`;
    return `${baseCard}grid-column:span 12;aspect-ratio:3/4;border-radius:10px;`;
  }

  function renderPosterGrid() {
    const current = new URLSearchParams(location.search).get("cat") || document.body.dataset.category;
    if (current !== "poster") return;
    const grid = document.querySelector(".category-work-grid");
    if (!grid) return;

    if (window.CATEGORY_DATA?.poster) window.CATEGORY_DATA.poster.works = works;

    grid.style.cssText = "display:grid;grid-template-columns:repeat(60,minmax(0,1fr));gap:clamp(10px,1.1vw,16px);align-items:start;grid-auto-flow:row;width:100%;";
    const wrap = document.querySelector(".category-works");
    if (wrap) wrap.style.cssText = "width:min(calc(100vw - 48px),1480px);margin-left:auto;margin-right:auto;";

    grid.innerHTML = works.map((work, index) => `
      <button class="work-card is-${work.orientation}" type="button" data-work-index="${index}" style="${cardStyle(work.orientation)}">
        <img src="${work.src}" alt="${work.title}" loading="${index < 4 ? "eager" : "lazy"}" decoding="async" width="${work.orientation === "banner" ? 1600 : 900}" height="${work.orientation === "banner" ? 900 : 1200}" style="${imageStyle}${work.orientation === "activity-poster" ? "border-radius:9px;" : ""}">
        <span style="${work.orientation === "activity-poster" ? "display:none;" : "pointer-events:none;"}">${work.title}</span>
      </button>
    `).join("");

    const viewer = document.querySelector(".work-viewer");
    const mediaHost = viewer?.querySelector(".work-viewer-media");
    if (!viewer || !mediaHost) return;
    let active = 0;
    const show = (index) => {
      active = (index + works.length) % works.length;
      const work = works[active];
      mediaHost.innerHTML = `<img src="${work.src}" alt="${work.title}" loading="eager" decoding="async" style="max-width:100%;max-height:100%;object-fit:contain;">`;
      viewer.classList.add("is-open");
      viewer.setAttribute("aria-hidden", "false");
    };
    const close = () => {
      viewer.classList.remove("is-open");
      viewer.setAttribute("aria-hidden", "true");
      mediaHost.replaceChildren();
    };
    grid.querySelectorAll(".work-card").forEach((card) => card.addEventListener("click", () => show(Number(card.dataset.workIndex))));
    viewer.querySelector("[data-preview-close]")?.addEventListener("click", close);
    viewer.querySelector("[data-preview-prev]")?.addEventListener("click", () => show(active - 1));
    viewer.querySelector("[data-preview-next]")?.addEventListener("click", () => show(active + 1));
  }

  window.addEventListener("DOMContentLoaded", () => requestAnimationFrame(renderPosterGrid));
})();
