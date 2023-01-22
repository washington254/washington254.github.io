const backVideo = document.querySelector("#backvideo");
const playBtn = document.querySelector("#play");
const sidebar = document.querySelector(".sidebar");

playBtn.addEventListener("click", () => {
    backVideo.style.display = "block";
    if (backVideo.paused){
        backVideo.play();
        playBtn.src = "./images/pause.png";
        sidebar.classList.add("remove");
        sidebar.classList.remove("return");
    }
    else{backVideo.pause();
        playBtn.src = "./images/play.png";
        sidebar.classList.remove("remove");
        sidebar.classList.add("return");

    };
})