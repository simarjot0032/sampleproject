console.log("hello world")
let a=5;
console.log(a);

objects
let person={
    name:'john',
    age:'2'
};
let selection='name';
person['selection']='mary'
alert("k");
console.log(person['name']);

// swapping the two variables 
let c1 = 'red';
let c2 = 'blue';
console.log("before swapping a= "+a+" ,b= "+b);
let c;
c=c1;
c1=c2;
c2=c;
console.log("after swapping a= "+a+" ,b= "+ b);

// if else
let hour=20;
if(hour>=6 && hour<12){
    console.log("Good Morning");
}
else if(hour>12 && hour<18){
    console.log("Good Afternoon");
}
else if(hour>=18&&hour<24){
    console.log("Good Evening");
}

// for in
let person={
    name:'john',
    age:2
};
for(let vale in person){
    console.log(vale,person[vale]);
}

// for of 
let person={
        // name:'john',
        // age:2
    };
let person=['john', 2]
    for(let key of person){
        console.log(key);
    }

// exercise on flow control

let number1=2;
let b=5;

function max(a,b) {
    if (a>b) {
      console.log("a is greater");
    }
    else{
        console.log("b is greater");;
    }
}
max(number1,b);

let width=800,height=200 ;
isLans(width,height)
function isLans(width ,height){
    if (width>height) {
        console.log("landscape");
    }
     else {
        console.log("portraite");
    }
}

// exercise 2
function fizzbuzz (input) {
    if (typeof input !=='number' ) {
        console.log(NaN);
    }    
    else if(input%3===0&&input%5===0){
        console.log("FIZZBUZZ");
    }
    else if(input%3===0){
        console.log("fizz");
        }
    else if(input%5===0){
        console.log("buzz");
    }
    else{
        console.log("not divisible");
    }
}
let input='0';
fizzbuzz(input);

//exercise 3
let speed=180;
let speedlimit=70;
checkspeed(speed,speedlimit);
let points;
function checkspeed(speed,speedlimit){
    if (speed<=speedlimit) {
        console.log("ok");
    }
    else if(Math.floor(speed)<=speedlimit){
        console.log("ok");
    }
    else{
        let points = Math.floor((speed-speedlimit)/5);
    
    if (points>12) {
        console.log("license sus");
    }
    else{
        console.log("points"+points);
    }}
}


let num=10;
check(num);
function check(limit){
    for(let i=1;i<=limit;i++){
        if (i%2===0) {
            console.log(i+" even");
        }
        else{
            console.log(i+" odd");
        }
    }
}
//exercise
let array=[undefined,'a','','lll'];
let falssy=0;
count(array);
function count(array){
    for(let key of array){
        if(key===undefined||key===null||key===false||key===0||key===NaN||key===''){falssy=falssy+1;}
       
        }
        console.log(falssy);
    
}
 if(array===null){falssy=falssy+1;}
if(array===false){falssy=falssy+1;}

if(array===0){falssy=falssy+1;}
if(array===NaN){
    falssy=falssy+1;

}
else{
        falssy=falssy+1-1;
    }




// exercise
let ob={
    title:'hello',
    title2:"world",
    age:2

};
show(ob)
function show(object){
    for(let obj in object){
        if(typeof object[obj]==="string"){
            console.log(obj,object[obj]);
        }
    }
}




// exercise
let limit=10;
multiple(limit);

function multiple(lim){
    let sum2=0;
let sum1=0;
let sum3;
    for(let i =0;i<=10;i++){
        if (i%3===0){
            
            sum1+=i;
        }
        if(i%5===0){
           
             sum2+=i;
        }
         sum3=sum1+sum2;

    }
    console.log(sum3);
}



// exercise
let marks=[50,50,50,50,50];
calculategrade(marks);
function calculategrade(marks){
    let sum_of_index_array=0;
    let avegrage;

    for(let inde of marks){
        sum_of_index_array=sum_of_index_array+inde;

    }
     avegrage= sum_of_index_array / marks.length

     if(avegrage>=1 && avegrage<=59){
        console.log("F");
     }
     else if(avegrage>=60 && avegrage<=69){
        console.log("D");
     }
     else if(avegrage>=70 && avegrage<=79){
        console.log("C");
     }
     else if(avegrage>=80 && avegrage<=89){
        console.log("B");
     }
     else if(avegrage>=90 && avegrage<=100){
        console.log("A");
     }
}




// stars
let rows=5;
showsharts(rows);
function showsharts(rows){
    for(let i=0;i<rows;i++){
        let pattren='';
        
        for(let j=0;j<=i;j++){
            // console.log(i);
                pattren+='*';
            }
            console.log(pattren);
        
    }
}




// objects

const obje={
    radius:1,
    location:{
        x:1,
        y:2
    },
    isvisible:true,
    draw:function(){
        console.log("hello");
    }

}
obje.draw();





//factory function
function createcircle(){
    const create={
       v:"variable",
        draw(){
            console.log("hello");
        }
    };
    return create;
}
let circle=createcircle();
circle.draw();




//constructor function
function Circle(){
    this.radius=1;
    this.dra=function(){
        console.log("hello");
    }
}
const circe=new Circle();
circe.dra();
circe.constructor;





//how js engine understand a function
const circle_1 =new Function(` this.radius=1;
this.dra=function(){
    console.log("function is also an object");
}`)
const circle_obj = new circle_1();
circle_obj.dra();


// primitive vs referance
let x=10;
let y=x;
x=20;
x=
{
    value:10
};
y=x;
x.value=20;

// using function
let new_number=20;
function point(new_number)
{
    new_number++;
}
console.log("before using referance datatypes",new_number);
new_number=

{
    value:20
};
function point(new_number)
{
    new_number.value++;
}
point(new_number)
console.log("after using referance datatpes",new_number['value']);



//for-of loop being used in objects
const object_name=

{

    radius:2,
    draw:function()
    {
        console.log("hello");
    }
};

// loging properties names
for(let prop of Object.keys(object_name))
{
    console.log(prop);
}

// loging values of properties
for(let prop of Object.entries(object_name))
{
    console.log(prop);
}

// in operator
if('radiuss' in object_name)
{
    console.log("yes present");
}
else
{
    console.log("not present");
}



//cloning the object
const object2_name=
{
    radius2:2,
    draw()
    {
        console.log("draw");
    }
}
 const cloned={};
 for(let key in object2_name)
 {
    cloned[key]=object2_name[key];
 }
 cloned['new_prop']="hello";

 // cloning object by an another way
 const object3_nmae=
 {
    radius3:2,
    draw()
    {
        console.log("draw");
    }
    
 };
 const cloned2= Object.assign({},object2_name,object3_nmae);

 //spread operator
 const object_new=
 {
    radius_:2,
    draw()
    {
        console.log("draw");
    }
 };
 const another={...object_new};



 //everything is an object
const message_='hi';
console.log(typeof message_);
const another_message_= new Object('hi');
console.log(typeof another_message_);


// string using ``
const message_new_using_templateliterals=`hi
${1+2+3} is my message or string using template literals`;
console.log(message_new_using_templateliterals);


// address object
const address=
{
    street:183,
    city:`ludhiana`,
    zipcode:141013
};
showaddress(address);
function showaddress(address)
{

    for(let show in address)
    {
        console.log(show,address[show]);
    }
}

// address object using factory function
function showaddress_usingfactory()
{
    return{

    street:183,
    city:`ludhiana`,
    zipcode:141013
    }
   
}
const show_factory= showaddress_usingfactory();
console.log(show_factory);

//using constructor function
function showaddress_usingconstructor()
{
   
    this.street=183;
    this.city=`ludhiana`;
    this.zipcode=141013;
    
   
}
const show_constructor = new showaddress_usingconstructor();
console.log(show_constructor);
// checking equality

const show_constructor2 = new showaddress_usingconstructor();

areequal(show_constructor,show_constructor2);

aresame(show_constructor,show_constructor2);

function areequal(show_constructor,show_constructor2)
{
    console.log(show_constructor.street===show_constructor2.street && show_constructor.city===show_constructor2.city && show_constructor.zipcode===show_constructor2.zipcode);
}

function aresame(show_constructor,show_constructor2)
{
    console.log(show_constructor===show_constructor2);
}

// constructor function blog
function post(){
    this.title='title';
    this.body='body';
    this.author="author";
    this.view=2;
    this.comments=[];
    this.islive=false;
}
const blog=new post();
console.log(blog);


//pricerange
let pricerange=[
    {
     lable:'$',
     tooltip:'inexpensive',
     minper:1,
     maxper:10
},
{
     lable:'$$',
     tooltip:'mordreat',
     minper:10,
     maxper:20
},
{
     lable:'$$$',
     tooltip:'expensive',
     minper:20,
     maxper:30 
}

];
for (let key of pricerange){
    console.log(key,pricerange[key]);
}


//Arrays

// addition

const array_=[2,3];
//loging array
console.log(array_);

//to add at end
array_.push(4,5);
console.log(array_);

//to add at end
array_.unshift(1);
console.log(array_);

//to add at middle
array_.splice(3,0,'hello');
console.log(array_);

//searching
const array_search=[1,2,3,1,5];
console.log(array_search.indexOf(1));
console.log(array_search.indexOf(2));

console.log(array_search.lastIndexOf(1))
console.log(array_search.lastIndexOf('llalala'));

console.log(array_search.indexOf(1) !== -1);
console.log(array_search.includes(1));

// searching of objects
const array_searchusingobject=[
{
    id:1,year:1
},
{
    id:2,year:2
}
];
// console.log(array_searchusingobject.find(function(array_searchusingobject){
//     return array_searchusingobject.id===2;
// }));

const search=array_searchusingobject.find(function(array_searchusingobject){
    return array_searchusingobject.id===2;
});
console.log(search);

// to search index of object in an array
const search2=array_searchusingobject.findIndex(function(array_searchusingobject){
    
       return array_searchusingobject.id===2;
    
})
console.log(search2);

//using arrow function
const searchusingarrow=array_searchusingobject.find(array_searchusingobject=>{
    return array_searchusingobject.id===2;
});
console.log(searchusingarrow);


//removing elemenys from array
let arrayremove=[1,2,3,4,5,6,7];
console.log(arrayremove);
let arrayremoveanswer=arrayremove.pop();
console.log(arrayremove);
 arrayremoveanswer=arrayremove.push(7);
console.log(arrayremove);


//at begning

let arrayremoveanswer2=arrayremove.shift();
console.log(arrayremove);
arrayremoveanswer2=arrayremove.unshift(1);
console.log(arrayremove);

console.log(arrayremove);


//at middle

const arrayremoveanswerr=arrayremove.splice(2,1);
console.log(arrayremove);
console.log(arrayremove.splice(2,1,3));






//emptying an array
let arrayempty=[1,2,3,4,5,6,7];
arrayempty=[];
arrayempty.length=0;
arrayempty.splice(0,arrayempty.length);
while(arrayempty.length>=0){
    arrayempty.pop();
}
console.log('arrayempty'+arrayempty);