var menubtn=document.getElementById("menu-btn");
var sidenav=document.getElementById("side-nav");
var menu=document.getElementById("menu");

sidenav.style.right = "-250px";
menubtn.onclick =function(){
    if(sidenav.style.right=="-250px"){
        sidenav.style.right = "0";
        menu.src = "./Barber_Shop_img/close.png"
    }
    else{
        sidenav.style.right ="-250px"
        menu.src = "./Barber_Shop_img/menu.png"
    }
}
let loader=document.getElementById("prelodder");

window.addEventListener("load", function () {
    loader.classList.add("remove-preloader");
})

const oberver =  new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entries);
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => oberver.observe(el));


