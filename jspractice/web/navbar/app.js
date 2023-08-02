let logos=document.querySelector('.logos');
let menu=document.querySelector('#menu-btn');
let ul=document.querySelector('.ul');
menu.addEventListener('click',function(){
    ul.classList.toggle('active');
    if(ul.classList.contains('active')){
    menu.style.transform='rotate(90deg)';
    menu.style.transition='all 0.2s linear';
    // document.querySelector('.navbar').style.transition='all 0.4s linear'

    // ul.style.transition='all 0.2s linear';
    
    }
    else{
    menu.style.transform='';
    // ul.style.transition='';
   
    // document.querySelector('.navbar').style.transition=''

    }
})