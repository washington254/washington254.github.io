gsap.to(".bg",{
  scrollTrigger : {
    scrub : 1
  },
  scale : 1.5
});

gsap.to(".man",{
  scrollTrigger : {
    scrub : 1
  },
  scale : 0.5
})
gsap.to(".text",{
  scrollTrigger : {
    scrub : 1
  },
  y : 300,scale : 0.2
})
gsap.to(".about",{
  scrollTrigger : {
    scrub : 3
  },
  x : 1200,y : 120
})
gsap.to(".text2",{
  scrollTrigger : {
    scrub : 3
  },
  x : 220
})

function stars(){
  let count = 500;
  let scene = document.querySelector(".scene");
  let i = 0;

  while (i<count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * innerWidth);
    let y = Math.floor(Math.random() * innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 2;

    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";
    star.style.animationDuration  = 5 + duration + "s";
    star.style.animationDelay  = duration + "s";
    
    scene.appendChild(star);
    i++
  }

}
stars();

const moon = document.querySelector(".moon");
const scene = document.querySelector(".scene");
const forest = document.querySelector(".forest");
const sun = document.querySelector(".sun");

moon.addEventListener("click",()=>{
  sun.classList.toggle("hide");
  scene.classList.toggle("yellow");
  gsap.to(".text3",{duration : 2, y : "10%", ease : "power2.in"});
  gsap.to(".last",{duration : 2, bottom : "-20%", ease : "power2.in"});
  gsap.to(".forest",{duration : 2, bottom : "-50%", ease : "power2.in"});
  gsap.to(".text3",{duration : .2 , opacity: 1, ease : "power2.in"});
  gsap.to(".text2",{duration : 2, y : "-600%", ease : "power2.in"});
})
sun.addEventListener("click",()=>{
  moon.classList.toggle("hide");
  sun.classList.remove("hide");
  scene.classList.toggle("yellow");
  gsap.to(".last",{duration : 2, bottom : "-70%", ease : "power2.in"});
  gsap.to(".forest",{duration : 2, bottom : "0%", ease : "power2.in"});
  gsap.to(".text3",{duration : 2, y : "-600%", ease : "power2.in"});
  gsap.to(".text2",{duration : 2, y : "10%", ease : "power2.in"});

})