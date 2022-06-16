
const startingTime = 15;

let time = startingTime;

let reset = document.querySelector(".reset");

const timer = document.getElementById("countdownTimer");

let id = setInterval(updateTimer, 1000);

function updateTimer() {
  if (time < 10) {
    time = "0" + time;
  }
  timer.innerHTML = `${time}`;
  time--;
  if (time < 0) {
    time = startingTime;
  }
}

reset.addEventListener("click", () => {
  clearInterval(setInterval);
  time = startingTime;
});

