let background=document.body;
let colors=['red','green','dodgerblue','cornflowerblue','coral','orange','yellow','white','purple'];
let random;
document.querySelector('.click').addEventListener('click',function(){
 random=Math.floor(Math.random()*colors.length);
    background.style.background=colors[random];
    document.querySelector('.backh').innerHTML='BACKGROUND  COLOR : '+colors[random].toUpperCase();
});