(() => {
  const applyActivityPosterSize = () => {
    if (document.body.dataset.category !== "poster") return;

    const cards = [...document.querySelectorAll(".category-work-grid .work-card")].slice(4, 10);
    cards.forEach((card) => {
      card.classList.add("activity-poster-card");
      card.style.setProperty("width", "76%", "important");
      card.style.setProperty("justify-self", "center", "important");
      card.style.setProperty("aspect-ratio", "4 / 9", "important");
      card.style.setProperty("height", "auto", "important");
      card.style.setProperty("min-height", "0", "important");
      card.style.setProperty("padding", "4px", "important");
      card.style.setProperty("border", "1px solid rgba(175,214,255,.52)", "important");
      card.style.setProperty("border-radius", "12px", "important");
      card.style.setProperty("background", "linear-gradient(145deg,rgba(255,255,255,.62),rgba(226,240,255,.18))", "important");
      card.style.setProperty("box-shadow", "inset 0 1px 0 rgba(255,255,255,.78),0 10px 24px rgba(23,62,108,.12),0 0 0 1px rgba(255,255,255,.16)", "important");
      card.style.setProperty("overflow", "hidden", "important");

      const img = card.querySelector("img");
      if (img) {
        img.style.setProperty("width", "100%", "important");
        img.style.setProperty("height", "100%", "important");
        img.style.setProperty("max-width", "none", "important");
        img.style.setProperty("max-height", "none", "important");
        img.style.setProperty("min-height", "0", "important");
        img.style.setProperty("object-fit", "contain", "important");
        img.style.setProperty("object-position", "center center", "important");
        img.style.setProperty("border-radius", "9px", "important");
        img.style.setProperty("background", "transparent", "important");
        img.style.setProperty("transform", "none", "important");
      }

      const label = card.querySelector("span");
      if (label) label.style.setProperty("display", "none", "important");
    });
  };

  const run = () => {
    applyActivityPosterSize();
    requestAnimationFrame(applyActivityPosterSize);
    setTimeout(applyActivityPosterSize, 300);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();
