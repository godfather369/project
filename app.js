//Function for Analog Clock

let rst2=document.querySelector('#reset2');

const analogClock=rst2.addEventListener('click',()=>{
    const arm=document.querySelector('#hand');
    arm.style.backgroundColor='red';
    arm.style.transform="translateY(5px) translateX(73px) rotate(1turn)"
    arm.style.transition='transform 10s linear'
})