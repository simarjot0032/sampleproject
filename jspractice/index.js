// console.log("hello world")
// let a=5;
// console.log(a);

// objects
// let person={
//     name:'john',
//     age:'2'
// };
// let selection='name';
// person['selection']='mary'
// alert("k");
// console.log(person['name']);

// // swapping the two variables 
// let c1 = 'red';
// let c2 = 'blue';
// console.log("before swapping a= "+a+" ,b= "+b);
// let c;
// c=c1;
// c1=c2;
// c2=c;
// console.log("after swapping a= "+a+" ,b= "+ b);

// // if else
// let hour=20;
// if(hour>=6 && hour<12){
//     console.log("Good Morning");
// }
// else if(hour>12 && hour<18){
//     console.log("Good Afternoon");
// }
// else if(hour>=18&&hour<24){
//     console.log("Good Evening");
// }

// // for in
// let persons={
//     name:'john',
//     age:2
// };
// for(let vale in persons){
//     console.log(vale,persons[vale]);
// }

// // for of 
// let personp={
//         // name:'john',
//         // age:2
//     };
// let personpp=['john', 2]
//     for(let key of personpp){
//         console.log(key);
//     }

// // exercise on flow control

// let number1=2;
// let b=5;

// function max(a,b) {
//     if (a>b) {
//       console.log("a is greater");
//     }
//     else{
//         console.log("b is greater");;
//     }
// }
// max(number1,b);

// let width=800,height=200 ;
// isLans(width,height)
// function isLans(width ,height){
//     if (width>height) {
//         console.log("landscape");
//     }
//      else {
//         console.log("portraite");
//     }
// }

// // exercise 2
// function fizzbuzz (input) {
//     if (typeof input !=='number' ) {
//         console.log(NaN);
//     }    
//     else if(input%3===0&&input%5===0){
//         console.log("FIZZBUZZ");
//     }
//     else if(input%3===0){
//         console.log("fizz");
//         }
//     else if(input%5===0){
//         console.log("buzz");
//     }
//     else{
//         console.log("not divisible");
//     }
// }
// let input='0';
// fizzbuzz(input);

// //exercise 3
// let speed=180;
// let speedlimit=70;
// checkspeed(speed,speedlimit);
// let points;
// function checkspeed(speed,speedlimit){
//     if (speed<=speedlimit) {
//         console.log("ok");
//     }
//     else if(Math.floor(speed)<=speedlimit){
//         console.log("ok");
//     }
//     else{
//         let points = Math.floor((speed-speedlimit)/5);
    
//     if (points>12) {
//         console.log("license sus");
//     }
//     else{
//         console.log("points"+points);
//     }}
// }


// let num=10;
// check(num);
// function check(limit){
//     for(let i=1;i<=limit;i++){
//         if (i%2===0) {
//             console.log(i+" even");
//         }
//         else{
//             console.log(i+" odd");
//         }
//     }
// }
// //exercise
// let array=[undefined,'a','','lll'];
// let falssy=0;
// count(array);
// function count(array){
//     for(let key of array){
//         if(key===undefined||key===null||key===false||key===0||key===NaN||key===''){falssy=falssy+1;}
       
//         }
//         console.log(falssy);
    
// }
//  if(array===null){falssy=falssy+1;}
// if(array===false){falssy=falssy+1;}

// if(array===0){falssy=falssy+1;}
// if(array===NaN){
//     falssy=falssy+1;

// }
// else{
//         falssy=falssy+1-1;
//     }




// // exercise
// let ob={
//     title:'hello',
//     title2:"world",
//     age:2

// };
// show(ob)
// function show(object){
//     for(let obj in object){
//         if(typeof object[obj]==="string"){
//             console.log(obj,object[obj]);
//         }
//     }
// }




// // exercise
// let limit=10;
// multiple(limit);

// function multiple(lim){
//     let sum2=0;
// let sum1=0;
// let sum3;
//     for(let i =0;i<=10;i++){
//         if (i%3===0){
            
//             sum1+=i;
//         }
//         if(i%5===0){
           
//              sum2+=i;
//         }
//          sum3=sum1+sum2;

//     }
//     console.log(sum3);
// }



// // exercise
// let marks=[50,50,50,50,50];
// calculategrade(marks);
// function calculategrade(marks){
//     let sum_of_index_array=0;
//     let avegrage;

//     for(let inde of marks){
//         sum_of_index_array=sum_of_index_array+inde;

//     }
//      avegrage= sum_of_index_array / marks.length

//      if(avegrage>=1 && avegrage<=59){
//         console.log("F");
//      }
//      else if(avegrage>=60 && avegrage<=69){
//         console.log("D");
//      }
//      else if(avegrage>=70 && avegrage<=79){
//         console.log("C");
//      }
//      else if(avegrage>=80 && avegrage<=89){
//         console.log("B");
//      }
//      else if(avegrage>=90 && avegrage<=100){
//         console.log("A");
//      }
// }




// // stars
// let rows=5;
// showsharts(rows);
// function showsharts(rows){
//     for(let i=0;i<rows;i++){
//         let pattren='';
        
//         for(let j=0;j<=i;j++){
//             // console.log(i);
//                 pattren+='*';
//             }
//             console.log(pattren);
        
//     }
// }




// // objects

// const obje={
//     radius:1,
//     location:{
//         x:1,
//         y:2
//     },
//     isvisible:true,
//     draw:function(){
//         console.log("hello");
//     }

// }
// obje.draw();





// //factory function
// function createcircle(){
//     const create={
//        v:"variable",
//         draw(){
//             console.log("hello");
//         }
//     };
//     return create;
// }
// let circle=createcircle();
// circle.draw();




// //constructor function
// function Circle(){
//     this.radius=1;
//     this.dra=function(){
//         console.log("hello");
//     }
// }
// const circe=new Circle();
// circe.dra();
// circe.constructor;





// //how js engine understand a function
// const circle_1 =new Function(` this.radius=1;
// this.dra=function(){
//     console.log("function is also an object");
// }`)
// const circle_obj = new circle_1();
// circle_obj.dra();


// // primitive vs referance
// let x=10;
// let y=x;
// x=20;
// x=
// {
//     value:10
// };
// y=x;
// x.value=20;

// // using function
// let new_number=20;
// function point(new_number)
// {
//     new_number++;
// }
// console.log("before using referance datatypes",new_number);
// new_number=

// {
//     value:20
// };
// function point(new_number)
// {
//     new_number.value++;
// }
// point(new_number)
// console.log("after using referance datatpes",new_number['value']);



// //for-of loop being used in objects
// const object_name=

// {

//     radius:2,
//     draw:function()
//     {
//         console.log("hello");
//     }
// };

// // loging properties names
// for(let prop of Object.keys(object_name))
// {
//     console.log(prop);
// }

// // loging values of properties
// for(let prop of Object.entries(object_name))
// {
//     console.log(prop);
// }

// // in operator
// if('radiuss' in object_name)
// {
//     console.log("yes present");
// }
// else
// {
//     console.log("not present");
// }



// //cloning the object
// const object2_name=
// {
//     radius2:2,
//     draw()
//     {
//         console.log("draw");
//     }
// }
//  const cloned={};
//  for(let key in object2_name)
//  {
//     cloned[key]=object2_name[key];
//  }
//  cloned['new_prop']="hello";

//  // cloning object by an another way
//  const object3_nmae=
//  {
//     radius3:2,
//     draw()
//     {
//         console.log("draw");
//     }
    
//  };
//  const cloned2= Object.assign({},object2_name,object3_nmae);

//  //spread operator
//  const object_new=
//  {
//     radius_:2,
//     draw()
//     {
//         console.log("draw");
//     }
//  };
//  const another={...object_new};



//  //everything is an object
// const message_='hi';
// console.log(typeof message_);
// const another_message_= new Object('hi');
// console.log(typeof another_message_);


// // string using ``
// const message_new_using_templateliterals=`hi
// ${1+2+3} is my message or string using template literals`;
// console.log(message_new_using_templateliterals);


// // address object
// const address=
// {
//     street:183,
//     city:`ludhiana`,
//     zipcode:141013
// };
// showaddress(address);
// function showaddress(address)
// {

//     for(let show in address)
//     {
//         console.log(show,address[show]);
//     }
// }

// // address object using factory function
// function showaddress_usingfactory()
// {
//     return{

//     street:183,
//     city:`ludhiana`,
//     zipcode:141013
//     }
   
// }
// const show_factory= showaddress_usingfactory();
// console.log(show_factory);

// //using constructor function
// function showaddress_usingconstructor()
// {
   
//     this.street=183;
//     this.city=`ludhiana`;
//     this.zipcode=141013;
    
   
// }
// const show_constructor = new showaddress_usingconstructor();
// console.log(show_constructor);
// // checking equality

// const show_constructor2 = new showaddress_usingconstructor();

// areequal(show_constructor,show_constructor2);

// aresame(show_constructor,show_constructor2);

// function areequal(show_constructor,show_constructor2)
// {
//     console.log(show_constructor.street===show_constructor2.street && show_constructor.city===show_constructor2.city && show_constructor.zipcode===show_constructor2.zipcode);
// }

// function aresame(show_constructor,show_constructor2)
// {
//     console.log(show_constructor===show_constructor2);
// }

// // constructor function blog
// function post(){
//     this.title='title';
//     this.body='body';
//     this.author="author";
//     this.view=2;
//     this.comments=[];
//     this.islive=false;
// }
// const blog=new post();
// console.log(blog);


// //pricerange
// let pricerange=[
//     {
//      lable:'$',
//      tooltip:'inexpensive',
//      minper:1,
//      maxper:10
// },
// {
//      lable:'$$',
//      tooltip:'mordreat',
//      minper:10,
//      maxper:20
// },
// {
//      lable:'$$$',
//      tooltip:'expensive',
//      minper:20,
//      maxper:30 
// }

// ];
// for (let key of pricerange){
//     console.log(key,pricerange[key]);
// }


// //Arrays

// // addition

// const array_=[2,3];
// //loging array
// console.log(array_);

// //to add at end
// array_.push(4,5);
// console.log(array_);

// //to add at end
// array_.unshift(1);
// console.log(array_);

// //to add at middle
// array_.splice(3,0,'hello');
// console.log(array_);

// //searching
// const array_search=[1,2,3,1,5];
// console.log(array_search.indexOf(1));
// console.log(array_search.indexOf(2));

// console.log(array_search.lastIndexOf(1))
// console.log(array_search.lastIndexOf('llalala'));

// console.log(array_search.indexOf(1) !== -1);
// console.log(array_search.includes(1));

// // searching of objects
// const array_searchusingobject=[
// {
//     id:1,year:1
// },
// {
//     id:2,year:2
// }
// ];
// // console.log(array_searchusingobject.find(function(array_searchusingobject){
// //     return array_searchusingobject.id===2;
// // }));

// const search=array_searchusingobject.find(function(array_searchusingobject){
//     return array_searchusingobject.id===2;
// });
// console.log(search);

// // to search index of object in an array
// const search2=array_searchusingobject.findIndex(function(array_searchusingobject){
    
//        return array_searchusingobject.id===2;
    
// })
// console.log(search2);

// //using arrow function
// const searchusingarrow=array_searchusingobject.find(array_searchusingobject=>{
//     return array_searchusingobject.id===2;
// });
// console.log(searchusingarrow);


// //removing elemenys from array
// let arrayremove=[1,2,3,4,5,6,7];
// console.log(arrayremove);
// let arrayremoveanswer=arrayremove.pop();
// console.log(arrayremove);
//  arrayremoveanswer=arrayremove.push(7);
// console.log(arrayremove);


// //at begning

// let arrayremoveanswer2=arrayremove.shift();
// console.log(arrayremove);
// arrayremoveanswer2=arrayremove.unshift(1);
// console.log(arrayremove);

// console.log(arrayremove);


// //at middle

// const arrayremoveanswerr=arrayremove.splice(2,1);
// console.log(arrayremove);
// console.log(arrayremove.splice(2,1,3));






// //emptying an array
// let arrayempty=[1,2,3,4,5,6,7];
// arrayempty=[];
// arrayempty.length=0;
// arrayempty.splice(0,arrayempty.length);
// while(arrayempty.length>=0){
//     arrayempty.pop();
// }
// console.log('arrayempty'+arrayempty);


// // combining two arrays
// let array1=[1,2];
// let array2=['hello'];
// const arrayconcat=array1.concat(array2);
// console.log(arrayconcat);

// //spread operator 
// let array_spread=[1,2,3,4,5];
// let array_spread2=[1,2,3,4,5,6,7,8];
// const combined=[...array_spread,'this was 1st now 2nd' ,array_spread2];
// console.log(combined);
// const copy=[...combined];
// console.log(copy);

// //iterating an array
// let new_array=[1,2,3,4,5];
// new_array.forEach(new_array => console.log(new_array))



// //joining
// let string='this is an string for joining';
// const stringsplit=string.split(' ');
// console.log(stringsplit);
// const arrayjoined=stringsplit.join('-');
// console.log(arrayjoined);
// // let arrayjoined_=[1,2,3,4,5,6,7,8];
// // console.log(arrayjoined_.join(','));

// //sorting
// let anarray=[
//     {
//         id:1,
//         name:'No'
//     },
//     {
//         id:2,
//         name:'J'
//     }
// ];
// const sorted=anarray.sort(function(a,b){
//     if(a.name<b.name) return-1;
//     if(a.name>b.name) return 1;
//     return 0;
// });
// console.log(sorted);

// // testing  element on the array
// let arraaytest=[1,2,3,4,5];
// let test=arraaytest.every(arraaytest => {return arraaytest>=0});
// console.log(test);
// arraaytest=[1,2,-3];
// test=arraaytest.every(arraaytest => {return arraaytest>=0});
// console.log(test);


// //mapping
// let newarray=[1,2,3,4,5,6,7,8,-9];
// let  filterd=newarray.filter(function (newarray){
//     return newarray>=0;
// });
// console.log(filterd);
// const mapped= filterd.map(function(filterd){
//     return{value:filterd};
//     // this.value=filterd; not to use as filted is not constructor
// });

// console.log(mapped);

// console.log(mapped);
// const obj={
//     hl:'h'
// };
// for(let key of Object.entries(obj)){
//     console.log(key);
// }




// //exercise
// let min=-1;
// let maxm=10;
// arrayfromrange(min,maxm)

// function arrayfromrange(min,max){
//     let array_op=[];
//     for(i=min;i<=max;i++){
//         array_op.push(i);
//     }
//     console.log(array_op);
// }


// //includes
// let array_includes=[1,2,3,4,5];
// let search_element=0;
// include_(array_includes,search_element)
// function include_(array_includes,search_element){
//     for(let key of array_includes){
//         if(key===search_element){
//             console.log("element is present");
//         }
//         else{
//             console.log("not");
//         }
//     }
// }


// // except
// let array_except=[1,2,3,4,5,6,7,8];
// let elment=1;
// // let last;
// except(elment,array_except);
// function except(elment,array_except){
//     for(let except=0;except<array_except.length;except++){
//         // while(elment in array_except){ dont use as it will result in infinite loop
//             for(let i=0;i<array_except.length;i++){
//                 if(array_except[except]===elment){
//         let  last=array_except.lastIndexOf(elment);
//          array_except.splice(last,1);
//           except--;
//         }}
//     }
//     console.log(array_except);
// }
// // //option 2

// // let array_except=[1,2,3,4,5,6,7,8];
// // let elment=1;
// // let last;
// // except(elment,array_except);
// // function except(elment,array_except){
// //     for(let except=0;except<=array_except.length;except++){
// //         // while(elment in array_except){
// //          if(elment===array_except[except]){
// //         // array_except.splice(array_except.lastIndexOf(last),1);
// //         array_except.splice(except,1);
// //         }
// //     }
// //     console.log(array_except);
// // }




// //countoccurance
// let array_reduce=[12,3,4,5,6,7,8,12];
// let element_to_becountde=120;
// let count_=0;
// const count=array_reduce.reduce(function(accumulatoe,cv){
//     if(cv===element_to_becountde){
//         count_=count_+1;
//     }
//     return count_;
// },0);
// console.log(count_);
// // function countoccurance(array_reduce,element_to_becountde){}


// //movies
// let movies=[
//     {title:'a',year:2018,rating:4.5},
//     {title:'b',year:2018,rating:4.7},
//     {title:'c',year:2018,rating:3},
//     {title:'d',year:2017,rating:4.5}
// ];
// let output;

//      output=movies.filter(function(movies){
//      return  movies.year===2018 && movies.rating>=4;  
//     });
//     output.sort((a, b) => a.rating - b.rating);
//     output.reverse();
//     console.log(output.map(m=>m.title));
//     console.log(output);

// // function
// //expression function
// let another_method=function(){
//     console.log("this is the another method for uding function");
// };
// another_method();

// //hosting
// let hosting=function(){
//     console.log("hosting");
// };
// hosting();

// //arguments
// let arguments_=function(a,b){
//     console.log('sum');
// };
// arguments_(1,2);
// let arguments_morre=function(){
//     console.log(arguments);
//     let total=0;
//     for(let value of arguments){
//     total=total+value;}
//     return total;
// };
// console.log(arguments_morre(1,2,3,4,5));

// //rest operator
// let rest=function(...argu){
//     console.log(argu);
//     let total_=0;
//     for(let valuess of argu){
//         total_=total_+valuess;
//     }
//     console.log(total_);
//     // return total_;
// };
// rest(1,2,3,4,5,6,7,8,9,10,11,12,13,14);

// //defualt parameters
// let ren=function(a=5)
// {
//     console.log(a);
// }
// ren();

// //setter
// let sett=function(fname,lname){
//    let  firstname=fname;
//     let lastname=lname;
//     return `${firstname} hi ${lastname}`;
//     // console.log(firstname+''+lastname);
// }
// console.log(sett('hello','worls'));
// let getset={
//     first_name :'john',
//     lastname:'smith',
//     get full(){
//         return `${getset.first_name} ${getset.lastname}`;
//     },
//     set full(name){
//         const parts=name.split(' ');
//         this.first_name=parts[0];
//         this.lastname=parts[1];

//     }
// };

// getset.full=`hello ji`;

// console.log(getset.full);



      
//  // try catch
 
//  let throwa={
//      first_name :'john',
//      lastname:'smith',
//      get full(){
//          return `${throwa.first_name} ${throwa.lastname}`;
//      },
//      set full(name){
//         if(name === '' || typeof name !== 'string')
//         throw new Error('please enter a valid name by system we are taking anothe name');
//          const parts=name.split(' ');
//          this.first_name=parts[0];
//          this.lastname=parts[1];
 
//      }
//  };
//  try{
// throwa.full=`hh ff`;
//  }
 
// catch(e){
//     alert(e);
// }
//  console.log(throwa.full);
 
//  //this keyword
// let disc={
//     video:'abcdef',
//     tags:['1','2','3','4','5','6','7','8'],
//     show(){
//         this.tags.forEach(function(tag){
//         console.log(this.video,tag);
//     },this);
// }
// };
// disc.show();
// // another method
// let discs={
//     video:'abcdef',
//     tags:['1','2','3','4','5','6','7','8'],
//     show(){
//         this.tags.forEach(function(tag){
//         console.log(this.video,tag);
//     }.bind(this));
// }
// };
// disc.show();

// // another
// let discss={
//     video:'abcdef',
//     tags:['1','2','3','4','5','6','7','8'],
//     show(){
//         this.tags.forEach((tag)=>{
//         console.log(this.video,tag);
//     });
// }
// };
// disc.show();
// // old
// let disc_={
//     video:'abcdef',
//     tags:['1','2','3','4','5','6','7','8'],
//     show(){
//         const this_=this;
//         this.tags.forEach(function(tag){
//         console.log(this_.video,tag);
//     });
// }
// };
// disc.show();


// //exercise
// let check_array=0;
// let sum_function=function(...args){
    
//     if(Array.isArray(args)&& args.length===1){
//         // args.forEach(function(args){
//             // check_array=check_array+1;
//              args=[...args[0]];
//             let sum_of=0;
//             for(a of args){
//                 sum_of=a+sum_of;
//             }
//             console.log(sum_of);
//         }
    
//     else{
//     let  sum_inside=0;
//     for(let loop of args){
//         sum_inside+=loop;    
//     }
//     console.log(sum_inside);
// }}
// // }
// sum_function([1,2,3,4]);


// //exercise 
// let area={
//     radius:40,
//     get area(){
//         // let pi=3.14;
//         let area =Math.PI* this.radius* this.radius;
//         console.log(area);
//     }
    
// };
// area.area=40;
// area.area;

// //exercise
// try{
// let array=[1,1,3,4,5,6,7,8];
// let element_search=1;
// countocc(array,element_search);
// }
//  catch{
//     alert(eb)
// }

// function countocc(array,element_search){
//     if(Array.isArray(array)){
        
//     let countvariable=0;
//     for(let indes of array){
//         if(indes===element_search){
//             countvariable++;
//         }
//         console.log(countvariable);
//     }}
//     else{
//         throw new error("not a valid array");
//     }
// }

// let protot={
//     value:5
// };
// let newpr={
//     draw:function(){
//         console.log('hi');
//     }
// };
// // newpr.__proto__= protot;
// protot.__proto__=newpr
// // newpr.draw();
// protot.draw();
// let new_get={
//     name:'hi'
// };
// let desc=Object.getOwnPropertyDescriptor(new_get,'name');
// console.log(desc);
// Object.defineProperties(new_get,'name',{
//     writable:false
// });


// function Shape(color){
// this.color=color;
// console.log(this.color);
// }
// Shape.prototype.draw=function(){
//     console.log('hi');
// }
// function Circle(color){
//     Shape.call(this,color)
//     this.radius=1
// }
// Circle.prototype=Object.create(Shape.prototype);
// Circle.prototype.constructor=Circle;
// Circle.prototype.draw=function(){

//     console.log('hi from circle');
// }
// const c = new Circle('red');
// const s =new Shape();


// function htmle(){
//     this.click=function(){
//         console.log('clicked');
//     }
// }
// htmle.prototype.focus=function(){
//     console.log(focused);
// };

// function htmlse(){
//     this.additems=function(){
        
//     }
//     this.remove=function(){
        
//     }
//     this.items=[1]
// }

// htmlse.prototype=new htmle;
//     // htmle.prototype=Object.create(htmlse.prototype);
//     // htmle.prototype.constructor=htmle;


// let h=new htmle;
// let hs=new htmlse
// hs.render='<option>'
// const _d=Symbol();
// class Circle{
//     constructor(){
//        draw=function(){

//         }
//         [_d]=1
//     }
// }
const _d=new WeakMap();
class Circle{
    constructor(){
        _d.set(this,1);
     
    }
    draw() {
        console.log(_d.get(this));
    }
    
}
let c=new Circle()