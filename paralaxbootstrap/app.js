const last = document.querySelector("#last");
const title = document.querySelector(".title");

window.addEventListener("scroll", function () {
    let value = this.window.pageYOffset;
    last.style.top = value * 0.1 + "px";
    title.style.top = value * 1.5 + "px";
});
