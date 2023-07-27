let mill=0
let seconds=0;
let min=0;
let leadingmill=0;
let hour=0;
let leadingseconds=0;
let leadingminutes=0;
let leadinghours=0;
let times;
function stopwatch(){
    mill++;
    if(mill===99){
        mill=0;
        seconds++;
    
    if(seconds===60){
        seconds=0;
        min++;
    
    if(min===60){
        min=0;
        hour++;
        
    }}}
    // if(seconds<=9){
    //     // let ls='0';
    //     // seconds=ls+seconds;
    //     document.querySelector('.time').innerText=hour+':'+min+':'+"0"+seconds+':'+mill;
    // }
    // else{
    // document.querySelector('.time').innerText=hour+':'+min+':'+seconds+':'+mill;
    // }
    // if(min<=9){
    //     // let ls='0';
    //     // seconds=ls+seconds;
    //     document.querySelector('.time').innerText=hour+':'+"0"+min+':'+seconds+':'+mill;
    // }else{
    // document.querySelector('.time').innerText=hour+':'+min+':'+seconds+':'+mill;
    // }
    // if(hour<=9){
    //     // let ls='0';
    //     // seconds=ls+seconds;
    //     document.querySelector('.time').innerText=hour+':'+min+':'+seconds+':'+mill;
    // }else{
    // document.querySelector('.time').innerText=hour+':'+min+':'+seconds+':'+mill;
    // }
    if(mill<10){
        leadingmill="0"+mill.toString();
    }
    else{
        leadingmill=mill;
    }
    if(seconds<10){
        leadingseconds="0"+seconds.toString();
    }
    else{
        leadingseconds=seconds;
    }
    if(min<10){
        leadingminutes="0"+min;
    }
    else{
        leadingminutes=min;
    }
    if(hour<10){
        leadinghours="0"+hour.toString();
    }
    else{
        leadinghours=hour;
    }
    times=document.querySelector('.time').innerText=leadinghours+":"+leadingminutes+":"+leadingseconds+":"+leadingmill;
}
let anyt=null;
let start=document.querySelector('#start');

start.addEventListener('click',function(){
  anyt= window.setInterval(stopwatch,1);
    document.querySelector('#start').style.display='none';



    document.querySelector('#st').style.display='block';
    // document.querySelector('.fa-play').classList.toggle('fa-pause');
});
document.querySelector('#st').addEventListener('click',function(){

   window.clearInterval(anyt);
   if(document.querySelector('#st').classList.contains('fa-pause')){
   document.querySelector('#st').style.display='none';
   document.querySelector('#start').style.display='block';
   }
//    if(document.querySelector('#st').classList.contains('fa-pause')){
    // document.querySelector('#st').classList.remove('fa-pause');
    // document.querySelector('#st').classList.add('fa-play');
//     window.setInterval(stopwatch,1);
//    }
//    if(document.querySelector('#st').classList.)
//    if()
    // document.querySelector('.fa-pause').classList.toggle('fa-play');

});

document.querySelector('#rese').addEventListener('click',function(){
    document.querySelector('#st').style.display='none';
    document.querySelector('#start').style.display='block';
    // document.querySelector('#st').classList.remove('fa-pause');
    // document.querySelector('#start').classList.add('fa-play');

    window.clearInterval(anyt);
    mill=0;
    seconds=0;
    min=0;
    hour=0;
    document.querySelector('.time').innerText="00:00:00:00";

});
let lap=1;
document.querySelector('#lap').addEventListener('click',function(){
    let i=lap++;
    let li=document.createElement('li');
    li.innerHTML=times+`&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   lap`+i;
    document.querySelector('.ul').append(li);

})