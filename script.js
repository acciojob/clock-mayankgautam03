//your JS code here. If required.
let clock = document.getElementById("timer");

function exacttime() {
    let currentdate = new Date();

    let timeString = currentdate.toLocaleTimeString();

    // clock.innerHTML = currentdate;
    clock.innerHTML = timeString;
}

setInterval(exacttime, 1000);