const menuHumberger = document.querySelector(".menu-toggle input");
const navBarMenu = document.querySelector(".navbar .navbar-collapse");

menuHumberger.addEventListener("click", function () {
  navBarMenu.classList.toggle("slide");
});

// klik diluar sidebar untuk menghilangkan menu

document.addEventListener("click", function (e) {
  if (!menuHumberger.contains(e.target) && !navBarMenu.contains(e.target)) {
    navBarMenu.classList.remove("slide");
    menuHumberger.checked = false;
  }
});
