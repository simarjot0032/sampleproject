let button=document.querySelector('.started');
let computer=document.querySelector('.computero');
let winner=document.querySelector('.winner');
let youoption=document.querySelector('.youo');
let rock=document.querySelector('#rock');
let paper=document.querySelector('#paper');
let sissors=document.querySelector('#sissors');
let r,p,s;
let random;
let closebtn=document.querySelector('.close')
let computeroption=[
    {
        opti:'<i class="fa-solid fa-hand-back-fist fa-5x" id="rock" style="color: burlywood;"></i>',
        choice:'rock'
    },
    {
        opti:'<i class="fa-solid fa-hand fa-5x" id="rock" style="color: burlywood;"></i>',
        choice:'paper'
    },
    {
        opti:'<i class="fa-solid fa-hand-scissors fa-5x" id="rock" style="color: burlywood;"></i>',
        choice:'sissors'
    }
]

rock.addEventListener('click',function(){
    youoption.innerHTML='<i class="fa-solid fa-hand-back-fist fa-5x"  style="color: burlywood;"></i>'
     random=Math.floor(Math.random()*computeroption.length);
     computer.innerHTML=computeroption[random].opti;
    r='rock';
    setTimeout(() => {
        
    
    if(r===computeroption[random].choice){
        console.log('tie');
        winner.classList.toggle('hide');
        document.querySelector('.results').innerHTML='tie'
    }
   else if(computeroption[random].choice==='sissors'){
        winner.classList.toggle('hide');
        document.querySelector('.results').innerHTML='you won'
    }
    else{
        winner.classList.toggle('hide');
        document.querySelector('.results').innerHTML='you loose'
    }
}, 550);
   
})
paper.addEventListener('click',function(){
    youoption.innerHTML='<i class="fa-solid fa-hand fa-5x" style="color: burlywood;"></i>'
    random=Math.floor(Math.random()*computeroption.length);
    p='paper';
    computer.innerHTML=computeroption[random].opti;
   setTimeout(() => {
    
 
        if(p===computeroption[random].choice){
            console.log('tie');
            winner.classList.toggle('hide');
            document.querySelector('.results').innerHTML='tie'
        }
        else if(computeroption[random].choice==='rock'){
            winner.classList.toggle('hide');
            document.querySelector('.results').innerHTML='you won'
        }
        else{
            winner.classList.toggle('hide');
            document.querySelector('.results').innerHTML='you loose'
        }
    }, 500);
  
})
sissors.addEventListener('click',function(){
    youoption.innerHTML='<i class="fa-solid fa-hand-scissors fa-5x"  style="color: burlywood;"></i>'
    random=Math.floor(Math.random()*computeroption.length);
    s='sissors';
    computer.innerHTML=computeroption[random].opti;
    setTimeout(() => {
    if(s===computeroption[random].choice){
        console.log('tie');
        winner.classList.toggle('hide');
        document.querySelector('.results').innerHTML='tie'

    }   
     else if(computeroption[random].choice==='paper'){
        winner.classList.toggle('hide');
        document.querySelector('.results').innerHTML='you won'
    }
    else{
        winner.classList.toggle('hide');
        document.querySelector('.results').innerHTML='you loose'
    }
}, 500);
})








button.addEventListener('click',function(){
    document.querySelector('.box').classList.toggle('show')
    button.classList.toggle('hide');
})

closebtn.addEventListener('click',function() {
    winner.classList.toggle('hide');
})