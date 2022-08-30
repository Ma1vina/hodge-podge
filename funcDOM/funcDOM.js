// function setText(id, text) {
// 	let elem = document.getElementById(id);
// 	elem.textContent = text;
// }
// setText('elem1', 'text1');
// setText('elem2', 'text2');
//1 Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента, а произвольный CSS селектор.
// function changeCss(selector, property, value) {
//     var nodes = document.querySelectorAll(selector);

//     for (i = 0; i < nodes.length; ++i) {
//         nodes[i].style[property] = value;
//     }
// }

// changeCss(".text", "color", "red");

// 2
// Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает
//  селектор элемента, вторым - имя атрибута, а третьим - его новое значение.

// function func(selector, nameAtr, newName){
//     let elem = document.querySelector(selector);
//     elem.setAttribute(nameAtr,newName);
// }

// func("input", "value", "321");

// 3
// для каждого абзаца добавьте в конец его текста восклицательный знак.


// function forEach(selector, func) {// любая функция коллбэк
// 	let elems = document.querySelectorAll(selector);
	
// 	for (let elem of elems) {
// 		func(elem);
// 	}
// }
// forEach('.elem', function(elem) {
// 	elem.textContent = elem.textContent +"!";
// });


//пример:
// function getText(elem){
//     elem.textContent = elem.textContent +" hey!"
// }

// forEach('.elem', getText);

// // 4
// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);
	
// 	for (let i = 0; i < elems.length; i++) {
// 		func(elems[i], i);
// 	}
// }

// forEach('.elem', function(elem, index) {
// 	elem.textContent = elem.textContent + index;
// });

// 5
// Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст.
//  Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.
// let inp = document.querySelector("input");

// function setValue (elem, text){
//     elem.value = text;
// }

// setValue(inp,"hey");

// 6
// Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul,
//  а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец 
//  переданного тега ul
// let ul = document.querySelector("ul");
// let btn = document.querySelector("button")

// function appendElem (elem,text){
// btn.addEventListener("click", function(){
//  let li = document.createElement("li");
//  li.textContent = text;
//  elem.appendChild(li);
// })
// };
// appendElem(ul,"hey");