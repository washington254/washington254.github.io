"use strict";

var menubtn = document.getElementById("menu-btn");
var sidenav = document.getElementById("side-nav");
var menu = document.getElementById("menu");
sidenav.style.right = "-250px";

menubtn.onclick = function () {
  if (sidenav.style.right == "-250px") {
    sidenav.style.right = "0";
    menu.src = "./Barber_Shop_img/close.png";
  } else {
    sidenav.style.right = "-250px";
    menu.src = "./Barber_Shop_img/menu.png";
  }
};

var loader = document.getElementById("prelodder");
window.addEventListener("load", function () {
  loader.classList.add("remove-preloader");
});
var oberver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    console.log(entries);

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
var hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(function (el) {
  return oberver.observe(el);
});