// first declare all variables and fetch all the selectors from the DOM
const layer1 = document.querySelector("#layer1");
const text = document.querySelector("#text");
const moon = document.querySelector("#moon");
scroll = window.pageYOffset;

// add a scroll effect by adding the following code

document.addEventListener("scroll", (e) => {
    let offset = window.pageYOffset;
    scroll = offset;
    layer1.style.top = scroll/10 + "%";
    text.style.left = scroll/10 + "%";
    moon.style.top = scroll/2 + "%";
})
