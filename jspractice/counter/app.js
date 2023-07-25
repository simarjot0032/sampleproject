let increse=document.querySelector('.increase');
let decrease=document.querySelector('.decrease');
let count=document.querySelector('.count');
let reset=document.querySelector('.reset');
count.innerHTML='0';
 let audio = new Audio('mixkit-gate-latch-click-1924.wav');


let counter=0;
let sound=document.querySelector('.sound');
function mute(){
if(sound.classList.contains('sound')){
    sound.classList.remove('sound');
    audio=new Audio();
    document.getElementById('b').innerHTML='<i class="fa-solid fa-volume-xmark fa-2x" style="color: #ffffff;"></i>';
}
else{
    sound.classList.add('sound');
    document.getElementById('b').innerHTML='<i class="fa-solid fa-volume-high fa-2x" style="color: #ffffff;" ></i>';
    audio = new Audio('mixkit-gate-latch-click-1924.wav');
}}
function increment(){
    counter++;
    count.innerHTML=counter;
    navigator.vibrate(200);
    audio.play();
}
function decrement(){
   
    audio.play();
        counter--;
        if(counter<0){
            counter=0;
        }
        count.innerHTML=counter;
        navigator.vibrate(200);
    
}
function resett(){
    counter=0;
    count.innerHTML=counter;
    navigator.vibrate(200);
    audio.play();

}

increse.addEventListener('click',increment);
decrease.addEventListener('click',decrement);
reset.addEventListener('click',resett);
sound.addEventListener('click',mute);