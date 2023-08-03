let button=document.querySelectorAll('.plus');
let answer=document.querySelectorAll('.answer');
let tar;
let targ;
for(let i=0;i<button.length;i++){
button[i].addEventListener('click',function(e){
    // e.target
     tar=e.target.parentElement.parentElement.parentElement.classList.toggle('hidetext');
     targ=e.target.parentElement.parentElement.parentElement;
     
        
     
    if(targ.classList.contains('hidetext')){
        answer[i].style.display='block';
    }
    else{
        answer[i].style.display='none';
    }
    button[i].classList.toggle('fa-xmark');
   
})}