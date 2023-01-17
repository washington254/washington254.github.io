const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");
const containera = document.querySelector(".containera");

menuIcon.addEventListener("click", () => {
    sideBar.classList.toggle("small-sidebar");
    containera.classList.toggle("large-container");
})    