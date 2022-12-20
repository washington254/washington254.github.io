const moon = document.querySelector("#moon");
const naomi = document.querySelector("#naomilast");
const naominot = document.querySelector("#naominot");
const title = document.querySelector(".title");


window.addEventListener("scroll", function () {
    let value = this.window.scrollY;
    moon.style.top = value * 0.5 + "px";
    moon.style.left = value * 1 + "px";
    title.style.top = value * 1 + "px";
})


const timeline = gsap.timeline({defaults:{duration:2}})
window.addEventListener("DOMContentLoaded",()=>{
    timeline
        .from('img',{y:"300%",opacity: 0,stagger: 2,ease:"slow"})

})
