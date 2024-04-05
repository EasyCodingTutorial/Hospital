// For Navbar
let Menu = document.querySelector("#MenuBars");
let Navbar = document.querySelector(".navbar");

Menu.onclick = () => {
  Menu.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
  ThemeToggle.classList.remove("active");
};

window.onscroll = () => {
  ThemeToggle.classList.remove("active");
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
};

// To Toggle The Theme
let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
};

document.querySelectorAll(".themeToggle  .themeBtn").forEach((btn) => {
  btn.onclick = () => {
    let Color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", Color);
  };
});
