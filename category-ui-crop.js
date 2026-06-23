(() => {
  const ORIGINAL = "ba0879ce-7225-4b52-99b6-ea06a398726d.png";
  const CROPPED = "./ui启动页/象棋启动页_3x4裁切.svg";

  function applyChessUiCrop(root = document) {
    root.querySelectorAll(`img[src*="${ORIGINAL}"]`).forEach((img) => {
      img.src = CROPPED;
      img.width = 900;
      img.height = 1200;
      img.style.objectFit = "contain";
      img.style.objectPosition = "center center";
    });
  }

  function run() {
    applyChessUiCrop();
    requestAnimationFrame(applyChessUiCrop);
    setTimeout(applyChessUiCrop, 300);
    setTimeout(applyChessUiCrop, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }

  const observer = new MutationObserver(() => applyChessUiCrop());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
