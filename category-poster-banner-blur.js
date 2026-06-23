(() => {
  const BANNER_BLUR_IMAGES = [
    "./ac6fe018-f7f3-4ffa-b677-e88fb228d2eb.png",
    "./d15079c8-14f0-47b8-864b-dd47c04d6d66.png",
    "./30cb955e-0822-43f3-98d9-4ba484c120d2.png",
    "./4cca3669-f0f0-4b6e-8557-176422ad07b2.png"
  ];

  const applyPosterBannerBlur = () => {
    if (document.body.dataset.category !== "poster") return;

    const bannerCards = [...document.querySelectorAll(".category-work-grid .work-card.is-banner")].slice(0, 4);
    if (!bannerCards.length) return;

    bannerCards.forEach((card, index) => {
      card.classList.add("has-banner-blur-fill");
      card.style.setProperty("--poster-banner-blur", `url('${BANNER_BLUR_IMAGES[index]}')`);
    });
  };

  const injectPosterBannerBlurStyle = () => {
    if (document.getElementById("poster-banner-blur-fill-style")) return;

    const style = document.createElement("style");
    style.id = "poster-banner-blur-fill-style";
    style.textContent = `
      body.category-page[data-category="poster"] .category-work-grid .work-card.is-banner.has-banner-blur-fill{
        position:relative!important;
        isolation:isolate!important;
        background:#07131f!important;
      }
      body.category-page[data-category="poster"] .category-work-grid .work-card.is-banner.has-banner-blur-fill::before{
        position:absolute!important;
        inset:-10%!important;
        z-index:0!important;
        background-image:var(--poster-banner-blur)!important;
        background-size:cover!important;
        background-position:center center!important;
        filter:blur(20px) saturate(1.12) brightness(.9)!important;
        transform:scale(1.08)!important;
        opacity:.86!important;
        pointer-events:none!important;
        content:""!important;
      }
      body.category-page[data-category="poster"] .category-work-grid .work-card.is-banner.has-banner-blur-fill>img{
        position:relative!important;
        z-index:1!important;
        width:100%!important;
        height:100%!important;
        object-fit:contain!important;
        object-position:center center!important;
        background:transparent!important;
      }
      body.category-page[data-category="poster"] .category-work-grid .work-card.is-banner.has-banner-blur-fill>span{
        position:relative!important;
        z-index:2!important;
      }
    `;
    document.head.appendChild(style);
  };

  const run = () => {
    injectPosterBannerBlurStyle();
    requestAnimationFrame(applyPosterBannerBlur);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();
