"use strict";
const numberOfImages = 3;
let startingTime = 10;
let time = startingTime;
let indexNav = 0;
let indexImg = 0;
const start = document.getElementById("start");
const userInput = document.getElementById("entertime");
const timer = document.getElementById("countdownTimer");
const carouselNavDot = document.querySelectorAll(".carousel-nav-dot");
const carouselImage = document.querySelectorAll(".carousel-image");
const rstCarousel = document.getElementById("carousel-reset-button");
const rstDigital = document.getElementById("digital-reset");
const arm = document.getElementById("hand");
const rstAnalog = document.getElementById("analog-reset");
let timerId = setInterval(updateTimer, 1000);
if (arm)
    arm.classList.add("rotateHand");
if (timer)
    timer.textContent = `${time}`;
if (start)
    start.addEventListener("click", startFunc);
if (rstAnalog)
    rstAnalog.addEventListener("click", resetFunc);
if (rstCarousel)
    rstCarousel.addEventListener("click", resetFunc);
if (rstDigital)
    rstDigital.addEventListener("click", resetFunc);
function updateTimer() {
    if (time <= 1) {
        time = startingTime;
        if (timer)
            timer.textContent = `${time}`;
        carouselNavDotAnimation();
        carouselImageAnimation();
    }
    else {
        time--;
        if (timer)
            timer.textContent = `${time}`;
    }
}
function rotateClock() {
    if (arm && userInput) {
        arm.style.animationDuration = userInput.value.concat("s");
        arm.classList.remove("rotateHand");
        void arm.offsetWidth;
        arm.classList.add("rotateHand");
    }
}
function startFunc() {
    if (userInput) {
        if (userInput.value === "") {
            startingTime = 10;
        }
        else {
            startingTime = parseInt(userInput.value);
            carouselImage.forEach((carouselImageObject) => {
                carouselImageObject.classList.remove("current");
                carouselImageObject.classList.remove("next");
                carouselImageObject.style.animationDuration = userInput.value.concat("s");
            });
        }
    }
    resetFunc();
    if (userInput)
        userInput.value = "";
}
function carouselNavDotAnimation() {
    carouselNavDot[indexNav].classList.remove("selected");
    indexNav++;
    if (indexNav === numberOfImages) {
        indexNav = 0;
    }
    carouselNavDot[indexNav].classList.add("selected");
}
function carouselImageAnimation() {
    carouselImage[indexImg].classList.remove("current");
    if (indexImg == numberOfImages - 1) {
        carouselImage[0].classList.remove("next");
    }
    else {
        carouselImage[indexImg + 1].classList.remove("next");
    }
    indexImg++;
    if (indexImg === numberOfImages) {
        indexImg = 0;
    }
    carouselImage[indexImg].classList.add("current");
    if (indexImg === numberOfImages - 1) {
        carouselImage[0].classList.add("next");
    }
    else {
        carouselImage[indexImg + 1].classList.add("next");
    }
}
function resetFunc() {
    clearInterval(timerId);
    time = startingTime;
    if (timer)
        timer.textContent = `${time}`;
    rotateClock();
    timerId = setInterval(updateTimer, 1000);
    carouselNavDot.forEach((carouselNavDotObject) => {
        carouselNavDotObject.classList.remove("selected");
    });
    carouselNavDot[0].classList.add("selected");
    indexNav = 0;
    let carouseImageObject;
    carouselImage.forEach((carouselImageObject) => {
        carouselImageObject.classList.remove("current");
        carouselImageObject.classList.remove("next");
        void carouselImageObject.offsetWidth;
    });
    carouselImage[0].classList.add("current");
    carouselImage[1].classList.add("next");
    indexImg = 0;
}
