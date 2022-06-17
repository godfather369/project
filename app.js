
let userInput = document.getElementById("entertime");

let startingTime = 10;
let time = startingTime;
let reset = document.querySelector(".reset");
const timer = document.getElementById("countdownTimer");

timer.innerHTML = `${time}`;
let id = setInterval(updateTimer, 1000);
function updateTimer() {
  if (time <= 1) {
    time = startingTime;
    timer.innerHTML = `${time}`;
  } else {
    time--;
    timer.innerHTML = `${time}`;
  }
}

function resetFunc() {
  clearInterval(id);
  time = startingTime;
  timer.innerText = time;
  id = setInterval(updateTimer, 1000);
  rotor();
}

reset.addEventListener("click", () => {
  resetFunc();
});

//Function for Analog Clock Part
let arm = document.querySelector("#hand");
let rst = document.querySelector("#reset");
arm.classList.add("anim");
arm.style.animationDuration = startingTime + "s";
function rotor() {
  arm.style.animationDuration = startingTime + "s";
  arm.classList.remove("anim");
  void arm.offsetWidth;
  arm.classList.add("anim");
}

rst.addEventListener("click", () => {
  resetFunc();
});

start.addEventListener("click", () => {
  startingTime = userInput.value;
  resetFunc();
  userInput.value = "";
});
