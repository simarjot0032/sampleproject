let menu=document.querySelector('.nav2');
let menuicon=document.querySelector('.menu');
menuicon.addEventListener('click',function(){
    menu.classList.toggle('show');
});

    
let cross=document.querySelector('.fa-xmark');
cross.addEventListener('click',function(){
    menu.classList.remove('show');
});