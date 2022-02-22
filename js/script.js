const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector("nav");
const navMenu = document.querySelector(".nav-links");
const navItem = document.querySelector(".nav-links li");
const scrollup = document.querySelector(".scroll-btn");

// Show Hamburger Menu
hamburgerMenu.addEventListener("click", () => {
  if (!navMenu.classList.contains("active")) {
    navMenu.classList.add("active");
  } else {
    closeMenu();
  }
});

// Close Hamburger Menu
function closeMenu() {
  navMenu.classList.remove("active");
}

navItem.forEach((link) => link.addEventListener("click", () => closeMenu()));

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    scrollup.classList.add("active");
  } else {
    scrollup.classList.remove("active");
  }
});
