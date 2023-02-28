const layer1 = document.querySelector("#layer1");
const layer2 = document.querySelector("#layer2");
const man = document.querySelector("#man");
const moon = document.querySelector("#moon");
const jet = document.querySelector("#jet");
scroll = window.pageYOffset;
jet.style.rotateX = "180deg";

document.addEventListener("scroll", (e) => {
    let offset = window.pageYOffset;
    scroll = offset;
    layer1.style.left = -scroll/20 + "%";
    moon.style.left = -scroll/10 + "%";
    man.style.top = -scroll/5 + "%";
    jet.style.scale = -scroll/2 + "%";
})