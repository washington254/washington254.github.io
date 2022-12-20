

const timeline = gsap.timeline({defaults:{duration:2}})
window.addEventListener("DOMContentLoaded",()=>{
    timeline
        .from("nav",{opacity:0})
        .from(".text-box",{opacity:0,ease:"slow"})
        .from('img',{opacity:0,ease:"slow"})
})

var typed = new Typed(".auto-type", {
    strings: ["Naomi Lyn","a Financial Advisor","available for hire"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// intersection observer
const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.remove("visually-hidden");
        }else{
            entry.target.classList.add("visually-hidden")
        }
    })
})
