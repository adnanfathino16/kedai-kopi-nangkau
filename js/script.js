// Toggle class active hamburger
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di click
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active shopping cart
const cart = document.querySelector(".shopping-cart");
const cartItem = document.querySelector("#shopping-cart-button");
// ketika shopping cart di click
document.querySelector("#shopping-cart-button").onclick = (e) => {
  cart.classList.toggle("active");
  e.preventDefault();
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
  if (!cart.contains(e.target) && !cartItem.contains(e.target)) {
    cart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  });
});

// Klik tombol close Modal
document.querySelector(".modal .close-icon").addEventListener("click", (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
});

// Klik di luar Modal
const modal = document.querySelector("#item-detail-modal");
window.addEventListener("click", (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
});
