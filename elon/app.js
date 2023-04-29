/*============ AUTO-TYPING-EFFECT========= */

const typed = new Typed(".auto-type", {
  strings: ["CEO of Tesla", "Founder of SPACE-X", "Owner Of Twitter"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

/*============ TOGGLE NAVBAR ========= */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active")
})


/*============ CHANGE ACTIVE NAVBAR ========= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(section => {

        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            })
        }
    });
    /*============ BOX-SHADOW NAVBAR ========= */
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 100);

    /*============ REMOVE NAVBAR AFTER LINK CLICK ========= */
    menuIcon.classList.remove("bx-x")
    navbar.classList.remove("active")

};


let morebtn = document.querySelector(".small-screen");
let moreServices = document.querySelectorAll(".remove-small");

morebtn.addEventListener("click", () => {
  moreServices.forEach((service) => {
    service.classList.remove("remove-small");
  });
});