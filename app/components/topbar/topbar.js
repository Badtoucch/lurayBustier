function addMargin() {
  let header = document.querySelector(".topbar");
  let height = header.offsetHeight;
  let nav = document.querySelector(".forBar");
  nav.style.marginTop = height + "px";
}
addMargin();
window.addEventListener("resize", addMargin);
