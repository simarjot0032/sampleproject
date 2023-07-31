



let input=document.querySelector('.inelement');
let new_element;
let ul=document.querySelector('.ul_in_todo');;
let add_btn=document.querySelector('.addbtn');
let i=document.createElement('p');
i.classList.add('numberto');
let number=0;
i.innerHTML=number;
let tasks;
let countoftask=document.querySelector('.yourtask')
let edit;



document.querySelector('#menu').addEventListener('click',function(){
    if(document.querySelector('.sidebar').classList.contains('hide')){

        document.querySelector('.sidebar').classList.toggle('hide');
        // document.querySelector('.menu').style.borderRight='1px solid white';
    }
    else{
        document.querySelector('.sidebar').classList.add('hide');
        document.querySelector('.menu').style.borderRight='0';
    }
  
});
document.querySelector('.back').addEventListener('click',function(){
    document.querySelector('.button').classList.toggle('active');
    document.body.classList.toggle('light');
    document.querySelector('.down').style.borderColor='white';

    if(document.querySelector('.button').classList.contains('active')){
    document.querySelector('#menu').style.color='#2C273D';
}
else{
    document.querySelector('#menu').style.color='white';

}
if(document.querySelector('.button').classList.contains('active')){
    let icons=document.querySelectorAll('.iconf');
    for(let i=0;i<icons.length;i++){
        icons[i].style.color='#2C273D';
    }}
    else{
        icons=document.querySelectorAll('.iconf');
    for(let i=0;i<icons.length;i++){
        icons[i].style.color='white';
    
    }}
    // document.querySelector('.icon-2').classList.toggle('.icon-2light');
    if(document.querySelector('#ic').classList.contains('icon-2')){
        document.querySelector('#ic').classList.add('icon-2light');

    document.querySelector('#ic').classList.remove('icon-2');

    }
    else{
    document.querySelector('#ic').classList.add('icon-2');
    document.querySelector('#ic').classList.remove('icon-2light');

    }

});
document.querySelector('#menu').addEventListener('click',function(){
    // document.querySelector('.aside').classList.add('hide-aside');
    if(document.querySelector('#aside-').classList.contains('hide-aside')){
document.querySelector('.aside').classList.remove('hide-aside')
        document.querySelector('.aside').style.width='201px';
    }
    else{
        document.querySelector('.aside').classList.add('hide-aside');
        document.querySelector('.aside').style.width='0px';
    }
})

add_btn.addEventListener('click',function(){
    // number=1;
// number++;

    if(input.value===''){
        countoftask.innerHTML='Please Enter Something to Add Task';
        countoftask.style.color='red';
    }
    else{
    new_element=document.createElement('div');
    new_element.classList.add('li');
    i.innerHTML=number;
    
    
    tasks=document.createElement('input');
    tasks.setAttribute('type','text');
    tasks.setAttribute('readonly','Enable','value',input.value);
    tasks.setAttribute('value',input.value);
    

    
    tasks.classList.add('taskss');
    tasks.style.borderBottom='1px solid dodgerblue';
    // tasks.style.width='78vw'
    tasks.innerHTML=input.value;

    new_element.innerHTML='<div>'+'<i class="fa-solid fa-arrow-right fa-lg" style="color: dodgerblue"></i>'+'</div>';
    // document.querySelector('.edit').style.display='contents';
    number++;
    ul=document.querySelector('.ul_in_todo');
    ul.append(new_element);
    new_element.append(tasks);
   input.innerHTML="";
   edit=document.createElement('div');
   edit.classList.add('edit');
   edit.innerHTML=`
   <button class='editandd'>
   <i class="fa-solid fa-pen-to-square fa-2x editb" id="editbtn" style="color: #1e90ff;"></i></button><button class='save'>SAVE</button><button class='editandd'><i class="fa-solid fa-trash fa-2x edit2" id="edit2" style="color: #f10909;"></i></button`
   new_element.append(edit);




//    let editbtninlist=document.querySelectorAll('#edit2');
//    for(let j=0;j<=document.querySelectorAll('#edit2');i++){
// editbtninlist.addEventListener('click',function(){
//     // let target=e.target;
//     // console.log(target.parentElement.parentElement.parentElement.parentElement);
//     // target.parentElement.parentElement.parentElement.remove();
//     for(let i=0;i<=editbtninlist.length;i++){
//         new_element[i].remove();
//     }

// });}

// let dbtninlist=document.querySelectorAll('#editbtn');
// dbtninlist.addEventListener('click',function(e){
//     // e.target.parentElement.parentElement.parentElement.setAttribute('readonly','Disable')
//     for(let i=0;i<=dbtninlist.length;i++){
        
//     }
    
// })

let editb=document.querySelectorAll('#editbtn');
for(let i=0;i<editb.length;i++){
   editb[i].addEventListener('click',function(e){
console.log(e.target.parentElement.parentElement.parentElement);
    // console.log(  document.querySelectorAll('.taskss')[i]);
    //    document.querySelector('.taskss')[i].focus();
       document.querySelectorAll('.taskss')[i].removeAttribute('readonly','Disable');
       document.querySelectorAll('.taskss')[i].setAttribute('type','text');
       document.querySelectorAll('.taskss')[i].style.outline='1px solid linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';
       e.target.style.display='none'
       document.querySelectorAll('.save')[i].style.display='inline';
   })
};


for(let i=0;i<document.querySelectorAll('.save');i++)
{
    document.querySelectorAll('.save')[i].addEventListener('click',function(e){
       let newinput=document.querySelector('.taskss').value;
       document.querySelectorAll('.taskss')[i].style.outline='0';
       document.querySelectorAll('.taskss')[i].value=newinput;
       console.log(e.target);
       e.target.style.display='none';
      editb[i].style.display='inline';


        
    })
};
// let editb=document.querySelectorAll('#editbtn');

for(let i=0;i<document.querySelectorAll('.save').length;i++)
{
    document.querySelectorAll('.save')[i].addEventListener('click',function(e){
       let newinput=document.querySelector('.taskss').value;
       document.querySelectorAll('.taskss')[i].style.outline='0';
       document.querySelectorAll('.taskss')[i].value=newinput;
       console.log(e.target);
       e.target.style.display='none';
      editb[i].style.display='inline';
      tasks.setAttribute('readonly','Enable');

        
    })
};


   countoftask.innerHTML='Your Pending Task->'+ul.childElementCount;
   countoftask.style.color="rgba(128, 128, 128, 0.842)";
    }
    let dbutton=document.querySelectorAll('#edit2');
for(let i=0;i<dbutton.length;i++){
dbutton[i].addEventListener('click',function(e){
    e.target.parentElement.parentElement.parentElement.remove();
    countoftask.innerHTML='Your Pending Task->'+ul.childElementCount;
   
})}
});
// let remove=document.querySelector('.clear');
// function clear(){
//    ul.innerHTML="";
//    number=1;
// }
// remove.addEventListener('click',clear);
// document.querySelector('.yourtask').innerHTML='Your task ->'+ ul.childrenElementcount;

let reomve=document.querySelector('.clear');
function cleartaskitem(){
    ul.innerHTML='';
    document.querySelector('.inelement').value='';
    number=0;
    countoftask.innerHTML='Your Pending Task->'+0;
}
reomve.addEventListener('click',cleartaskitem);


// let editsbtn;
// let edit2b=document.getElementsByClassName('.edit2');
