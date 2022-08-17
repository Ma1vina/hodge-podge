// 1
// Вставьте ему в конец li с текстом 'item'.
let elem = document.querySelector("#elem");
let li = document.createElement("li");

li.innerHTML = "item";
elem.appendChild(li);