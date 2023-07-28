//variables
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
    mill=mill+10;
    if(mill===1000){
        mill=0;
        seconds++;
    // seconds++;
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
    if(mill<100){
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
  anyt= window.setInterval(stopwatch,10);
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

let lap=1;
let li;
document.querySelector('#lap').addEventListener('click',function(){
    let i=lap++;
    li=document.createElement('li');
    li.classList.add('list');
    if(i<10){
        li.innerHTML="0"+i+` lap<p=div class="space">`+times+`</div>`;
    }else{
        li.innerHTML=i+`  lap <div class="space">`+times+`</div>`;
       
        
    }
    document.querySelector('.ul').append(li);
    
    
});
document.querySelector('#broom').addEventListener('click',function(){
    let li_=document.querySelector('.ul');
    //    let a= Array.from(li);
    // for(let i=0;i<=li.length;i++){
        
        //    li_.remove(li);
        // let aa=li_.parentElement.children;
        // for(let i=0;i<=aa.length;i++){
            // aa.removeChild(aa);
            // }
            li_.innerHTML='';
            lap--;
            
            
        });
        // document.querySelectorAll('.cross').addEventListener('click',function(){
            //     for(let i=0;i<=lap;i++){
                //         document.querySelectorAll('.list')[i].innerHTML='';
                
                
                //     }
                // });
                // for(let i=0;i<=document.querySelectorAll('.cross');i++){
                    // console.log(i);
                    // document.querySelector('.cross').addEventListener('click',function(){
                        //     for(let i=0;i<document.querySelectorAll('.list');i++){
                            //     li[i]=li[i].innerHTML='';}
                            // })
                            // }
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
    let li_=document.querySelector('.ul');
    li_.innerHTML='';
    lap=1;

});