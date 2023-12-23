console.log("hello world");
let elementnew = document.createElement("div");
elementnew.setAttribute("class", "hello");
let body = document.body;
body.append(elementnew);
let hellodiv = document.querySelector(".hello");
hellodiv.innerHTML = "heeloWorld";
if (document.querySelector(".hello")) {
  console.log(".heleo finded");
}
let newarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
newarray.forEach((n) => {
  console.log(n);
});
newarray.map((n) => {
  let list = document.querySelector(".list");
  list.innerHTML += `<li>${n}</li>`;
  //   let listitem = document.createElement("li");
  //   listitem.innerText = n;
  //   list.append(listitem);
});
