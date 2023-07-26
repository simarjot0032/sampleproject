let clickk=document.querySelector('#wh')
let appear=document.querySelector('.heream');
// if(clickk.className==='where')
let count=0;
clickk.addEventListener('click',function(){
    count++;
    if(count%2===0){
    appear.style.display='';
    document.querySelector('.container').style.backgroundColor='';

}
else{
    appear.style.display='flex';
    // document.body.backgroundColor='rgba(0, 0, 0, 0.212)';
    document.querySelector('.container').style.backgroundColor='rgba(0,0,0,0.2)';
}
    
});
let cross=document.querySelector('.cross');
cross.addEventListener('click',function(){
    appear.style.display='';
    document.querySelector('.container').style.backgroundColor='';

});
window.addEventListener('click',function(e){
    if(e.target===document.querySelector('.container')){
    appear.style.display='';
    document.querySelector('.container').style.backgroundColor='';

    }
});