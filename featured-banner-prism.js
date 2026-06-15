(() => {
  const works = [
    ["窖藏白酒", "./assets/featured-banner-art-baijiu.jpeg", 1],
    ["定格每一道光", "./30cb955e-0822-43f3-98d9-4ba484c120d2.png", 1.04],
    ["新本上架", "./d15079c8-14f0-47b8-864b-dd47c04d6d66.png", .88],
    ["今日上新", "./4cca3669-f0f0-4b6e-8557-176422ad07b2.png", .98]
  ];

  function mount() {
    if (document.body.dataset.featured !== "banner") return;
    const stage = document.querySelector(".featured-frost-stage");
    if (!stage || stage.dataset.prismMounted) return;
    stage.dataset.prismMounted = "1";
    stage.querySelector(".featured-banner-grid")?.remove();
    stage.querySelector(".featured-banner-focus")?.remove();

    const style = document.createElement("style");
    style.textContent = `
      body.featured-page[data-featured="banner"] .featured-frost-stage{overflow:hidden!important}
      .banner-prism-wrap{position:absolute;left:50%;top:54%;z-index:5;width:min(78vw,1180px);height:min(62vh,640px);transform:translate(-50%,-50%);perspective:1800px;touch-action:none;pointer-events:auto}
      .banner-prism{position:absolute;left:50%;top:50%;width:min(44vw,700px);aspect-ratio:1.68/1;transform:translate(-50%,-50%) rotateX(-4deg) rotateY(var(--r,-22deg));transform-style:preserve-3d;transition:transform .76s cubic-bezier(.2,.72,.18,1);pointer-events:auto}
      .banner-prism-face{position:absolute;inset:0;display:grid;place-items:center;margin:0;overflow:hidden;border:1px solid rgba(178,210,234,.58);border-radius:10px;background:rgba(238,248,255,.18);box-shadow:0 28px 70px rgba(55,89,122,.2),inset 0 1px rgba(255,255,255,.72);backface-visibility:hidden;-webkit-backface-visibility:hidden}
      .banner-prism-face:nth-child(1){transform:rotateY(0deg) translateZ(clamp(90px,10vw,160px))}
      .banner-prism-face:nth-child(2){transform:rotateY(90deg) translateZ(clamp(90px,10vw,160px))}
      .banner-prism-face:nth-child(3){transform:rotateY(180deg) translateZ(clamp(90px,10vw,160px))}
      .banner-prism-face:nth-child(4){transform:rotateY(270deg) translateZ(clamp(90px,10vw,160px))}
      .banner-prism-face img{display:block;width:100%;height:100%;object-fit:contain;transform:scale(var(--s,1));user-select:none;-webkit-user-drag:none}
      .banner-prism-face.is-front{cursor:zoom-in}
      .banner-prism-shadow{position:absolute;left:50%;bottom:5%;width:min(52vw,780px);height:70px;border-radius:50%;background:rgba(73,111,145,.17);filter:blur(25px);transform:translateX(-50%);pointer-events:none}
      .banner-prism-arrow{position:absolute;top:50%;z-index:30;display:block;width:50px;height:50px;padding:0;border:1px solid rgba(118,162,197,.42);border-radius:50%;background:rgba(241,249,255,.58);box-shadow:0 12px 32px rgba(54,88,118,.2);cursor:pointer;transform:translateY(-50%);pointer-events:auto}
      .banner-prism-arrow:hover{border-color:rgba(205,151,67,.72);box-shadow:0 14px 36px rgba(54,88,118,.24),0 0 22px rgba(211,164,82,.2)}
      .banner-prism-arrow-left{left:8px}.banner-prism-arrow-right{right:8px}
      .banner-prism-arrow:before{position:absolute;left:50%;top:50%;width:12px;height:12px;border-top:2px solid #667f94;border-left:2px solid #667f94;content:""}
      .banner-prism-arrow-left:before{transform:translate(-35%,-50%) rotate(-45deg)}
      .banner-prism-arrow-right:before{transform:translate(-65%,-50%) rotate(135deg)}
      .banner-prism-focus{position:fixed;inset:0;z-index:100;display:none;place-items:center;padding:8vh 6vw;border:0;background:rgba(223,237,247,.5);backdrop-filter:blur(16px)}
      .banner-prism-focus.is-open{display:grid}.banner-prism-focus img{max-width:min(80vw,1200px);max-height:80vh;border-radius:12px;box-shadow:0 36px 100px rgba(44,76,106,.28)}
      @media(max-width:820px){.banner-prism-wrap{top:55%;width:94vw;height:54vh}.banner-prism{width:66vw}.banner-prism-arrow{width:40px;height:40px}}
    `;
    document.head.appendChild(style);

    stage.insertAdjacentHTML("beforeend", `<div class="banner-prism-wrap"><div class="banner-prism-shadow"></div><div class="banner-prism" data-prism>${works.map((w,i)=>`<figure class="banner-prism-face${i===0?" is-front":""}" data-face="${i}"><img src="${w[1]}?v=prism-controls-20260615" alt="${w[0]}" style="--s:${w[2]}"></figure>`).join("")}</div><button type="button" class="banner-prism-arrow banner-prism-arrow-left" data-dir="-1" aria-label="向左旋转"></button><button type="button" class="banner-prism-arrow banner-prism-arrow-right" data-dir="1" aria-label="向右旋转"></button></div><button type="button" class="banner-prism-focus" data-focus aria-label="关闭大图"><img alt=""></button>`);

    const prism = stage.querySelector("[data-prism]");
    const faces = [...stage.querySelectorAll("[data-face]")];
    const focus = stage.querySelector("[data-focus]");
    const focusImg = focus.querySelector("img");
    let index = 0;
    const baseAngle = -22;

    const render = () => {
      prism.style.setProperty("--r", `${baseAngle + index * -90}deg`);
      faces.forEach((face, faceIndex) => face.classList.toggle("is-front", faceIndex === index));
    };

    const rotate = (direction) => {
      index = (index + direction + 4) % 4;
      render();
    };

    stage.querySelectorAll("[data-dir]").forEach((button) => {
      button.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        rotate(Number(button.dataset.dir));
      });
    });

    faces.forEach((face, faceIndex) => {
      face.addEventListener("click", () => {
        if (faceIndex !== index) return;
        focusImg.src = works[faceIndex][1];
        focusImg.alt = works[faceIndex][0];
        focus.classList.add("is-open");
      });
    });

    focus.addEventListener("click", () => focus.classList.remove("is-open"));
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") rotate(-1);
      if (event.key === "ArrowRight") rotate(1);
      if (event.key === "Escape") focus.classList.remove("is-open");
    });

    render();
  }

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", () => requestAnimationFrame(() => requestAnimationFrame(mount)), { once: true });
  } else {
    requestAnimationFrame(() => requestAnimationFrame(mount));
  }
})();