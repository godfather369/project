let userInput = document.getElementById("entertime");
let startingTime = 10;
let time = startingTime;
let rstDigital = document.querySelector(".reset");
const timer = document.getElementById("countdownTimer");

let arm = document.querySelector("#hand");
let rstAnalog = document.querySelector("#reset");
arm.classList.add("anim");

let rstCarousel = document.querySelector("#reset_");
let item=document.querySelectorAll(".item");
let j=0;
let button=document.querySelectorAll(".button");
let i=0;

timer.textContent = `${time}`;

let timerId= setInterval(updateTimer, 1000);

start.addEventListener("click", startFunc );
rstAnalog.addEventListener("click", resetFunc)
rstCarousel.addEventListener("click", resetFunc);
rstDigital.addEventListener("click", resetFunc);

function updateTimer() {
  if (parseInt(time) <= 1) {
    time = startingTime;
    timer.textContent = `${time}`;
    buttonAnimation();
    imageAnimation();
  } else {
    time--;
    timer.textContent = `${time}`;
  }
}

function rotateClock() {
  arm.style.animationDuration = userInput.value.concat('s');
  arm.classList.remove("anim");
  void arm.offsetWidth;
  arm.classList.add("anim");
}

function startFunc() {
  if(userInput.value===""){
    startingTime=10;
  }else{
    startingTime=parseInt(userInput.value);
    item.forEach(itm => {
      itm.classList.remove("current");
      itm.classList.remove("next");
      itm.style.animationDuration=userInput.value.concat('s');
    });
  }
  resetFunc();
  userInput.value = "";
}

function buttonAnimation(){
  button[i].classList.remove("selected");
  i++;
  if(i===3){
    i=0;
  }
  button[i].classList.add("selected");
}

function imageAnimation(){
  item[j].classList.remove("current");
  if(j==2){
    item[0].classList.remove("next");
  }
  else{
    item[j+1].classList.remove("next");
  }
  
  j++;
  if(j===3){
    j=0;
  }
  
  item[j].classList.add("current");
  if(j===2){
    item[0].classList.add("next");
  }
  else{
    item[j+1].classList.add("next");
  }
}

function resetFunc() {
  clearInterval(timerId);
  time = startingTime;
  timer.textContent = time;
  rotateClock();
  timerId = setInterval(updateTimer, 1000);
  button.forEach(btn => {
    btn.classList.remove("selected");
  });
  button[0].classList.add("selected");
  i=0;
  item.forEach(itm => {
    itm.classList.remove("current");
    itm.classList.remove("next");
  });
  item[0].classList.add("current");
  item[1].classList.add("next");
  j=0;
}
