(() => {
  const applyPosterBannerBlur = () => {
    if (document.body.dataset.category !== "poster") return;

    const bannerCards = [...document.querySelectorAll(".work-card.is-banner")];
    if (!bannerCards.length) return;

    bannerCards.forEach((card) => {
      if (card.classList.contains("has-banner-blur-fill")) return;
      const img = card.querySelector(":scope > img");
      if (!img) return;

      const blurImg = img.cloneNode(false);
      blurImg.removeAttribute("id");
      blurImg.setAttribute("alt", "");
      blurImg.setAttribute("aria-hidden", "true");
      blurImg.className = "banner-blur-fill-bg";

      img.classList.add("banner-blur-fill-main");
      card.classList.add("has-banner-blur-fill");
      card.insertBefore(blurImg, img);
    });
  };

  const injectPosterBannerBlurStyle = () => {
    if (document.getElementById("poster-banner-blur-fill-style")) return;

    const style = document.createElement("style");
    style.id = "poster-banner-blur-fill-style";
    style.textContent = `
      body.category-page[data-category="poster"] .work-card.is-banner.has-banner-blur-fill{
        position:relative!important;
        isolation:isolate!important;
        background:#07131f!important;
      }
      body.category-page[data-category="poster"] .work-card.is-banner.has-banner-blur-fill .banner-blur-fill-bg{
        position:absolute!important;
        inset:-8%!important;
        z-index:0!important;
        width:116%!important;
        height:116%!important;
        max-width:none!important;
        object-fit:cover!important;
        object-position:center center!important;
        filter:blur(18px) saturate(1.12) brightness(.9)!important;
        transform:scale(1.08)!important;
        opacity:.82!important;
        pointer-events:none!important;
      }
      body.category-page[data-category="poster"] .work-card.is-banner.has-banner-blur-fill .banner-blur-fill-main{
        position:relative!important;
        z-index:1!important;
        width:100%!important;
        height:100%!important;
        object-fit:contain!important;
        object-position:center center!important;
        background:transparent!important;
      }
      body.category-page[data-category="poster"] .work-card.is-banner.has-banner-blur-fill span{
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
