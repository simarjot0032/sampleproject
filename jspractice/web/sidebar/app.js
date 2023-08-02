let cross=document.querySelector('.cross-btn');
let menu=document.querySelector('.menuicon');
let aside=document.querySelector('.aside');
menu.addEventListener('click', function(){
    if(aside.classList.contains('show')){
        aside.classList.remove('show');
    }
    else{
        aside.classList.add('show');
    }
});
cross.addEventListener('click',function(){
    aside.classList.remove('show');
})