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
circe.constructor
