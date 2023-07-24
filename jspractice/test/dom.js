//get elemnet by id
let getid=document.getElementById('main-container');
console.log(getid);

//get element by class
let getclass=document.getElementsByClassName('fav')
console.log(getclass);

//get element by tag name
let gettag=document.getElementsByTagName('h1');
console.log(gettag);

//query selector
let getqu=document.querySelector('.box');
console.log(getqu);

// query selector all in html
let getquall=document.querySelectorAll('div');
console.log(getquall);


// styling an element
let headings=document.getElementsByClassName('heading')[0];
console.log(headings);
// headings.style.color = 'red';
headings.style.color='red';
console.log(headings);

let divs=document.getElementsByClassName('box');
console.log(divs);
for(let i=0;i<divs.length;i++){
divs[i].style.borderRadius='20px';
divs[i].style.fontSize='40px';
}
// console.log(divs);
let another_div=document.createElement('div');
another_div.className='box';
let target=document.getElementsByClassName('div-hollywood')[0];
another_div.innerHTML='Fast and Furious';
console.log(target);
// another_div.append(target);
target.append(another_div);
another_div.classList.add('extra');

//borderradius
divs=document.getElementsByClassName('box');
console.log(divs);
for(let i=0;i<divs.length;i++){
divs[i].style.borderRadius='20px';
divs[i].style.fontSize='40px';
}

// for(let i=0;i<document.getElementsByClassName('box').length;i++){
//     document.getElementsByClassName('box')[i].style.borderRadius='20px';}



//parent node
divs=document.getElementsByClassName('box');

console.log(target.parentElement);
console.log(target.parentElement.parentNode);
console.log(target.parentNode);
console.log(target.parentElement);



let childn=document.querySelector('.div-hollywood');
console.log(childn);
console.log(childn.children);
console.log(childn.childNodes);
console.log(childn.firstChild);
console.log(childn.lastChild);
console.log(childn.firstElementChild);
console.log(childn.lastElementChild);



box=document.getElementsByClassName('box');
console.log(box);
for(let i=0;i<box.length;i++){
    console.log(box[i]);
}
console.log(childn.nextElementSibling);
console.log(childn.previousElementSibling);

let expty=document.querySelector('.expty');
console.log(expty);
console.log(expty.childNodes);
console.log(expty.children);


let main_heading=document.querySelector('#heading-main');
console.log(main_heading);
main_heading.style.textAlign='center';

let new_box=document.querySelectorAll(".box");
for(let iterator=0;iterator<new_box.length;iterator++){
new_box[iterator].style.width='80vw';
new_box[iterator].style.maxWidth='50rem';
}


// document.body.style.background='black';
// if(confirm('go back to color?')){
//     setTimeout(()=>document.body.style.background='',100);
// }

let count=document.getElementsByClassName('bo')[0];
let element=document.createElement('p');
console.log(element);
function counting(){
    // element.innerHTML='';
    for(let i=0;i<=100;i++){

        // alert(i);
        // element.innerHTML=j++,'<br>';
        // console.log(i,j);
        element.innerHTML+=i+'<br>'
    }
}
counting();
count.append(element);

let show=document.querySelector('.show');
let content=document.querySelector('.content');
function hover(){
    if (content.classList.contains('show')){
        content.classList.remove('show');
    }
    else{
        content.classList.add('show');
    }
}
show.addEventListener('click',hover)