var close=document.getElementById("close");
var menu=document.getElementById("menu");
var navlinks=document.getElementById("nav-links");

function showmenu(){
    navlinks.style.right="0";
}
function hidemenu(){
    navlinks.style.right="-200px";
}

// animate on scroll
window.addEventListener("scroll", reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight- revealpoint){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
        
    }

    
}











