let date = new Date("Dec 31 2022 23:59").getTime();

let counter = document.getElementById("count");

let counterMonth = document.getElementById("month");
let counterDayes = document.getElementById("dayes");
let counterHoures = document.getElementById("houres");
let counterMinutes = document.getElementById("minutes");
let counterSecondes = document.getElementById("seconds");
let counterTime = setInterval(() => {
    let datNow = new Date().getTime();

    let actulyTime = date - datNow;



    counterMonth.innerHTML = Math.trunc(actulyTime / (1000 * 60 * 60 * 24 * 30)) +" <br>monthes"
    counterDayes.innerHTML = Math.trunc(actulyTime % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24))+" <br>Dayes"
    counterHoures.innerHTML = Math.trunc(actulyTime % (1000 * 60 * 60 * 24 * 30) %(1000 * 60 * 60 * 24) / (1000 * 60 * 60))+" <br>hours"
    counterMinutes.innerHTML = Math.trunc(actulyTime % (1000 * 60 * 60 * 24 * 30) %(1000 * 60 * 60 * 24)% (1000 * 60 * 60) / (1000 * 60))+" <br>Minutes"
    counterSecondes.innerHTML = Math.trunc(actulyTime % (1000 * 60 * 60 * 24 * 30) %(1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000)+" <br>Secondes"

}, 1000);