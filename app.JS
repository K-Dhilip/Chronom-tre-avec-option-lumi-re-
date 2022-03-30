let b1 = document.getElementById("start");
let b2 = document.getElementById("lap");
let b3 = document.getElementById("reset");
let p1 = document.getElementById("display");
let p2 = document.getElementById("temps");

// let dec = sec = min = heu = 0 ;

let dec = 0;
let sec = 0;
let min = 0;
let heu = 0;
let intervalId = null;

p1.textContent = heu + " : " + min + " :" + sec + " . " + dec;

b1.addEventListener("click", timer);
b2.addEventListener("click", lapTime);
b3.addEventListener("click", pause);

function timer() {
  if (intervalId == null) {
    // le chrono est arrêté
    intervalId = setInterval(function () {
      p1.textContent = heu + " : " + min + " : " + sec + " . " + dec;
      p1.textContent = heu + " : " + min + " : " + sec + " . " + dec;
      dec += 1;
      // (dec >= 10) ? dec = 0 : sec++
      if (dec >= 10) {
        dec = 0;
        sec += 1;
      }
      if (sec >= 60) {
        sec = 0;
        min += 1;
      }
      if (min >= 60) {
        min = 0;
        heu += 1;
      }
    }, 100);
    b1.innerHTML = "STOP";
  } else {
    clearInterval(intervalId);
    intervalId = null;
    b1.innerHTML = "START";
  }
}

function pause() {
  clearInterval(intervalId);
  intervalId = null;
  dec = sec = min = heu = 0;
  p1.textContent = heu + " : " + min + " : " + sec + " . " + dec;
  b1.innerHTML = "START";
  p2.innerHTML = "";
}
function lapTime() {
  p2.style.color = "white";
  p2.innerHTML += heu + " : " + min + " : " + sec + " . " + dec + "<br>";
}

//light

let b4 = document.getElementById("light");
b4.addEventListener("click", lightEffect);

function lightEffect() {
  if (p1.style.background == "grey") {
    p1.style.background = "lightgreen";
  } else {
    p1.style.background = "grey";
  }
}
