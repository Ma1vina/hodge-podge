"use strict"
let string = "Я люблю печеньки";
let text = " и спать";

let go = string + text;//
console.log(go);

let x = string.slice(2,8); // вырезает 2 - символ включительно, 8 - не включительно
console.log(x);

let p = string.slice(2,-3); // вырезает 2 - символ включительно, -3 c конца
console.log(p);

let textArray = go.split(" "); // разделяет на блоки по указанному символу(поиск в строке), создать массив
console.log(textArray);

let joinArray = textArray.join(" "); // соединить блоки
console.log(joinArray);


let stringSport = "football";
let stArray = stringSport.split ("");
console.log(stArray[0]);// обратиться как к элементам массива
