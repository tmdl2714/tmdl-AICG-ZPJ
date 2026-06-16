(()=>{
  const VERSION="featured-ip-focus-glow-resized-20260616";
  const works=[
    {title:"山海月IP",src:"./山海月IP.png"},
    {title:"欢狐IP综合设计",src:"./IP综合1.0.png"}
  ];

  const asset=path=>`${path}?v=${VERSION}`;

  const injectStyles=()=>{
    if(document.getElementById("featured-ip-overview-styles"))return;
    const style=document.createElement("style");
    style.id="featured-ip-overview-styles";
    style.textContent=`
      body.featured-page[data-featured="ip"] .featured-frost-stage{overflow:hidden!important;pointer-events:auto!important;perspective:1400px!important;perspective-origin:50% 48%!important}
      body.featured-page[data-featured="ip"] .ip-placement-art{display:none!important}
      .featured-ip-layout{position:absolute;inset:0;z-index:6;pointer-events:auto;perspective:1400px;transform-style:preserve-3d}
      .featured-ip-overview{position:absolute;left:50%;top:54%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(22px,3vw,52px);width:min(76vw,1120px);pointer-events:auto;transform:translate(-50%,-50%);transition:opacity .32s ease,transform .62s cubic-bezier(.22,.72,.2,1)}
      .featured-ip-overview-card{position:relative;z-index:2;display:block;width:100%;aspect-ratio:3/2;margin:0;padding:0;overflow:hidden;border:1px solid rgba(198,224,243,.55);border-radius:12px;background:rgba(235,247,255,.3);box-shadow:0 24px 58px rgba(49,82,116,.22),0 0 30px rgba(174,220,250,.18);cursor:pointer;pointer-events:auto;transition:transform .32s ease,border-color .22s ease,box-shadow .22s ease}
      .featured-ip-overview-card:hover,.featured-ip-overview-card:focus-visible{transform:translateY(-5px);border-color:rgba(218,170,86,.72);box-shadow:0 28px 66px rgba(49,82,116,.28),0 0 32px rgba(218,170,86,.18);outline:none}
      .featured-ip-overview-card img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;pointer-events:none;user-select:none;-webkit-user-drag:none}
      .featured-ip-focus{position:absolute;left:50%;top:46%;width:min(61vw,930px);aspect-ratio:3/2;opacity:0;pointer-events:none;transform:translate(-50%,-50%) scale(.78);transition:opacity .28s ease,transform .62s cubic-bezier(.18,.78,.18,1);transform-style:preserve-3d}
      .featured-ip-focus::before{position:absolute;left:50%;bottom:0;z-index:-1;width:calc(100% + 34px);height:calc(100% + 22px);border:1px solid rgba(218,240,255,.72);border-radius:20px;background:rgba(225,243,255,.04);box-shadow:0 0 0 1px rgba(255,255,255,.18),0 0 28px rgba(145,205,245,.34),0 0 58px rgba(121,188,235,.2),inset 0 0 24px rgba(232,247,255,.1);content:"";pointer-events:none;transform:translateX(-50%)}
      .featured-ip-focus-card{position:absolute;inset:0;border-radius:12px;transform:rotateY(var(--ip-rotation,0deg));transform-style:preserve-3d;transition:transform 780ms cubic-bezier(.22,.72,.2,1);will-change:transform}
      .featured-ip-face{position:absolute;inset:0;margin:0;overflow:hidden;border:1px solid rgba(198,224,243,.62);border-radius:12px;background:rgba(235,247,255,.35);box-shadow:0 28px 70px rgba(45,76,110,.28),0 0 32px rgba(174,220,250,.18);backface-visibility:hidden;-webkit-backface-visibility:hidden}
      .featured-ip-face-back{transform:rotateY(180deg)}
      .featured-ip-face img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;user-select:none;-webkit-user-drag:none}
      .featured-ip-arrow{position:absolute;top:50%;z-index:5;display:grid;place-items:center;width:clamp(38px,3.4vw,52px);aspect-ratio:1;padding:0;border:1px solid rgba(221,242,255,.5);border-radius:50%;background:linear-gradient(145deg,rgba(10,36,64,.42),rgba(222,243,255,.16));box-shadow:0 12px 30px rgba(12,35,64,.22),inset 0 1px rgba(255,255,255,.4);color:rgba(246,253,255,.9);opacity:.68;cursor:pointer;transform:translateY(-50%);backdrop-filter:blur(12px);transition:opacity .18s ease,border-color .18s ease,box-shadow .18s ease}
      .featured-ip-arrow-left{left:max(-76px,-5.4vw)}
      .featured-ip-arrow-right{right:max(-76px,-5.4vw)}
      .featured-ip-arrow::before{width:30%;height:30%;border-top:1.8px solid currentColor;border-left:1.8px solid currentColor;content:""}
      .featured-ip-arrow-left::before{transform:translateX(12%) rotate(-45deg)}
      .featured-ip-arrow-right::before{transform:translateX(-12%) rotate(135deg)}
      .featured-ip-arrow:hover,.featured-ip-arrow:focus-visible{border-color:rgba(255,255,255,.82);box-shadow:0 12px 30px rgba(12,35,64,.26),0 0 22px rgba(174,223,255,.32);opacity:1;outline:none}
      .featured-ip-layout.is-focused .featured-ip-overview{opacity:0;pointer-events:none;transform:translate(-50%,-50%) scale(.84)}
      .featured-ip-layout.is-focused .featured-ip-focus{opacity:1;pointer-events:auto;transform:translate(-50%,-50%) scale(1)}
      @media(max-width:820px){.featured-ip-overview{top:54%;width:min(90vw,700px);gap:12px}.featured-ip-overview-card{border-radius:8px}.featured-ip-focus{top:48%;width:min(80vw,680px)}.featured-ip-focus::before{width:calc(100% + 22px);height:calc(100% + 14px);border-radius:15px}.featured-ip-arrow{width:36px}.featured-ip-arrow-left{left:max(-46px,-6vw)}.featured-ip-arrow-right{right:max(-46px,-6vw)}}
      @media(prefers-reduced-motion:reduce){.featured-ip-overview,.featured-ip-focus,.featured-ip-focus-card{transition-duration:.01ms!important}}
    `;
    document.head.appendChild(style);
  };

  const init=()=>{
    if(document.body.dataset.featured!=="ip")return;
    const stage=document.querySelector(".featured-ip-frost-page .featured-frost-stage");
    if(!stage)return;
    injectStyles();
    stage.setAttribute("aria-label","06 IP设计作品展示，双图并排，点击放大后旋转交换");
    stage.insertAdjacentHTML("beforeend",`<div class="featured-ip-layout" data-featured-ip-layout><div class="featured-ip-overview">${works.map((work,index)=>`<button class="featured-ip-overview-card" type="button" data-featured-ip-open="${index}" aria-label="放大${work.title}"><img src="${asset(work.src)}" alt="${work.title}" loading="eager" decoding="async" ${index===0?'fetchpriority="high"':''}></button>`).join("")}</div><div class="featured-ip-focus"><div class="featured-ip-focus-card" data-featured-ip-card><figure class="featured-ip-face featured-ip-face-front"><img src="${asset(works[0].src)}" alt="${works[0].title}"></figure><figure class="featured-ip-face featured-ip-face-back"><img src="${asset(works[1].src)}" alt="${works[1].title}"></figure></div><button class="featured-ip-arrow featured-ip-arrow-left" type="button" data-featured-ip-rotate="left" aria-label="向左旋转交换作品"></button><button class="featured-ip-arrow featured-ip-arrow-right" type="button" data-featured-ip-rotate="right" aria-label="向右旋转交换作品"></button></div></div>`);
    const layout=stage.querySelector("[data-featured-ip-layout]");
    const card=stage.querySelector("[data-featured-ip-card]");
    let rotation=0;
    const open=index=>{rotation=index===1?180:0;card.style.setProperty("--ip-rotation",`${rotation}deg`);layout.classList.add("is-focused")};
    const close=()=>layout.classList.remove("is-focused");
    stage.querySelectorAll("[data-featured-ip-open]").forEach(button=>button.addEventListener("click",event=>{event.preventDefault();event.stopPropagation();open(Number(button.dataset.featuredIpOpen))}));
    stage.querySelectorAll("[data-featured-ip-rotate]").forEach(button=>button.addEventListener("click",event=>{event.preventDefault();event.stopPropagation();rotation+=button.dataset.featuredIpRotate==="left"?-180:180;card.style.setProperty("--ip-rotation",`${rotation}deg`)}));
    stage.addEventListener("click",event=>{if(layout.classList.contains("is-focused")&&(event.target===stage||event.target===layout))close()});
    document.addEventListener("keydown",event=>{if(event.key==="Escape")close()});
  };

  if(document.readyState==="loading")window.addEventListener("DOMContentLoaded",()=>requestAnimationFrame(init),{once:true});
  else requestAnimationFrame(init);
})();