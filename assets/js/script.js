// POPUP IMAGE
function imageZoom() {
  const imageZoome = document.querySelector(".zoom img");
  const popup = document.querySelector(".popup-image");

  imageZoome.addEventListener("click", function () {
    window.setTimeout(function () {
      document.querySelector(".popup-image").style.display = "block";
      document.querySelector(".popup-image img").src =
        imageZoome.getAttribute("src");
    }, 0);
  });

  document.querySelector(".popup-image span").onclick = () =>
    (popup.style.display = "none");
}

// Humberger menu
function humberger() {
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
}
