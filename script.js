const hourEL = document.getElementById("Hour");
const minuteEL = document.getElementById("Minutes");
const secondEL = document.getElementById("Seconds");
const ampmEL = document.getElementById("ampm");

function updateClock (){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "Am"


    if (h>12){
        h = h-12
        ampm = "PM"
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourEL.innerText = h;
    minuteEL.innerText = m;
    secondEL.innerText = s;
    ampmEL, (innerText = ampm);
    setTimeout(()=>{
      updateClock() 
    },1000)

}

updateClock()