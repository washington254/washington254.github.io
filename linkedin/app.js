const profilemenu  = document.querySelector(".profile-menu-wrap");
const navbarright = document.querySelector(".navbar-right");
const sidebaractivity = document.querySelector("#sidebaractivity");
const showmoreactivity = document.querySelector(".showmorelink");
function openpopup() {
    profilemenu.classList.toggle("open")
}
function openlinks() {
    sidebaractivity.classList.toggle("open-activity");
}
if (sidebaractivity.classList.contains("open-activity")) {
    showmoreactivity.innerHTML = "show-less";
}else{
    showmoreactivity.innerHTML = "show-more"
}