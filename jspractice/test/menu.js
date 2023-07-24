let show=document.querySelector('.click');
let reveal=document.querySelector('.reveal');
function reveall(){
if(reveal.classList.contains('reveal')){
    reveal.classList.remove('reveal');
}
else{
    reveal.classList.add('reveal');
}}
show.addEventListener('click',reveall)
// let show=document.querySelector('.click');
// let reveal=document.querySelector('.reveal');
// reveal.classList.remove('reveal');
// function reveall(){
// if(reveal.classList.contains('reveal')){
//     reveal.classList.remove('reveal');
//     reveal.style.display='none';

// }
// else{
//     reveal.classList.add('reveal');
//     reveal.style.display='block'
// }}
// show.addEventListener('click',reveall)