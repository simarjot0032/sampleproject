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