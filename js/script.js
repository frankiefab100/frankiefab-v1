const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector("nav");
const navMenu = document.querySelector(".nav-links");
const navItem = document.querySelectorAll(".nav-links li");
const scrollup = document.querySelector(".scroll-btn");

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

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 50) {
    scrollup.classList.add("active");
  } else {
    scrollup.classList.remove("active");
  }
});

// Dark Mode Theme Switch
const themeSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function changeTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme-color", "dark");
  } else {
    document.documentElement.setAttribute("data-theme-color", "light");
  }
}

themeSwitch.addEventListener("change", changeTheme, false);

//  Save selected mode in Local Storage
function changeTheme(e) {
  const lightSwitch = document.querySelector(".brighten");
  const darkSwitch = document.querySelector(".darken");

  const lightLogo = document.querySelector(".light-logo");
  const darkLogo = document.querySelector(".dark-logo");

  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme-color", "dark");
    localStorage.setItem("theme", "dark");
    darkSwitch.style.display = "none";
    lightSwitch.style.display = "block";

    darkLogo.style.display = "none";
    lightLogo.style.display = "block";
  } else {
    document.documentElement.setAttribute("data-theme-color", "light");
    localStorage.setItem("theme", "light");
    darkSwitch.style.display = "block";
    lightSwitch.style.display = "none";

    darkLogo.style.display = "block";
    lightLogo.style.display = "none";
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
  }
}

// Filter Projects by category
const mixer = mixitup(".projects", {
  selectors: {
    target: ".project-box",
  },
  animation: {
    duration: 350,
  },
});
