const time=document.getElementById("current-time");
const secondHand = document.querySelector("#sc");
const minuteHand = document.getElementById("mn");
const hourHand = document.getElementById("hr");
setInterval(() =>{
    let d =new Date();
    second = d.getSeconds() * 6;
    minute = d.getMinutes() * 6;
    hour = d.getHours() * 30 + Math.round(minute / 12);
    time.innerHTML = d.toLocaleTimeString();

    secondHand.style.transform = "rotate(" + second + "deg)";
    minuteHand.style.transform = "rotate(" + minute + "deg)";
    hourHand.style.transform = "rotate(" + hour + "deg)";
},1000

)