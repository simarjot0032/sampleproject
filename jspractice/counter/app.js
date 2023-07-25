let increse=document.querySelector('.increase');
let decrease=document.querySelector('.decrease');
let count=document.querySelector('.count');
let reset=document.querySelector('.reset');
count.innerHTML='0';
// count=0;
let counter=0;
function increment(){
    
    counter++;
    count.innerHTML=counter;
}
function decrement(){
   
    
        counter--;
        if(counter<0){
            counter=0;
        }
        count.innerHTML=counter;
    
}
function resett(){
    counter=0;
    count.innerHTML=counter;
}
increse.addEventListener('click',increment);
decrease.addEventListener('click',decrement);
reset.addEventListener('click',resett)

