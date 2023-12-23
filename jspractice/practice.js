console.log("hello world");
let elementnew = document.createElement("div");
elementnew.setAttribute("class", "hello");
let body = document.body;
body.append(elementnew);
let hellodiv = document.querySelector(".hello");
hellodiv.innerHTML = "helloWorld";
if (document.querySelector(".hello")) {
  console.log("hello finded");
}

//arrays are mutable
// let array=[1,2,3];
// array[2]=t; valid
// string are not mutable
// let string="abc";
// string[2]="t"; not valid

let newarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let array of newarray) {
  console.log(array);
}
newarray.forEach((n) => {
  console.log(n);
});
console.log(newarray);
newarray.map((n) => {
  let list = document.querySelector(".list");
  list.innerHTML += `<li>${n}</li>`;
  //   let listitem = document.createElement("li");
  //   listitem.innerText = n;
  //   list.append(listitem);
});

// questions
let marks = [1, 2, 3, 4, 5, 6];
let sum = 0;
marks.forEach((number) => {
  sum += number;
});
let average = sum / marks.length;
console.log(average);
let prices = [250, 300, 200];
prices.forEach((p, index) => {
  let discount = (10 / 100) * p;
  console.log("older price at", index, "was", p);
  p -= discount;
  console.log("newer price at ", index, "is", p);
});
for (let pricesinarray of prices) {
  // console.log(pricesinarray);
}
let emptyarray = Array(10);
// push,pop,tosing,concat,unshit,shift,slice,splice
let arrayformethod = ["a", "b", "c"];
let arrayformethods = ["d", "e", "f"];
arrayformethod.push("e");
console.log(arrayformethod);
// arrayformethod.pop(); //just pop
console.log(arrayformethod);
console.log(arrayformethod.pop()); // lgos the deleted item
let arraystring = arrayformethod.toString(); //to sting returns new array
console.log(arraystring);
console.log(arrayformethod);
let concatedarray = arrayformethod.concat(arrayformethods); // this also returns new arrays also we can pass multiple arrays in the method
console.log(concatedarray);
arrayformethod.unshift("add the data to the first index");
arrayformethod.shift(); //delete the vale of first index
let newslice = arrayformethod.slice(1, 3); // means 1 to 2 as last index is not inclued in array if you does not pass last index then it will splice till last if does not pass any thing it generated the copy this method returns a new array
arrayformethod.splice(2, 1, "c"); // 1st for the starting index, 2nd the number for how many values should be deleted from th starting index and 3rd for adding new elements and son onvalus are added

// pq
let companies = ["bloom", "microsoft", "uber", "google", "ibm", "netflix"];
// part a to remove the 1st company
companies.shift();
console.log(companies);
//  part b to remove uber and add ola in its place
companies.splice(1, 1, "ola");
console.log(companies);
// part c to add amazon at end
companies.push("amazon");
console.log(companies);

//pq
// function which takes sring as input converts it to array and check the vowel in it and strotes the vivewl in new array
function vowel(str) {
  let lowerstr = str.toLowerCase();
  let stringarray = Array.from(lowerstr);
  let srtingvowel = [];
  // another method string.splice("");
  stringarray.forEach((n) => {
    if (n == "a" || n == "e" || n == "i" || n == "o" || n == "u") {
      srtingvowel.push(n);
    }
  });
  console.log(srtingvowel);
}
vowel("abc");

let filtredarray = marks.filter((n) => {
  if (n == 1 || n == 2 || n == 3) {
    return n;
  }
});

let averageofmarks = marks.reduce((acc, current) => {
  return acc + current;
  // return acc > current ? acc : current;
});
let largestelement = marks.reduce((acc, current) => {
  return acc > current ? acc : current;
});

let marksofstudent = [50, 60, 99, 80, 50];
let filtredmarksofstudents = marksofstudent.filter((n) => {
  if (n > 90) {
    return n;
  }
});
console.log(filtredmarksofstudents);

function creatingarray(n) {
  let arrayofn = [];
  for (let i = 1; i <= n; i++) {
    arrayofn.push(i);
  }
  console.log(arrayofn);
  let sumofarray = arrayofn.reduce((prv, latest) => {
    return prv + latest;
  });
  console.log(sumofarray);
  let productofarray = arrayofn.reduce((prv, lat) => {
    return prv * lat;
  });
  console.log(productofarray);
}
creatingarray(5);

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
//map method question
// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names
let charactersname = [];
let charactersheight = [];
let charactersnameandheight = [];
let charactersfirstname = [];
characters.map((n) => {
  charactersname.push(n.name);
  charactersheight.push(n.height);
  charactersnameandheight.push({
    name: n.name,
    height: n.height,
  });
  let fistname = n.name.split(" ");
  charactersfirstname.push(fistname[0]);
});
console.log(charactersname);
console.log(charactersheight);
console.log(charactersnameandheight);
console.log(charactersfirstname);

//reduce method quesitons
// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)

let totalmass = characters.reduce((prv, last) => {
  return Number(prv) + Number(last.mass);
}, 0);
console.log(totalmass);
let totalheight = characters.reduce((prv, last) => {
  return Number(prv) + Number(last.height);
}, 0);
console.log(totalheight);
let totalcharactername = characters.reduce((prv, latest) => {
  let lenght = latest.name.replace(" ", "");
  // return prv + latest.name.split("").replace(" ", "").length; it will also count the spaces in the name
  return prv + lenght.length;
}, 0);

console.log(totalcharactername);
let totaleyecolorlengh = characters.reduce((prv, last) => {
  return prv + last.eye_color.split("").length;
}, 0);
console.log(totaleyecolorlengh);

// FILTER method practice
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters
let massfiltred = characters
  .filter((n) => {
    return Number(n.mass) > 100 ? Number(n.mass) : "";
  })
  .map((n) => Number(n.mass));
console.log(massfiltred);
let newheight = [];
let heightfiltred = characters
  .filter((n) => {
    return Number(n.height) < 200;
  })
  .map((n) => Number(n.height));
console.log(heightfiltred);
let allmale = characters
  .filter((n) => {
    return n.gender == "male" ? n : "";
  })
  .map((n) => n.name);
console.log(allmale);
let allfemale = characters
  .filter((n) => {
    if (n.gender == "female") {
      return n;
    }
  })
  .map((n) => n.name);
console.log(allfemale);

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender
let massofchara = [];
characters.map((n) => massofchara.push(Number(n.mass)));
console.log(massofchara);
console.log(massofchara.sort());
let heightofchara = [];
characters.map((n) => heightofchara.push(Number(n.height)));
console.log(heightfiltred);
console.log(heightfiltred.sort());
let nameofchara = [];
characters.map((n) => nameofchara.push(n.name));
console.log(nameofchara);
console.log(nameofchara.sort());
let genderofchara = [];
characters.map((n) => genderofchara.push(n.gender));
console.log(genderofchara);
console.log(genderofchara.sort());

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?
let hasblue = characters.every((n) => n.eye_color === "blue");
console.log(hasblue);
let massmorethanforty = characters.every((n) => n.mass > 40);
console.log(massmorethanforty);
let heightshorter = characters.every((n) => n.height > 200);
console.log(heightshorter);
let everymale = characters.every((n) => n.gender === "male");
console.log(everymale);

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
let onemale = characters.some((n) => n.gender === "male");
console.log(onemale);
let onecharacterblue = characters.some((n) => n.eye_color === "blue");
console.log(onecharacterblue);
let onewithheightabove = characters.some((n) => n.height > 210);
console.log(onewithheightabove);
let massless = characters.some((n) => n.mass < 40);
console.log(massless);
