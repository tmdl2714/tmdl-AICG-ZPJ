(() => {
  const VERSION = "featured-ip-bottom-align-outer-frame-20260616";
  const works = [
    { title: "山海月IP", src: "./山海月IP.png" },
    { title: "欢狐IP综合设计", src: "./IP综合1.0.png" }
  ];

  const asset = (path) => `${path}?v=${VERSION}`;

  function injectStyles() {
    if (document.getElementById("featured-ip-overview-styles")) return;

    const style = document.createElement("style");
    style.id = "featured-ip-overview-styles";
    style.textContent = `
      body.featured-page[data-featured="ip"] .featured-frost-stage {
        overflow: hidden !important;
        pointer-events: auto !important;
        perspective: 1400px !important;
        perspective-origin: 50% 52% !important;
      }

      body.featured-page[data-featured="ip"] .ip-placement-art {
        display: none !important;
      }

      .featured-ip-layout {
        position: absolute;
        inset: 0;
        z-index: 6;
        pointer-events: auto;
        perspective: 1400px;
        transform-style: preserve-3d;
      }

      .featured-ip-overview {
        position: absolute;
        left: 50%;
        top: 51.5%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: clamp(22px, 3vw, 52px);
        width: min(76vw, 1120px);
        pointer-events: auto;
        transform: translate(-50%, -50%);
        transition: opacity .32s ease, transform .62s cubic-bezier(.22, .72, .2, 1);
      }

      .featured-ip-overview-card {
        position: relative;
        z-index: 2;
        display: block;
        width: 100%;
        aspect-ratio: 3 / 2;
        margin: 0;
        padding: 0;
        overflow: hidden;
        border: 0 !important;
        border-radius: 0;
        background: transparent;
        box-shadow: none !important;
        cursor: pointer;
        pointer-events: auto;
        transition: transform .32s ease;
      }

      .featured-ip-overview-card:hover,
      .featured-ip-overview-card:focus-visible {
        transform: translateY(-5px);
        outline: none;
      }

      .featured-ip-overview-card img,
      .featured-ip-face img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
        -webkit-user-drag: none;
      }

      .featured-ip-overview-card img {
        pointer-events: none;
      }

      .featured-ip-focus {
        position: absolute;
        left: 50%;
        bottom: 9%;
        z-index: 2;
        width: min(61vw, 930px);
        aspect-ratio: 3 / 2;
        opacity: 0;
        pointer-events: none;
        transform: translateX(-50%) scale(.78);
        transform-origin: center bottom;
        transition: opacity .28s ease, transform .62s cubic-bezier(.18, .78, .18, 1);
        transform-style: preserve-3d;
      }

      .featured-ip-focus-card {
        position: absolute;
        inset: 0;
        border: 0 !important;
        border-radius: 0;
        transform: rotateY(var(--ip-rotation, 0deg));
        transform-style: preserve-3d;
        transition: transform 780ms cubic-bezier(.22, .72, .2, 1);
        will-change: transform;
      }

      .featured-ip-face {
        position: absolute;
        inset: 0;
        margin: 0;
        overflow: hidden;
        border: 0 !important;
        border-radius: 0;
        background: transparent;
        box-shadow: none !important;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }

      .featured-ip-face-back {
        transform: rotateY(180deg);
      }

      .featured-ip-arrow {
        position: absolute;
        top: 50%;
        z-index: 5;
        display: grid;
        place-items: center;
        width: clamp(38px, 3.4vw, 52px);
        aspect-ratio: 1;
        padding: 0;
        border: 0 !important;
        border-radius: 50%;
        background: rgba(10, 36, 64, .28);
        box-shadow: none !important;
        color: rgba(246, 253, 255, .9);
        opacity: .68;
        cursor: pointer;
        transform: translateY(-50%);
        backdrop-filter: blur(12px);
      }

      .featured-ip-arrow-left { left: max(-76px, -5.4vw); }
      .featured-ip-arrow-right { right: max(-76px, -5.4vw); }

      .featured-ip-arrow::before {
        width: 30%;
        height: 30%;
        border-top: 1.8px solid currentColor;
        border-left: 1.8px solid currentColor;
        content: "";
      }

      .featured-ip-arrow-left::before {
        transform: translateX(12%) rotate(-45deg);
      }

      .featured-ip-arrow-right::before {
        transform: translateX(-12%) rotate(135deg);
      }

      .featured-ip-layout.is-focused .featured-ip-overview {
        opacity: 0;
        pointer-events: none;
        transform: translate(-50%, -50%) scale(.84);
      }

      .featured-ip-layout.is-focused .featured-ip-focus {
        opacity: 1;
        pointer-events: auto;
        transform: translateX(-50%) scale(1);
      }

      @media (max-width: 820px) {
        .featured-ip-overview {
          top: 51.5%;
          width: min(90vw, 700px);
          gap: 12px;
        }

        .featured-ip-focus {
          bottom: 11%;
          width: min(80vw, 680px);
        }

        .featured-ip-arrow { width: 36px; }
        .featured-ip-arrow-left { left: max(-46px, -6vw); }
        .featured-ip-arrow-right { right: max(-46px, -6vw); }
      }
    `;

    document.head.appendChild(style);
  }

  function init() {
    if (document.body.dataset.featured !== "ip") return;

    const stage = document.querySelector(".featured-ip-frost-page .featured-frost-stage");
    if (!stage) return;

    injectStyles();

    stage.insertAdjacentHTML(
      "beforeend",
      `<div class="featured-ip-layout" data-featured-ip-layout>
        <div class="featured-ip-overview">
          ${works.map((work, index) => `
            <button class="featured-ip-overview-card" type="button" data-featured-ip-open="${index}">
              <img src="${asset(work.src)}" alt="${work.title}">
            </button>
          `).join("")}
        </div>
        <div class="featured-ip-focus">
          <div class="featured-ip-focus-card" data-featured-ip-card>
            <figure class="featured-ip-face">
              <img src="${asset(works[0].src)}" alt="${works[0].title}">
            </figure>
            <figure class="featured-ip-face featured-ip-face-back">
              <img src="${asset(works[1].src)}" alt="${works[1].title}">
            </figure>
          </div>
          <button class="featured-ip-arrow featured-ip-arrow-left" type="button" data-featured-ip-rotate="left"></button>
          <button class="featured-ip-arrow featured-ip-arrow-right" type="button" data-featured-ip-rotate="right"></button>
        </div>
      </div>`
    );

    const layout = stage.querySelector("[data-featured-ip-layout]");
    const card = stage.querySelector("[data-featured-ip-card]");
    let rotation = 0;

    stage.querySelectorAll("[data-featured-ip-open]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        rotation = Number(button.dataset.featuredIpOpen) === 1 ? 180 : 0;
        card.style.setProperty("--ip-rotation", `${rotation}deg`);
        layout.classList.add("is-focused");
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
  }

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", () => requestAnimationFrame(init), { once: true });
  } else {
    requestAnimationFrame(init);
  }
})();