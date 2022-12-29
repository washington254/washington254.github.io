"use strict";

/*menu down JS query */
var menuitems = document.getElementById("menu-items");
menuitems.style.maxHeight = "0px";

function menutoggle() {
  if (menuitems.style.maxHeight == "0px") {
    menuitems.style.maxHeight = "200px";
  } else {
    menuitems.style.maxHeight = "0px";
  }
}
/*product image JS query */


var productimg = document.getElementById("product-img");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  productimg.src = smallimg[0].src;
};

smallimg[1].onclick = function () {
  productimg.src = smallimg[1].src;
};

smallimg[2].onclick = function () {
  productimg.src = smallimg[2].src;
};

smallimg[3].onclick = function () {
  productimg.src = smallimg[3].src;
};
/*login reg page JS query */


var loginform = document.getElementById("loginform");
var regform = document.getElementById("regform");
var indicator = document.getElementById("indicator");

function register() {
  regform.style.transform = "translateX(0px)";
  loginform.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}

function login() {
  regform.style.transform = "translateX(300px)";
  loginform.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}