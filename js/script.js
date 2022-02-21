const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav");
const scrollup = document.querySelector(".scroll-btn");

hamburgerMenu.addEventListener("click", () => {
  const navLink = document.querySelector(".nav-links");
  navLink.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    scrollup.classList.add("active");
  } else {
    scrollup.classList.remove("active");
  }
});
