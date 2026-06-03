const iconPaths = {
  "arrow-right": [["path", "M5 12h14"], ["path", "m12 5 7 7-7 7"]],
  "arrow-up": [["path", "M12 19V5"], ["path", "m5 12 7-7 7 7"]],
  "badge": [["path", "M3.85 8.62a4 4 0 0 1 4.78-4.78 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.76 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.76Z"], ["circle", "12 12 3"]],
  "box": [["path", "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"], ["path", "m3.3 7 8.7 5 8.7-5"], ["path", "M12 22V12"]],
  "camera": [["path", "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"], ["circle", "12 13 3"]],
  "chevron-left": [["path", "m15 18-6-6 6-6"]],
  "chevron-right": [["path", "m9 18 6-6-6-6"]],
  "clock": [["circle", "12 12 10"], ["path", "M12 6v6l4 2"]],
  "download": [["path", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["path", "M7 10l5 5 5-5"], ["path", "M12 15V3"]],
  "feather": [["path", "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5Z"], ["path", "M16 8 2 22"], ["path", "M17.5 15H9"]],
  "frame": [["path", "M5 3h4"], ["path", "M15 3h4"], ["path", "M5 21h4"], ["path", "M15 21h4"], ["path", "M3 5v4"], ["path", "M21 5v4"], ["path", "M3 15v4"], ["path", "M21 15v4"], ["rect", "7 7 10 10 2"]],
  "grid": [["rect", "3 3 7 7 1"], ["rect", "14 3 7 7 1"], ["rect", "14 14 7 7 1"], ["rect", "3 14 7 7 1"]],
  "image": [["rect", "3 3 18 18 2"], ["circle", "9 9 2"], ["path", "m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"]],
  "lightbulb": [["path", "M15 14c.2-1 .7-1.7 1.4-2.5A5 5 0 1 0 7.6 11.5c.7.8 1.2 1.5 1.4 2.5"], ["path", "M9 18h6"], ["path", "M10 22h4"]],
  "landmark": [["path", "M3 22h18"], ["path", "M6 18v-7"], ["path", "M10 18v-7"], ["path", "M14 18v-7"], ["path", "M18 18v-7"], ["path", "M4 11h16"], ["path", "m12 2 8 5H4Z"]],
  "mail": [["rect", "2 4 20 16 2"], ["path", "m22 7-10 7L2 7"]],
  "map-pin": [["path", "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"], ["circle", "12 10 3"]],
  "menu": [["path", "M4 6h16"], ["path", "M4 12h16"], ["path", "M4 18h16"]],
  "message-circle": [["path", "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"]],
  "moon": [["path", "M12 3a6 6 0 0 0 9 7.4A9 9 0 1 1 12 3Z"]],
  "network": [["circle", "12 5 3"], ["circle", "6 19 3"], ["circle", "18 19 3"], ["path", "M12 8v4"], ["path", "m8 17 3-5"], ["path", "m16 17-3-5"]],
  "package": [["path", "m7.5 4.27 9 5.15"], ["path", "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"], ["path", "m3.3 7 8.7 5 8.7-5"], ["path", "M12 22V12"]],
  "panel": [["rect", "4 3 16 18 2"], ["path", "M4 9h16"], ["path", "M9 21V9"]],
  "phone": [["path", "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 10.8 19.8 19.8 0 0 1 .08 2.18 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L6 7.9a16 16 0 0 0 6.1 6.1l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92Z"]],
  "planet": [["circle", "12 12 5"], ["path", "M3 12c3.2-5.3 14.8-5.3 18 0"], ["path", "M3 12c3.2 5.3 14.8 5.3 18 0"]],
  "play-circle": [["circle", "12 12 10"], ["path", "m10 8 6 4-6 4Z"]],
  "scan": [["path", "M3 7V5a2 2 0 0 1 2-2h2"], ["path", "M17 3h2a2 2 0 0 1 2 2v2"], ["path", "M21 17v2a2 2 0 0 1-2 2h-2"], ["path", "M7 21H5a2 2 0 0 1-2-2v-2"], ["path", "M7 12h10"]],
  "share": [["circle", "18 5 3"], ["circle", "6 12 3"], ["circle", "18 19 3"], ["path", "m8.6 13.5 6.8 4"], ["path", "m15.4 6.5-6.8 4"]],
  "shopping-bag": [["path", "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"], ["path", "M3 6h18"], ["path", "M16 10a4 4 0 0 1-8 0"]],
  "smile": [["circle", "12 12 10"], ["path", "M8 14s1.5 2 4 2 4-2 4-2"], ["path", "M9 9h.01"], ["path", "M15 9h.01"]],
  "sparkles": [["path", "M9.9 4.2 8.6 7.8 5 9.1l3.6 1.3 1.3 3.6 1.3-3.6 3.6-1.3-3.6-1.3Z"], ["path", "M18 12.5 17.2 15l-2.4.8 2.4.8.8 2.4.8-2.4 2.4-.8-2.4-.8Z"]],
  "star": [["path", "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z"]],
  "sun": [["circle", "12 12 4"], ["path", "M12 2v2"], ["path", "M12 20v2"], ["path", "m4.93 4.93 1.41 1.41"], ["path", "m17.66 17.66 1.41 1.41"], ["path", "M2 12h2"], ["path", "M20 12h2"], ["path", "m6.34 17.66-1.41 1.41"], ["path", "m19.07 4.93-1.41 1.41"]],
  "tv": [["rect", "3 7 18 13 2"], ["path", "m8 3 4 4 4-4"]],
  "type": [["path", "M4 7V4h16v3"], ["path", "M9 20h6"], ["path", "M12 4v16"]],
  "user-round": [["circle", "12 8 5"], ["path", "M20 21a8 8 0 0 0-16 0"]],
  "waves": [["path", "M2 6c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2"], ["path", "M2 12c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2"], ["path", "M2 18c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2"]]
};

function renderIcons() {
  document.querySelectorAll(".icon[data-icon]").forEach((host) => {
    const name = host.dataset.icon;
    const icon = iconPaths[name];
    if (!icon) return;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");

    icon.forEach(([type, data]) => {
      const node = document.createElementNS("http://www.w3.org/2000/svg", type);
      if (type === "path") node.setAttribute("d", data);
      if (type === "circle") {
        const [cx, cy, r] = data.split(" ");
        node.setAttribute("cx", cx);
        node.setAttribute("cy", cy);
        node.setAttribute("r", r);
      }
      if (type === "rect") {
        const [x, y, width, height, rx] = data.split(" ");
        node.setAttribute("x", x);
        node.setAttribute("y", y);
        node.setAttribute("width", width);
        node.setAttribute("height", height);
        if (rx) node.setAttribute("rx", rx);
      }
      svg.appendChild(node);
    });

    host.replaceChildren(svg);
  });
}

function setupTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) document.body.dataset.theme = savedTheme;

  document.querySelectorAll("[data-theme-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.dataset.themeButton;
      document.body.dataset.theme = theme;
      localStorage.setItem("portfolio-theme", theme);
    });
  });
}

function setupCarousel() {
  const root = document.querySelector("#projects");
  const stage = root?.querySelector(".project-stage");
  const cards = stage ? [...stage.querySelectorAll(".project-item")] : [];
  const dots = root?.querySelector(".project-dots");
  const prevButton = root?.querySelector(".carousel-button.prev");
  const nextButton = root?.querySelector(".carousel-button.next");

  if (!cards.length || !dots) return;

  const edgeClone = cards[0].cloneNode(true);
  edgeClone.classList.add("project-edge-clone");
  edgeClone.setAttribute("aria-hidden", "true");
  edgeClone.tabIndex = -1;
  stage.appendChild(edgeClone);

  let active = 0;
  let phase = 0;
  let frameTimer;
  let lastTick = 0;
  let isPaused = false;
  let hoveredCard = null;
  const cycleDuration = 18000;
  const phaseSpeed = cards.length / cycleDuration;

  dots.replaceChildren();

  cards.forEach((card, index) => {
    const featuredSlug = card.dataset.featured;
    if (featuredSlug) {
      card.setAttribute("aria-label", `打开${card.dataset.project || "精品项目"}二级页面`);
      if (!card.getAttribute("href")) {
        card.setAttribute("href", `./featured.html?project=${featuredSlug}&v=featured-entry-links-20260601`);
      }
    }

    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `查看项目 ${index + 1}`);
    dot.addEventListener("click", () => {
      animateTo(index);
    });
    dots.appendChild(dot);
  });

  function wrapPhase(value) {
    return (value % cards.length + cards.length) % cards.length;
  }

  function signedOffset(index, base = phase) {
    const total = cards.length;
    let slot = (index - base + total * 8) % total;
    if (slot > total / 2) slot -= total;
    return slot;
  }

  function interpolateStops(stops, distance) {
    const maxIndex = stops.length - 1;
    const clamped = Math.min(maxIndex, Math.max(0, distance));
    const left = Math.floor(clamped);
    const right = Math.min(maxIndex, left + 1);
    const mix = clamped - left;
    return stops[left] + (stops[right] - stops[left]) * mix;
  }

  function desktopLayout(slot, stageWidth) {
    const distance = Math.abs(slot);
    if (distance > 3.08) return null;

    const direction = Math.sign(slot) || 1;
    const scale = Math.min(1, Math.max(0.72, stageWidth / 1672));
    const xStops = [0, 312, 555, 770].map((value) => value * scale);
    const widthStops = [320, 282, 252, 220].map((value) => value * scale);
    const opacityStops = [1, 0.9, 0.78, 0.56];
    const brightnessStops = [1.06, 0.94, 0.82, 0.68];
    const blurStops = [0, 0.04, 0.12, 0.24];
    const angleStops = [0, -8, -13, -18];
    const depthStops = [0, -18, -42, -72];
    const width = interpolateStops(widthStops, distance);
    const height = width * 1.43;
    const floorLine = 748 * scale;
    const top = floorLine - height;

    return {
      x: direction * interpolateStops(xStops, distance),
      width,
      height,
      y: top,
      rotateY: direction * interpolateStops(angleStops, distance),
      depth: interpolateStops(depthStops, distance),
      scale: 1,
      opacity: interpolateStops(opacityStops, distance),
      brightness: interpolateStops(brightnessStops, distance),
      blur: interpolateStops(blurStops, distance),
      zIndex: 100 - Math.round(distance * 12)
    };
  }

  function mobileLayout(slot, stageWidth) {
    const distance = Math.abs(slot);
    if (distance > 1.65) return null;

    const width = Math.min(300, Math.max(245, stageWidth * 0.72));
    return {
      x: slot * stageWidth * 0.78,
      width,
      height: width * 1.38,
      y: 92 + distance * 18,
      scale: 1 - Math.min(0.22, distance * 0.16),
      opacity: 1 - Math.min(0.44, distance * 0.28),
      brightness: 1.06 - Math.min(0.32, distance * 0.2),
      blur: distance * 0.1,
      zIndex: 20 - Math.round(distance * 8)
    };
  }

  function update() {
    const stageWidth = stage?.clientWidth || 900;
    const isMobile = window.matchMedia("(max-width: 760px)").matches;
    active = normalizedIndex(phase);

    cards.forEach((card, index) => {
      const slot = signedOffset(index);
      const layout = isMobile ? mobileLayout(slot, stageWidth) : desktopLayout(slot, stageWidth);
      const visible = Boolean(layout);
      const width = layout?.width || 260;

      card.dataset.slot = String(Math.round(slot));
      card.dataset.wallAngle = "";
      card.classList.toggle("is-active", index === active);
      card.style.setProperty("--project-card-width", `${width}px`);
      card.style.setProperty("--project-card-height", `${layout?.height || 330}px`);
      card.style.opacity = visible ? String(layout.opacity) : "0";
      card.style.filter = visible ? `brightness(${layout.brightness}) blur(${layout.blur}px)` : "brightness(0.4) blur(1px)";
      card.style.pointerEvents = visible ? "auto" : "none";
      card.style.cursor = card.dataset.featured ? "pointer" : "default";
      card.tabIndex = card.dataset.featured && visible ? 0 : -1;
      card.style.transform = visible
        ? `translate3d(${layout.x}px, ${layout.y}px, ${layout.depth || 0}px) rotateY(${layout.rotateY || 0}deg) scale(${layout.scale})`
        : `translate3d(${slot > 0 ? stageWidth : -stageWidth}px, 28px, 0) scale(0.58)`;
      card.style.zIndex = visible ? String(layout.zIndex) : "1";
    });

    const cloneSource = cards[normalizedIndex(phase - 3)];
    const cloneLayout = isMobile ? null : desktopLayout(-3, stageWidth);
    const cloneImage = edgeClone.querySelector("img");
    const sourceImage = cloneSource?.querySelector("img");

    if (cloneSource && cloneLayout && cloneImage && sourceImage) {
      cloneImage.src = sourceImage.getAttribute("src") || sourceImage.currentSrc;
      cloneImage.alt = "";
      edgeClone.setAttribute("href", cloneSource.getAttribute("href") || "#");
      edgeClone.style.setProperty("--project-card-width", `${cloneLayout.width}px`);
      edgeClone.style.setProperty("--project-card-height", `${cloneLayout.height}px`);
      edgeClone.style.opacity = String(cloneLayout.opacity);
      edgeClone.style.filter = `brightness(${cloneLayout.brightness}) blur(${cloneLayout.blur}px)`;
      edgeClone.style.transform = `translate3d(${cloneLayout.x}px, ${cloneLayout.y}px, ${cloneLayout.depth || 0}px) rotateY(${cloneLayout.rotateY || 0}deg) scale(${cloneLayout.scale})`;
      edgeClone.style.zIndex = String(cloneLayout.zIndex);
    } else {
      edgeClone.style.opacity = "0";
    }

    [...dots.children].forEach((dot, index) => {
      dot.setAttribute("aria-current", index === active ? "true" : "false");
    });
  }

  function normalizedIndex(index) {
    return (Math.round(index) % cards.length + cards.length) % cards.length;
  }

  function startContinuous() {
    window.cancelAnimationFrame(frameTimer);
    lastTick = performance.now();
    frameTimer = window.requestAnimationFrame(tick);
  }

  function tick(now) {
    const elapsed = Math.min(64, now - lastTick);
    lastTick = now;
    if (!isPaused) {
      phase = wrapPhase(phase + elapsed * phaseSpeed);
      update();
    }
    frameTimer = window.requestAnimationFrame(tick);
  }

  function animateTo(index) {
    phase = wrapPhase(index);
    lastTick = performance.now();
    update();
  }

  function setPaused(paused) {
    if (isPaused === paused) return;
    isPaused = paused;
    root.classList.toggle("is-carousel-paused", isPaused);
    lastTick = performance.now();
  }

  function closestProjectCard(target) {
    return target instanceof Element ? target.closest(".project-item") : null;
  }

  function findProjectCardAtPoint(x, y) {
    return [...cards, edgeClone]
      .filter((card) => Number.parseFloat(card.style.opacity || "1") > 0.05)
      .map((card) => {
        const rect = card.getBoundingClientRect();
        const zIndex = Number.parseInt(card.style.zIndex || "0", 10);
        return { card, rect, zIndex: Number.isNaN(zIndex) ? 0 : zIndex };
      })
      .filter(({ rect }) => x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom)
      .sort((a, b) => b.zIndex - a.zIndex)[0]?.card || null;
  }

  function setHoveredCard(card) {
    if (hoveredCard === card) return;
    hoveredCard?.classList.remove("is-hovered");
    hoveredCard = card;
    hoveredCard?.classList.add("is-hovered");
    setPaused(Boolean(hoveredCard));
  }

  prevButton?.addEventListener("click", () => {
    animateTo(active - 1);
  });

  nextButton?.addEventListener("click", () => {
    animateTo(active + 1);
  });

  stage.addEventListener("pointermove", (event) => {
    setHoveredCard(findProjectCardAtPoint(event.clientX, event.clientY));
  });

  stage.addEventListener("click", (event) => {
    const card = findProjectCardAtPoint(event.clientX, event.clientY) || closestProjectCard(event.target);
    const href = card?.getAttribute("href");
    if (!href || href === "#") return;

    event.preventDefault();
    if (event.metaKey || event.ctrlKey || event.shiftKey) {
      window.open(href, "_blank", "noopener");
      return;
    }

    window.location.href = href;
  });

  stage.addEventListener("pointerleave", () => {
    setHoveredCard(null);
  });

  stage.addEventListener("focusin", (event) => {
    setHoveredCard(closestProjectCard(event.target));
  });

  stage.addEventListener("focusout", (event) => {
    if (!closestProjectCard(event.relatedTarget)) {
      setHoveredCard(null);
    }
  });

  update();
  startContinuous();
  window.addEventListener("resize", update, { passive: true });
}

function setupNavigation() {
  const navLinks = [...document.querySelectorAll(".main-nav a")];
  const backTop = document.querySelector(".back-top");

  if (!navLinks.length) return;

  const sectionTargets = navLinks
    .map((link) => {
      const href = link.getAttribute("href");
      if (!href?.startsWith("#")) return null;
      const target = href === "#home" ? document.querySelector(".hero-panel") : document.querySelector(href);
      return target ? { href, target } : null;
    })
    .filter(Boolean);

  function updateActiveNav() {
    const marker = window.scrollY + window.innerHeight * 0.46;
    let activeHref = "#home";

    sectionTargets.forEach(({ href, target }) => {
      const top = target.getBoundingClientRect().top + window.scrollY;
      if (marker >= top) activeHref = href;
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === activeHref);
    });
  }

  window.addEventListener("scroll", () => {
    updateActiveNav();
    backTop?.classList.toggle("is-visible", window.scrollY > 560);
  }, { passive: true });
  window.addEventListener("resize", updateActiveNav, { passive: true });
  window.addEventListener("load", updateActiveNav, { passive: true });

  backTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  updateActiveNav();
}

renderIcons();
setupTheme();
setupCarousel();
setupNavigation();
