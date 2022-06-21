let userInput = document.getElementById("entertime");

let startingTime = 10;
let time = startingTime;
let reset = document.querySelector(".reset");
const timer = document.getElementById("countdownTimer");
//Move all variables on the top with appropriate naming convention 
timer.innerHTML = `${time}`;
//Do not use innerHtml please

let id = setInterval(updateTimer, 1000);

// change Id name 

function updateTimer() {
  if (parseInt(time) <= 1) {
    time = startingTime;
    timer.innerHTML = `${time}`;
    buttonAnimation();
    imageAnimation();
  } else {
    time--;
    timer.innerHTML = `${time}`;
  }
}

function resetFunc() {
  clearInterval(id);
  time = startingTime;
  timer.innerText = time;
  rotor();
  id = setInterval(updateTimer, 1000);
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
  if(userInput.value===""){
    startingTime=10;
  }else{
    startingTime=userInput.value;
    item.forEach(itm => {
      itm.style.animationDuration=startingTime+"s";
    });
  }
  resetFunc();
  userInput.value = "";
});

let rst1 = document.querySelector("#reset_");
rst1.addEventListener("click", resetFunc);

// () => {
//   resetFunc();
// }

let button=document.querySelectorAll(".button");
let i=0;

function buttonAnimation(){
  button[i].classList.remove("selected");
  i++;
  if(i===3){
    i=0;
  }
  button[i].classList.add("selected");
}

let item=document.querySelectorAll(".item");
let j=0;

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
