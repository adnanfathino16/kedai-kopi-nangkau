// Toggle class active hamburger
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active search-form
const search = document.querySelector("#search-button");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

search.addEventListener("click", function (e) {
  searchForm.classList.toggle("active");
  searchBox.focus();
  // supaya saat di klik tidak scroll ke atas karena hrefnya hanya # jadi menghilangkan aksi defaultnya
  e.preventDefault();
});

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
