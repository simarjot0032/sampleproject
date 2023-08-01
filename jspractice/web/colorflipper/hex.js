let background=document.body;
let colors=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let new_color;
document.querySelector('.click').addEventListener('click',function(){
    new_color='#'
    for(let i=1;i<7;i++){
        let random=Math.floor(Math.random()*colors.length);
        new_color+=colors[random];
    };
    background.style.background=new_color;
    document.querySelector('.backh').innerHTML='BCKGROUND COLOR : '+new_color;
});