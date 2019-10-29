function addMargin() {
  let header = document.querySelector(".topbar");
  let height = header.offsetHeight;
  let nav = document.querySelector(".header");
  nav.style.marginTop = height + "px";
}
addMargin();
window.addEventListener("resize", addMargin);
