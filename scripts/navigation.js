const menubutton = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menubutton.addEventListener("click", () => {
    menubutton.classList.toggle("open");
    nav.classList.toggle("open");
});
