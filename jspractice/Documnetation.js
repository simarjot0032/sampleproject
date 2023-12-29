"use strict";
console.log("hello");
let number = Number(null);
let x = 2;
x = -x;
function showanother() {
  return "cde";
}
function show(a, b = showanother()) {
  console.log(a + b);
}
show("abc");
function type(text) {
  text = text || "abc";
  console.log(text);
}
type();
type("cdee");
let num = 5; //now num is created in case of not using use strict

let year = "year";
let bool = year == 2015;
if (bool) {
  console.log("2015");
}

let ageofuser = 5; //prompt();
let message =
  ageofuser <= 5 && ageofuser <= 18
    ? "hi small age" // if
    : ageofuser >= 19 && ageofuser <= 25 // else if
    ? "adult"
    : ageofuser > 25 // else if
    ? "hi adult "
    : "error"; //else
console.log(message);

let sayh = function () {
  console.log("heelo");
};
// object constructor
let objusingcon = new Object({
  name: "h",
  tobedeleted: true,
});
objusingcon.age = 18;
console.log(objusingcon);
delete objusingcon.tobedeleted;
objusingcon["multi word property"] =
  "square notation have 'quotes' compuslary in notaions";
let newkey = "key name";
objusingcon[newkey] =
  "sqare notation using variable not reqiure 'quotes' and variable value acts a key ";
console.log(objusingcon);

//task to check if obj is empty or not
let isempty = (obj) => {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
  // another method
  // for(let keyy in obj){retun false}
  // return true
};
let objtest = {};
console.log(isempty(objtest));
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
function sumofsalaries(obj) {
  for (let keys in obj) {
    sum += obj[keys];
  }

  console.log(sum);
}
sumofsalaries(salaries);
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multily(obj) {
  for (let keys in obj) {
    if (typeof obj[keys] == "number") {
      obj[keys] *= 2;
    } else {
      //
    }
  }
}
multily(menu);
for (let keys in menu) {
  console.log(menu[keys]);
}
let originalobj = {
  name: "name",
  age: "5",
};
let copyobj = {};

for (let keys in originalobj) {
  copyobj[keys] = originalobj[keys];
}
console.log(copyobj);
let anothercopy = {};
Object.assign(anothercopy, originalobj, menu);
let user = {
  name: "simar",
  age: 18,
  sayname() {
    console.log(this.name);
  },
};
let naotheobj = user;
user = null;
naotheobj.name = "simarjot";
naotheobj.sayname();
let cal = {
  a: 5,
  b: 55,
};
function sumofobj() {
  return this.a + this.b;
}
function mul() {
  return this.a * this.b;
}
cal["mul"] = mul;
cal["sumfun"] = sumofobj;
console.log(cal.sumfun());
// let sumofobj = 0;
// function sumfun(cal) {
//   for (let keys in cal) {
//     sumofobj += cal[keys];
//   }
//   console.log(sumofobj);
// }

// how js will understand a function
let jsfun = new Function(`
console.log("hello");
`);
jsfun();
// cosntructor fun of this
let jsfun2 = new jsfun();
// what does a new keyword do
function Creating_new() {
  this.name = "hello";
}
let newcreate = new Creating_new();
function Calculator_cons(pra1, pra2) {
  (this.a = pra1),
    (this.b = pra2),
    (this.sum = function () {
      return this.a + this.b;
    });
  this.mul = function () {
    return this.a * this.b;
  };
}
const calculator = new Calculator_cons(5, 55);
// factory
function factory() {
  return {
    a: "name",
  };
}
const factoryfun = factory();
//calculator.constructor
// ƒ Calculator_cons(pra1, pra2) {
//   (this.a = pra1),
//     (this.b = pra2),
//     (this.sum = function () {
//       return this.a + this.b;
//     });
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// factoryfun.constructor
// ƒ Object() { [native code]

// let str = "Hello";
// str = str[2];
// console.log(str);
// let newstr = new str();
// newstr.newstrmethod = () => {
//   console.log("he");
// };
// newstr.newstrmethod();

//task on string
//Write a function ucFirst(str) that returns the string str with the uppercased first character
function ucFirst(str) {
  let newstr = str[0].toUpperCase() + str.slice(1);
  return newstr;
}
console.log(ucFirst("hello"));
//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
//
//The function must be case-insensitive:
//
function checkSpam(str) {
  let newstr = str.toLowerCase();
  if (newstr.includes("viagra") || newstr.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}
console.log(checkSpam("xxx"));
//Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
let truncate = (str, maxlength) => {
  let length = str.length;
  if (length < maxlength || length == maxlength) {
    maxlength = length;
    let newstr = str.slice(0, maxlength);
    return newstr;
  } else {
    let newstr = str.slice(0, maxlength) + "...";
    return newstr;
  }
};
console.log(truncate("hello i am simar a web developer dsfsfsfsfsfsf", 1000));

let anarray = new Array(1, 2, 3, 4, function funcinarray() {
  console.log("hi I am funciton in array");
});
anarray.length;
anarray[4]();
anarray.at(-1)();
anarray.push(1);
anarray.shift();
anarray.unshift(1);
let objforarray = {
  0: "h",
  1: "e",
  2: "l",
  [Symbol.isConcatSpreadable]: true,
  length: 4,
};
console.log(anarray.concat(objforarray));

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// function camelize(str) {
//   let str2 = str.split("-");
//   let str22 = [];

//   str2.forEach((n) => {
//     n = n[0].toUpperCase() + n.slice(1);
//     str22.push(n);
//   });
//   let newstr = str22.join("");
//   newstr = newstr[0].toLowerCase() + newstr.slice(1);
//   return newstr;
// }

function camelize(string) {
  let splitedstr = string.split("-");

  let capatilized = [];
  splitedstr.forEach((n, index) => {
    if (index == 0) {
      capatilized.push(n);
    } else {
      n = n[0].toUpperCase() + n.slice(1);
      capatilized.push(n);
    }
  });

  return capatilized.join("");
}
console.log((-0xff).toString(2));
console.log((0xf).toString(8));
//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.
function filterRange(array, higher, lower) {
  return array.filter((n) => {
    return n >= higher && n <= lower;
  });
}
let filtertbe = [5, 3, 8, 1];
let filterd = filterRange(filtertbe, 1, 4);

//Sort in decreasing order

let forsorting = [5, 2, 1, -10, 8];
function descsort(array) {
  return array.sort().reverse();
}
console.log(descsort(forsorting));
//Copy and sort array
let copyandsort = ["HTML", "JavaScript", "CSS"];
function copyandsortfun(array) {
  let copiedarray = array.slice();
  return copiedarray.sort();
}
let copiedsorted = copyandsortfun(copyandsort);
console.log(copiedsorted);
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];
let names = users.map((n) => {
  return n.name;
});
//You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [john, pete, mary];
let usermapped = users.map((n) => {
  return {
    id: n.id,
    fullname: n.name + " " + n.surname,
  };
});
let exp = {
  0: "h",
  1: "e",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
let empty = [];
let filled = empty.concat(exp);
let anotherfilled = Array.from(exp);

/*------------------------------maps as data structure-----------------------------*/
let mapdata = new Map();
mapdata.set(
  "first key",
  "any value but mapdata['key']='a' is not applicable to map"
);
mapdata.set(
  true,
  "any type can be given to key and no tostring is implemented in MAP"
);

console.log(mapdata);
console.log(mapdata.get(true));
console.log(mapdata.has(true));
for (let keys of mapdata.keys()) {
  console.log(keys);
}
for (let values of mapdata.values()) {
  console.log(values);
}
for (let full of mapdata) {
  console.log(full);
}
mapdata.forEach((values, key) => {
  console.log(values + " is value of  " + key);
});
let objformap = {
  name: "john",
};
mapdata.set(Object.entries(objformap));
//to make obj from map
// objformap = {
//   name: "john",
//   age: 23,
// };
let objformmap = Object.fromEntries(mapdata.entries());
//sets
let sets = new Set();
sets.add("hi");
sets.add("hello");
sets.add("hello");
let anotherset = new Set([1, 2, 3, 4, 5]);
