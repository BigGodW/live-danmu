const box = document.querySelector(".box");
function resizeM() {
  const winWidth = window.innerWidth;
  if (winWidth < 1050) {
    const n = winWidth / 1050;
    box.style.transform = `scale(${n})`;
  } else {
    box.style.transform = "scale(1)";
  }
}
resizeM();
window.addEventListener("resize", resizeM);
