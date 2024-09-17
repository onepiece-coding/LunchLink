/* Get HTML Elements */

const mainNavEl = document.querySelector(".main-nav");

const toggleMenuBtnEl = document.getElementById("toggle-menu-btn");

toggleMenuBtnEl.addEventListener("click", (_) => {
  mainNavEl.classList.toggle("open");
});
