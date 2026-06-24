(() => {
  function applySymbolFrameFit() {
    if (new URLSearchParams(window.location.search).get("cat") !== "symbol") return;
    if (document.getElementById("symbol-frame-fit")) return;
    const style = document.createElement("style");
    style.id = "symbol-frame-fit";
    style.textContent = `
      body.category-page .work-card.is-symbol-board,
      body.category-page .work-card.is-symbol-board:nth-child(n) {
        grid-column: span 2 !important;
        aspect-ratio: 1 / 1 !important;
        background: rgba(9, 18, 31, 0.84) !important;
        border: 1px solid rgba(217, 133, 53, 0.5) !important;
        box-shadow: inset 0 0 0 1px rgba(255, 198, 118, 0.14), 0 14px 34px rgba(0, 0, 0, 0.28) !important;
        padding: 9px !important;
        border-radius: 12px !important;
      }
      body.category-page .work-card.is-symbol-board img {
        width: 100% !important;
        height: 100% !important;
        object-fit: contain !important;
        object-position: center center !important;
        border-radius: 7px !important;
        box-shadow: none !important;
        background: transparent !important;
      }
      @media (max-width: 1180px) {
        body.category-page .work-card.is-symbol-board,
        body.category-page .work-card.is-symbol-board:nth-child(n) {
          grid-column: span 2 !important;
        }
      }
      @media (max-width: 760px) {
        body.category-page .work-card.is-symbol-board,
        body.category-page .work-card.is-symbol-board:nth-child(n) {
          grid-column: span 1 !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function applyUiLaunchFrames() {
    if (new URLSearchParams(window.location.search).get("cat") !== "ui") return;
    if (document.getElementById("ui-launch-frames")) return;
    const style = document.createElement("style");
    style.id = "ui-launch-frames";
    style.textContent = `
      body.category-page .work-card.is-ui-launch,
      body.category-page .work-card.is-ui-launch:nth-child(n) {
        grid-column: span 2 !important;
        aspect-ratio: 9 / 16 !important;
        background: linear-gradient(135deg, rgba(244, 250, 255, 0.86), rgba(220, 237, 255, 0.52)) !important;
        border: 1px solid rgba(132, 177, 226, 0.46) !important;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.66), 0 12px 30px rgba(36, 88, 140, 0.16) !important;
        padding: 8px !important;
        border-radius: 16px !important;
      }
      body.category-page .work-card.is-ui-launch img {
        width: 100% !important;
        height: 100% !important;
        object-fit: contain !important;
        object-position: center center !important;
        background: transparent !important;
        border-radius: 11px !important;
        box-shadow: none !important;
        transform: none !important;
      }
      @media (max-width: 1180px) {
        body.category-page .work-card.is-ui-launch,
        body.category-page .work-card.is-ui-launch:nth-child(n) {
          grid-column: span 2 !important;
        }
      }
      @media (max-width: 760px) {
        body.category-page .work-card.is-ui-launch,
        body.category-page .work-card.is-ui-launch:nth-child(n) {
          grid-column: span 1 !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function applyIpWorkFrames() {
    if (new URLSearchParams(window.location.search).get("cat") !== "ip") return;
    if (document.getElementById("ip-work-frames")) return;
    const style = document.createElement("style");
    style.id = "ip-work-frames";
    style.textContent = `
      body.category-page .work-card.is-ip-board,
      body.category-page .work-card.is-ip-board:nth-child(n) {
        grid-column: span 2 !important;
        aspect-ratio: 3 / 4 !important;
        background: linear-gradient(135deg, rgba(238, 255, 255, 0.86), rgba(220, 246, 249, 0.5)) !important;
        border: 1px solid rgba(82, 185, 195, 0.38) !important;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.62), 0 12px 30px rgba(16, 92, 112, 0.14) !important;
        padding: 8px !important;
        border-radius: 16px !important;
      }
      body.category-page .category-work-grid .work-card.is-ip-board:first-child,
      body.category-page .category-work-grid .work-card.is-ip-board:first-child:nth-child(n) {
        grid-column: span 5 !important;
        aspect-ratio: 16 / 9 !important;
      }
      body.category-page .work-card.is-ip-board img {
        width: 100% !important;
        height: 100% !important;
        object-fit: contain !important;
        object-position: center center !important;
        background: transparent !important;
        border-radius: 11px !important;
        box-shadow: none !important;
        transform: none !important;
      }
      @media (max-width: 1180px) {
        body.category-page .work-card.is-ip-board,
        body.category-page .work-card.is-ip-board:nth-child(n) {
          grid-column: span 2 !important;
        }
        body.category-page .category-work-grid .work-card.is-ip-board:first-child,
        body.category-page .category-work-grid .work-card.is-ip-board:first-child:nth-child(n) {
          grid-column: span 3 !important;
        }
      }
      @media (max-width: 760px) {
        body.category-page .work-card.is-ip-board,
        body.category-page .work-card.is-ip-board:nth-child(n),
        body.category-page .category-work-grid .work-card.is-ip-board:first-child,
        body.category-page .category-work-grid .work-card.is-ip-board:first-child:nth-child(n) {
          grid-column: span 1 !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function applyUiChessFit() {
    if (new URLSearchParams(window.location.search).get("cat") !== "ui") return;
    if (document.getElementById("ui-chess-fit")) return;
    const style = document.createElement("style");
    style.id = "ui-chess-fit";
    style.textContent = `
      body.category-page[data-category="ui"] .work-card.is-ui-launch:nth-child(3) img,
      body.category-page .work-card.is-ui-launch:nth-child(3) img {
        object-fit: contain !important;
        object-position: center center !important;
        background: transparent !important;
        transform: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  applySymbolFrameFit();
  applyUiLaunchFrames();
  applyIpWorkFrames();
  applyUiChessFit();

  function posterMap() {
    const works = window.CATEGORY_DATA?.video?.works || [];
    return new Map(works.filter((work) => work.type === "video" && work.poster).map((work) => [work.src, work.poster]));
  }

  function videoSource(video) {
    return video?.dataset?.src || video?.getAttribute("src") || "";
  }

  function applyVideoPosters(root = document) {
    const posters = posterMap();
    root.querySelectorAll("video").forEach((video) => {
      const poster = posters.get(videoSource(video));
      if (poster) video.setAttribute("poster", poster);
    });
  }

  function ensureVideoSource(video) {
    if (!video) return;
    if (!video.currentSrc && !video.src && video.dataset.src) {
      video.src = video.dataset.src;
    }
    applyVideoPosters(video.parentElement || document);
    video.controls = true;
    video.playsInline = true;
    video.preload = "auto";
  }

  function playVideo(video) {
    if (!video) return;
    ensureVideoSource(video);
    video.muted = false;
    video.load();

    const started = video.play();
    if (started?.catch) {
      started.catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }

  function playViewerVideos() {
    document.querySelectorAll(".work-viewer-media video").forEach(playVideo);
  }

  function scheduleViewerPlayback() {
    playViewerVideos();
    window.requestAnimationFrame(playViewerVideos);
    window.setTimeout(playViewerVideos, 80);
    window.setTimeout(playViewerVideos, 220);
  }

  document.addEventListener("click", (event) => {
    const card = event.target instanceof Element ? event.target.closest(".work-card") : null;
    if (!card || card.matches("a[href]")) return;
    const video = card.querySelector("video");
    if (!video) return;
    scheduleViewerPlayback();
  }, true);

  const bindViewerObserver = () => {
    applySymbolFrameFit();
    applyUiLaunchFrames();
    applyIpWorkFrames();
    applyUiChessFit();
    applyVideoPosters();

    const mediaHost = document.querySelector(".work-viewer-media");
    if (mediaHost && "MutationObserver" in window) {
      new MutationObserver(() => {
        applyVideoPosters(mediaHost);
        scheduleViewerPlayback();
      }).observe(mediaHost, {
        childList: true,
        subtree: true
      });
    }

    const grid = document.querySelector(".category-work-grid");
    if (grid && "MutationObserver" in window) {
      new MutationObserver(() => applyVideoPosters(grid)).observe(grid, {
        childList: true,
        subtree: true
      });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindViewerObserver, { once: true });
  } else {
    bindViewerObserver();
  }
})();
