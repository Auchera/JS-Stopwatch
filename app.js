const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const second = document.getElementById("sec");
const msecond = document.getElementById("ms");

let stopwatch;

start.addEventListener("click", function () {
  let kronometre = 0;
  stopwatch = setInterval(() => {
    const minutes = Math.floor(kronometre / 60);
    const seconds = kronometre % 60;

    const strMinute = String(minutes).padStart(2, "0");
    const strSecond = String(seconds).padStart(2, "0");

    second.textContent = `${strMinute}:${strSecond}`;

    kronometre ++; 
  }, 1000);
});

pause.addEventListener("click", function () {
  clearInterval(stopwatch);
});

reset.addEventListener("click", function () {
  clearInterval(stopwatch);
  second.textContent = "00:00";
});

window.onload = function () {
  second.textContent = "00:00";
};
