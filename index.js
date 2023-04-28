let minutesEl = document.getElementById("minutes");
let startBtnEl = document.getElementById("startBtn");
let stopBtnEl = document.getElementById("stopBtn");
let secondsEl = document.getElementById("seconds");

let startCount;
let minCount = 0;
let setCount = 0;
startBtnEl.onclick = function () {
  startCount = setInterval(function () {
    setCount += 1;
    if (setCount < 10) {
      secondsEl.textContent = "0" + setCount;
    } else {
      secondsEl.textContent = setCount;
    }
    if (setCount === 60) {
      setCount = 0;
      minCount += 1;
      minutesEl.textContent = minCount;
    }
  }, 1000);
};
stopBtnEl.onclick = function () {
  clearInterval(startCount);
};
