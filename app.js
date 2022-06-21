let userInput = document.getElementById("entertime");
let startingTime = 10;
let time = startingTime;
let rstDigital = document.querySelector(".reset");
const timer = document.getElementById("countdownTimer");

let arm = document.querySelector("#hand");
let rstAnalog = document.querySelector("#reset");
arm.classList.add("anim");

let rstCarousel = document.querySelector("#carousel-reset-button");
let carouselNavDot=document.querySelectorAll(".carousel-nav-dot");
let i=0;
let carouselImage=document.querySelectorAll(".carousel-image");
let j=0;

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
    carouselNavDotAnimation();
    carouselImageAnimation();
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
    carouselImage.forEach(carouselImageObject => {
      carouselImageObject.classList.remove("current");
      carouselImageObject.classList.remove("next");
      carouselImageObject.style.animationDuration=userInput.value.concat('s');
    });
  }
  resetFunc();
  userInput.value = "";
}

function carouselNavDotAnimation(){
  carouselNavDot[i].classList.remove("selected");
  i++;
  if(i===3){
    i=0;
  }
  carouselNavDot[i].classList.add("selected");
}

function carouselImageAnimation(){
  carouselImage[j].classList.remove("current");
  if(j==2){
    carouselImage[0].classList.remove("next");
  }
  else{
    carouselImage[j+1].classList.remove("next");
  }
  
  j++;
  if(j===3){
    j=0;
  }
  
  carouselImage[j].classList.add("current");
  if(j===2){
    carouselImage[0].classList.add("next");
  }
  else{
    carouselImage[j+1].classList.add("next");
  }
}

function resetFunc() {
  clearInterval(timerId);
  time = startingTime;
  timer.textContent = time;
  rotateClock();
  timerId = setInterval(updateTimer, 1000);
  carouselNavDot.forEach(carouselNavDotObject => {
    carouselNavDotObject.classList.remove("selected");
  });
  carouselNavDot[0].classList.add("selected");
  i=0;
  carouselImage.forEach(carouselImageObject => {
    carouselImageObject.classList.remove("current");
    carouselImageObject.classList.remove("next");
  });
  carouselImage[0].classList.add("current");
  carouselImage[1].classList.add("next");
  j=0;
}
