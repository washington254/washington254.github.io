"use strict";

var profilemenu = document.querySelector(".profile-menu-wrap");
var navbarright = document.querySelector(".navbar-right");
var sidebaractivity = document.querySelector("#sidebaractivity");
var showmoreactivity = document.querySelector(".showmorelink");

function openpopup() {
  profilemenu.classList.toggle("open");
}

function openlinks() {
  sidebaractivity.classList.toggle("open-activity");
}

if (sidebaractivity.classList.contains("open-activity")) {
  showmoreactivity.innerHTML = "show-less";
} else {
  showmoreactivity.innerHTML = "show-more";
}