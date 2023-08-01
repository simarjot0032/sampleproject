let increase=document.querySelector('.i');
let reset=document.querySelector('.r');
let decrease=document.querySelector('.d');
let number=document.querySelector('.number');
let count=0;
increase.addEventListener('click',function(){
    count++;
    number.innerHTML=count;
    if(count===0){
        number.style.color='black';
    
    }
    if(count>0){
        number.style.color='green';
    
    }
    if(count<0){
        number.style.color='red';
    
    }
    navigator.vibrate(100);
});
reset.addEventListener('click',function(){
    count=0;
    number.innerHTML=count;
    if(count===0){
        number.style.color='black';
    
    }
    if(count>0){
        number.style.color='green';
    
    }
    if(count<0){
        number.style.color='red';
    
    }
    navigator.vibrate(100);



});
decrease.addEventListener('click',function(){
    count--;
    number.innerHTML=count;

if(count===0){
    number.style.color='black';

}
if(count>0){
    number.style.color='green';

}
if(count<0){
    number.style.color='red';

}

    navigator.vibrate(100);

});