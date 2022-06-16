//Function for Analog Clock

let arm=document.querySelector('#hand');
let rst=document.querySelector("#reset");
let startingTime=15;
arm.classList.add('anim');
arm.style.animationDuration=startingTime+'s';

function rotor(){
    arm.classList.remove('anim');
    void arm.offsetWidth;
    arm.classList.add('anim');
}

rst.addEventListener('click', rotor)

