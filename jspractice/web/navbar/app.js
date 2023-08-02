let logos=document.querySelector('.logos');
let menu=document.querySelector('#menu-btn');
let ul=document.querySelector('.ul');
menu.addEventListener('click',function(){
    ul.classList.toggle('active');
    if(ul.classList.contains('active')){
    menu.style.transform='rotate(90deg)';
    menu.style.transition='all 0.2s linear';
    }
    else{
    menu.style.transform='';
    }
})