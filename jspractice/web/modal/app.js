let close=document.querySelector('.close');
let openb=document.querySelector('.open');
let modal=document.querySelector('.modal');
let hide=document.querySelector('.hide');
openb.addEventListener('click',function(){
    modal.classList.toggle('show');
    hide.classList.toggle('active');
    document.querySelector('.container').style.backgroundColor='rgba(0,0,0,0.4)';
});
close.addEventListener('click',function(){
    modal.classList.toggle('show');
    hide.classList.toggle('active');
    document.querySelector('.container').style.backgroundColor='';

})