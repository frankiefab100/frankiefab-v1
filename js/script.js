const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector("nav");
const navMenu = document.querySelector(".nav-links");
const navItem = document.querySelectorAll(".nav-links li");
const scrollupBtn = document.querySelector(".scrollup");

// Show Hamburger Menu
hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  document.body.classList.toggle("stop-scroll");
});

// Close Hamburger Menu
navItem.forEach((link) => link.addEventListener("click", closeMenu));

function closeMenu() {
  navMenu.classList.remove("active");
  hamburgerMenu.classList.remove("active");
  document.body.classList.remove("stop-scroll");
}

// Activate Scroll Button
window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight * 0.8 || window.pageYOffset > 300) {
    scrollupBtn.classList.add("display");
  } else {
    scrollupBtn.classList.remove("display");
  }
});

function scrollUp() {
  let position = document.documentElement.scrollTop || document.body.scrollTop;

  if (position > 0) {
    window.scrollTo(0, 0);
  }
}

scrollupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollUp();
});

// Select Logo and Switch Elements
const lightSwitch = document.querySelector(".brighten");
const darkSwitch = document.querySelector(".darken");

const lightLogo = document.querySelector(".light-logo");
const darkLogo = document.querySelector(".dark-logo");

// Dark Mode Theme Switch
const themeSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

themeSwitch.addEventListener("change", changeTheme, false);

//  Save selected mode in Local Storage
function changeTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme-color", "dark");
    localStorage.setItem("theme", "dark");

    lightSwitch.classList.remove("hide");
    lightLogo.classList.remove("hide");

    darkSwitch.classList.add("hide");
    darkLogo.classList.add("hide");
  } else {
    document.documentElement.setAttribute("data-theme-color", "light");
    localStorage.setItem("theme", "light");

    lightSwitch.classList.add("hide");
    lightLogo.classList.add("hide");

    darkSwitch.classList.remove("hide");
    darkLogo.classList.remove("hide");
  }
}

// Save mode on reload
const selectedTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (selectedTheme) {
  document.documentElement.setAttribute("data-theme-color", selectedTheme);

  if (selectedTheme === "dark") {
    themeSwitch.checked = true;

    lightSwitch.classList.remove("hide");
    lightLogo.classList.remove("hide");

    darkSwitch.classList.add("hide");
    darkLogo.classList.add("hide");
  }
}

// Filter Projects by category
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach((button) => button.classList.remove("active"));

    e.target.classList.add("active");
  });
});

const mixer = mixitup(".projects", {
  selectors: {
    target: ".project-box",
  },
  animation: {
    duration: 350,
  },
});
