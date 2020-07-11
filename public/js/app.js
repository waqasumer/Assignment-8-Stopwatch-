var min = 0;
var sec = 0;
var msec = 0;

var getMin = document.getElementById("min");
var getSec = document.getElementById("sec");
var getmsec = document.getElementById("msec");
var interval;
var count = 0;


function timer() {
    msec++
    getmsec.innerHTML = msec;

    if (msec >= 100) {
        sec++;
        if (sec <= 9) {
            getSec.innerHTML = "0" + sec;
        } else {
            getSec.innerHTML = sec;
        }
        msec = 0;

    } else if (sec >= 60) {
        min++;

        if (min <= 9) {
            getMin.innerHTML = "0" + min;
        } else {
            getMin.innerHTML = min;
        }
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);

    var btn = document.getElementById("start");
    btn.disabled = true;
}

function stop() {
    clearInterval(interval);

    var btn = document.getElementById("start");
    btn.disabled = false;
}

function reset() {
    min = "00";
    sec = "00";
    msec = "00";

    getMin.innerHTML = min;
    getSec.innerHTML = sec;
    getmsec.innerHTML = msec;

    clearInterval(interval);


    var btn = document.getElementById("start");
    btn.disabled = false;

}

function lapTimer() {
    var Laps = document.getElementById('getlaps');
    count += 1;
    var replace = count;
    var add = "0" + count;

    if (count >= 10) {
        count += 1;
        Laps.innerHTML += "<div>" + "<b>" + replace + ")" + "</b>" + " " + getMin.innerHTML + ":" + getSec.innerHTML + ":" + getmsec.innerHTML + "</div>";

    } else {
        Laps.innerHTML += "<div>" + "<b>" + add + ")" + "</b>" + " " + getMin.innerHTML + ":" + getSec.innerHTML + ":" + getmsec.innerHTML + "</div>";

    }
}

function clearLaps() {
    var Laps = document.getElementById('getlaps');
    Laps.innerHTML = "";
    count = 0

}