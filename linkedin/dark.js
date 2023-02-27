
const dark = document.querySelector(".darkmode");
const text = document.getElementById("dark-text");
const icon = document.getElementById("dark-icon");


dark.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        text.innerHTML = "Dark";
        icon.src = "./images/moon.png" 
    }else{
        text.innerHTML = "Light";
        icon.src = "./images/sun.png" ;
    }

});
