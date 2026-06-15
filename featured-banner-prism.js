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
      .banner-prism-wrap{position:absolute;left:50%;top:54%;z-index:5;width:min(74vw,1120px);height:min(62vh,640px);transform:translate(-50%,-50%);perspective:1800px;touch-action:none}
      .banner-prism{position:absolute;left:50%;top:50%;width:min(48vw,760px);aspect-ratio:1.68/1;transform:translate(-50%,-50%) rotateX(-5deg) rotateY(var(--r,0deg));transform-style:preserve-3d;transition:transform .76s cubic-bezier(.2,.72,.18,1)}
      .banner-prism-face{position:absolute;inset:0;display:grid;place-items:center;margin:0;overflow:hidden;border:1px solid rgba(178,210,234,.58);border-radius:12px;background:rgba(238,248,255,.2);box-shadow:0 28px 70px rgba(55,89,122,.2),inset 0 1px rgba(255,255,255,.72);backface-visibility:hidden}
      .banner-prism-face:nth-child(1){transform:rotateY(0deg) translateZ(clamp(110px,12vw,190px))}
      .banner-prism-face:nth-child(2){transform:rotateY(90deg) translateZ(clamp(110px,12vw,190px))}
      .banner-prism-face:nth-child(3){transform:rotateY(180deg) translateZ(clamp(110px,12vw,190px))}
      .banner-prism-face:nth-child(4){transform:rotateY(270deg) translateZ(clamp(110px,12vw,190px))}
      .banner-prism-face img{display:block;width:100%;height:100%;object-fit:contain;transform:scale(var(--s,1));user-select:none;-webkit-user-drag:none}
      .banner-prism-face.is-front{cursor:zoom-in}
      .banner-prism-shadow{position:absolute;left:50%;bottom:5%;width:min(56vw,840px);height:76px;border-radius:50%;background:rgba(73,111,145,.17);filter:blur(25px);transform:translateX(-50%)}
      .banner-prism-arrow{position:absolute;top:50%;z-index:8;width:48px;aspect-ratio:1;border:1px solid rgba(118,162,197,.3);border-radius:50%;background:rgba(241,249,255,.3);box-shadow:0 12px 32px rgba(54,88,118,.15);cursor:pointer;transform:translateY(-50%)}
      .banner-prism-arrow-left{left:0}.banner-prism-arrow-right{right:0}
      .banner-prism-arrow:before{position:absolute;left:50%;top:50%;width:12px;height:12px;border-top:2px solid #6a8093;border-left:2px solid #6a8093;content:""}
      .banner-prism-arrow-left:before{transform:translate(-35%,-50%) rotate(-45deg)}
      .banner-prism-arrow-right:before{transform:translate(-65%,-50%) rotate(135deg)}
      .banner-prism-focus{position:fixed;inset:0;z-index:100;display:none;place-items:center;padding:8vh 6vw;border:0;background:rgba(223,237,247,.5);backdrop-filter:blur(16px)}
      .banner-prism-focus.is-open{display:grid}.banner-prism-focus img{max-width:min(80vw,1200px);max-height:80vh;border-radius:12px;box-shadow:0 36px 100px rgba(44,76,106,.28)}
      @media(max-width:820px){.banner-prism-wrap{top:55%;width:92vw;height:54vh}.banner-prism{width:70vw}.banner-prism-arrow{width:38px}}
    `;
    document.head.appendChild(style);

    stage.insertAdjacentHTML("beforeend", `<div class="banner-prism-wrap"><div class="banner-prism-shadow"></div><div class="banner-prism" data-prism>${works.map((w,i)=>`<figure class="banner-prism-face${i===0?" is-front":""}" data-face="${i}"><img src="${w[1]}?v=prism-20260615" alt="${w[0]}" style="--s:${w[2]}"></figure>`).join("")}</div><button class="banner-prism-arrow banner-prism-arrow-left" data-dir="-1" aria-label="向左旋转"></button><button class="banner-prism-arrow banner-prism-arrow-right" data-dir="1" aria-label="向右旋转"></button></div><button class="banner-prism-focus" data-focus aria-label="关闭大图"><img alt=""></button>`);

    const prism = stage.querySelector("[data-prism]");
    const faces = [...stage.querySelectorAll("[data-face]")];
    const focus = stage.querySelector("[data-focus]");
    const focusImg = focus.querySelector("img");
    let index = 0;
    const render = () => {
      prism.style.setProperty("--r", `${index * -90}deg`);
      faces.forEach((f,i)=>f.classList.toggle("is-front", i === index));
    };
    const rotate = d => { index = (index + d + 4) % 4; render(); };
    stage.querySelectorAll("[data-dir]").forEach(b=>b.onclick=()=>rotate(Number(b.dataset.dir)));
    faces.forEach((f,i)=>f.onclick=()=>{ if(i!==index)return; focusImg.src=works[i][1]; focusImg.alt=works[i][0]; focus.classList.add("is-open"); });
    focus.onclick=()=>focus.classList.remove("is-open");
    document.addEventListener("keydown",e=>{ if(e.key==="ArrowLeft")rotate(-1); if(e.key==="ArrowRight")rotate(1); if(e.key==="Escape")focus.classList.remove("is-open"); });
  }

  window.addEventListener("DOMContentLoaded",()=>requestAnimationFrame(()=>requestAnimationFrame(mount)),{once:true});
})();