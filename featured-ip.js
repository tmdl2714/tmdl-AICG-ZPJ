(() => {
  const V = "featured-ip-owned-frame-20260616";
  const W = [
    { title: "\u5c71\u6d77\u6708IP", src: "./\u5c71\u6d77\u6708IP.png" },
    { title: "\u6b22\u72d0IP\u7efc\u5408\u8bbe\u8ba1", src: "./IP\u7efc\u54081.0.png" }
  ];
  const A = (path) => `${path}?v=${V}`;

  function injectStyles() {
    if (document.getElementById("featured-ip-overview-styles")) return;
    const style = document.createElement("style");
    style.id = "featured-ip-overview-styles";
    style.textContent = `
      body.featured-page[data-featured="ip"] .featured-frost-stage{overflow:hidden!important;pointer-events:auto!important;perspective:1400px!important;perspective-origin:50% 52%!important}
      body.featured-page[data-featured="ip"] .featured-ip-frost-page .featured-frost-stage::before{display:none!important;content:none!important}
      body.featured-page[data-featured="ip"] .ip-placement-art{display:none!important}
      body.featured-page[data-featured="ip"] .featured-ip-layout{position:absolute;inset:0;z-index:6;pointer-events:auto;perspective:1400px;transform-style:preserve-3d}
      body.featured-page[data-featured="ip"] .featured-ip-overview{position:absolute;left:50%;top:51.5%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(22px,3vw,52px);width:min(76vw,1120px);pointer-events:auto;transform:translate(-50%,-50%);transition:opacity .32s ease,transform .62s cubic-bezier(.22,.72,.2,1)}
      body.featured-page[data-featured="ip"] .featured-ip-overview-card{position:relative;z-index:2;display:block;width:100%;aspect-ratio:3/2;margin:0;padding:0;overflow:hidden;border:0!important;border-radius:0;background:transparent;box-shadow:none!important;cursor:pointer;pointer-events:auto;transition:transform .32s ease}
      body.featured-page[data-featured="ip"] .featured-ip-overview-card:hover,body.featured-page[data-featured="ip"] .featured-ip-overview-card:focus-visible{transform:translateY(-5px);outline:none}
      body.featured-page[data-featured="ip"] .featured-ip-overview-card img{display:block;width:100%;height:100%;object-fit:cover;user-select:none;-webkit-user-drag:none;pointer-events:none}
      body.featured-page[data-featured="ip"] .featured-ip-focus{position:absolute;left:calc(var(--ref-stage-x) + var(--ref-stage-w) * .501);top:calc(var(--ref-stage-y) + var(--ref-stage-h) * .127);z-index:2;width:calc(var(--ref-stage-w) * .7115);max-width:none;aspect-ratio:3/2;opacity:0;pointer-events:none;transform:translateX(-50%) scale(.78);transform-origin:center center;transition:opacity .28s ease,transform .62s cubic-bezier(.18,.78,.18,1);transform-style:preserve-3d}
      body.featured-page[data-featured="ip"] .featured-ip-focus-card{position:absolute;inset:0;border:0!important;border-radius:18px;transform:rotateY(var(--ip-rotation,0deg));transform-style:preserve-3d;transition:transform 780ms cubic-bezier(.22,.72,.2,1);will-change:transform}
      body.featured-page[data-featured="ip"] .featured-ip-face{position:absolute;inset:0;margin:0;border:0!important;border-radius:18px;background:transparent;box-shadow:none!important;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform-style:preserve-3d}
      body.featured-page[data-featured="ip"] .featured-ip-face-back{transform:rotateY(180deg)}
      body.featured-page[data-featured="ip"] .featured-ip-frame{position:absolute;inset:0;box-sizing:border-box;overflow:hidden;border:1px solid rgba(226,244,255,.52);border-radius:18px;background:transparent;box-shadow:0 0 24px rgba(255,248,225,.58),0 0 54px rgba(193,217,236,.32),0 26px 56px rgba(23,58,96,.24);backface-visibility:hidden;-webkit-backface-visibility:hidden}
      body.featured-page[data-featured="ip"] .featured-ip-frame img{display:block;width:100%;height:100%;border-radius:inherit;object-fit:cover;object-position:center;user-select:none;-webkit-user-drag:none}
      body.featured-page[data-featured="ip"] .featured-ip-arrow{position:absolute;top:50%;z-index:5;display:grid;place-items:center;width:clamp(38px,3.4vw,52px);aspect-ratio:1;padding:0;border:0!important;border-radius:50%;background:rgba(10,36,64,.28);box-shadow:none!important;color:rgba(246,253,255,.9);opacity:.68;cursor:pointer;transform:translateY(-50%);backdrop-filter:blur(12px)}
      body.featured-page[data-featured="ip"] .featured-ip-arrow-left{left:max(-76px,-5.4vw)}
      body.featured-page[data-featured="ip"] .featured-ip-arrow-right{right:max(-76px,-5.4vw)}
      body.featured-page[data-featured="ip"] .featured-ip-arrow::before{width:30%;height:30%;border-top:1.8px solid currentColor;border-left:1.8px solid currentColor;content:""}
      body.featured-page[data-featured="ip"] .featured-ip-arrow-left::before{transform:translateX(12%) rotate(-45deg)}
      body.featured-page[data-featured="ip"] .featured-ip-arrow-right::before{transform:translateX(-12%) rotate(135deg)}
      body.featured-page[data-featured="ip"] .featured-ip-layout.is-focused .featured-ip-overview{opacity:0;pointer-events:none;transform:translate(-50%,-50%) scale(.84)}
      body.featured-page[data-featured="ip"] .featured-ip-layout.is-focused .featured-ip-focus{opacity:1;pointer-events:auto;transform:translateX(-50%) scale(1)}
      @media(max-width:820px){body.featured-page[data-featured="ip"] .featured-ip-overview{top:51.5%;width:min(90vw,700px);gap:12px}body.featured-page[data-featured="ip"] .featured-ip-focus{width:min(88vw,680px);left:50%;top:max(118px,calc(var(--ref-stage-y) + var(--ref-stage-h) * .127))}body.featured-page[data-featured="ip"] .featured-ip-arrow{width:36px}body.featured-page[data-featured="ip"] .featured-ip-arrow-left{left:max(-46px,-6vw)}body.featured-page[data-featured="ip"] .featured-ip-arrow-right{right:max(-46px,-6vw)}}`;
    document.head.appendChild(style);
  }

  const face = (work, className = "featured-ip-face") =>
    `<figure class="${className}"><div class="featured-ip-frame"><img src="${A(work.src)}" alt="${work.title}"></div></figure>`;

  function setupIpPage() {
    if (document.body.dataset.featured !== "ip") return;
    const stage = document.querySelector(".featured-ip-frost-page .featured-frost-stage");
    if (!stage || stage.querySelector("[data-featured-ip-layout]")) return;

    injectStyles();
    stage.insertAdjacentHTML("beforeend", `<div class="featured-ip-layout" data-featured-ip-layout><div class="featured-ip-overview">${W.map((work, index) => `<button class="featured-ip-overview-card" type="button" data-featured-ip-open="${index}"><img src="${A(work.src)}" alt="${work.title}"></button>`).join("")}</div><div class="featured-ip-focus"><div class="featured-ip-focus-card" data-featured-ip-card>${face(W[0], "featured-ip-face featured-ip-face-front")}${face(W[1], "featured-ip-face featured-ip-face-back")}</div><button class="featured-ip-arrow featured-ip-arrow-left" type="button" data-featured-ip-rotate="left"></button><button class="featured-ip-arrow featured-ip-arrow-right" type="button" data-featured-ip-rotate="right"></button></div></div>`);

    const layout = stage.querySelector("[data-featured-ip-layout]");
    const card = stage.querySelector("[data-featured-ip-card]");
    let rotation = 0;

    const logFocusGeometry = () => {
      if (!layout.classList.contains("is-focused")) return;
      const focus = stage.querySelector(".featured-ip-focus");
      const frame = stage.querySelector(".featured-ip-frame");
      const focusRect = focus.getBoundingClientRect();
      const frameRect = frame.getBoundingClientRect();
      console.info("[featured-ip] focus owned frame", {
        frameSelector: ".featured-ip-focus-card .featured-ip-frame",
        rotateSelector: ".featured-ip-focus-card",
        focusBottom: focusRect.bottom,
        frameBottom: frameRect.bottom,
        difference: focusRect.bottom - frameRect.bottom
      });
    };

    stage.querySelectorAll("[data-featured-ip-open]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        rotation = Number(button.dataset.featuredIpOpen) === 1 ? 180 : 0;
        card.style.setProperty("--ip-rotation", `${rotation}deg`);
        layout.classList.add("is-focused");
        requestAnimationFrame(() => requestAnimationFrame(logFocusGeometry));
        window.setTimeout(logFocusGeometry, 820);
      });
    });

    stage.querySelectorAll("[data-featured-ip-rotate]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        rotation += button.dataset.featuredIpRotate === "left" ? -180 : 180;
        card.style.setProperty("--ip-rotation", `${rotation}deg`);
      });
    });

    stage.addEventListener("click", (event) => {
      if (layout.classList.contains("is-focused") && (event.target === stage || event.target === layout)) {
        layout.classList.remove("is-focused");
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") layout.classList.remove("is-focused");
    });
    window.addEventListener("resize", () => requestAnimationFrame(logFocusGeometry), { passive: true });
    window.addEventListener("load", () => requestAnimationFrame(logFocusGeometry), { once: true });
  }

  document.readyState === "loading"
    ? window.addEventListener("DOMContentLoaded", () => requestAnimationFrame(setupIpPage), { once: true })
    : requestAnimationFrame(setupIpPage);
})();