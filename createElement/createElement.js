// 1
// Вставьте ему в конец li с текстом 'item'.
// let elem = document.querySelector("#elem");
// let li = document.createElement("li");

// li.innerHTML = "item";
// elem.appendChild(li);

// 2
// Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
// let elem = document.querySelector("#elem");
// let btn = document.querySelector("#button");
// let li = document.createElement("li");

// btn.addEventListener('click', function(){
// li.innerHTML = "item"
// elem.appendChild(li);
// })

// 3
// добавьте в конец этого родителя еще один абзац, установив ему обработчик клика:
// let parent = document.querySelector('#parent');

// let p = document.createElement('p');
// p.textContent = '!';

// p.addEventListener('click', function() {
// 	console.log(this.textContent); // по клику выведем текст абзаца
// });

// parent.appendChild(p);

// 4
// Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику 
//  любой из добавленных li в конец его текста записывался восклицательный знак.

// let parent = document.querySelector("#elem");
// let childs = document.querySelector("li");
// let btn = document.querySelector("button")

// parent.addEventListener("click",function(event){
//     event.target.innerHTML= event.target.innerHTML + "!";
// });

// btn.addEventListener("click", function(){
// let neWchild = document.createElement("li");
// neWchild.innerHTML = "A";
// parent.appendChild(neWchild);
// });


// 5
// Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее
//  порядковый номер.
// let parent = document.querySelector("#parent");
// for(let i=0; i<10; i++){
//     let li = document.createElement("li");
//     li.innerHTML = i + 1;
//     parent.appendChild(li);
// }

// 6
// let parent = document.querySelector('#parent');

// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = '!';
	
// 	parent.appendChild(p);
// }


// 7
// let parent = document.querySelector('#parent');

// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = '!';
	
// 	// Навешиваем обработчик клика:
// 	p.addEventListener('click', function() {
// 		console.log(this.textContent = this.textContent + "!");
// 	});	
// 	parent.appendChild(p);
// }

// 8
// Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из
// новых инпутов по потери фокуса записывал свой текст в абзац.
// let parent = document.querySelector("#parent");
// let p = document.querySelector("p");

// for(let i=1; i<=5; i++){
//     let inp = document.createElement("input");

// 	inp.addEventListener('blur', function() {
// 	p.innerHTML = this.value;
// 	});	
//  	parent.appendChild(inp);
// }

// 9
// удаление по клику
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		elem.remove();
// 	});
// }

// 10
// Сделайте так, чтобы любая li удалялась по клику на нее.
// let elems = document.querySelectorAll("li");
// for(let elem of elems) {
//     elem.addEventListener("click", function(){
//         elem.remove();
//     });
// };

// 11
// Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
// let btn = document.querySelector("#button")
// let parent = document.querySelector("#parent")
// let elem  = document.querySelector("li");


//     btn.addEventListener("click",function(){
//        parent.removeChild(parent.lastElementChild); 
//     });

// 12
// Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
// let elem = document.querySelector("#elem");
// let firstChild = document.createElement("li");
// firstChild.innerHTML = "start";
// elem.prepend(firstChild);

// let lastChild = document.createElement("li");
// lastChild.innerHTML = "finish";
// elem.append(lastChild);

// 13
//Вставьте перед этим элементом элемент с текстом 'new'.
// let parent = document.querySelector("#parent");
// let elem = document.querySelector("#elem");

// let newLi = document.createElement('li');
// newLi.innerHTML = "new";
// parent.insertBefore(newLi,elem);

// 14
// Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста
//  будет добавляться '!'.
// let parent = document.querySelector("#parent");
// let elem = document.querySelector("#elem");

// let newLi = document.createElement('li');
// newLi.innerHTML = "new";
// parent.insertBefore(newLi,elem);

// newLi.addEventListener("click", function(){
//     newLi.innerHTML = newLi.innerHTML + "!"
// });

// 15
// Вставьте перед ним абзац с текстом '!!!'.
// let elem = document.querySelector("#elem");
// let p = document.createElement("p");
// p.innerHTML = "!!!"
// elem.insertAdjacentElement("beforebegin", p);

// 16
// Вставьте после него абзац с текстом '!!!'.
// let elem = document.querySelector("#elem");
// let p = document.createElement("p");
// p.innerHTML = "!!!"
// elem.insertAdjacentElement("afterend", p);

// 17
// Вставьте ему в начало абзац с текстом '!!!'.
// let elem = document.querySelector("#elem");
// let p = document.createElement("p");
// p.innerHTML = "!!!"
// elem.insertAdjacentElement("afterbegin", p);

// 18
//Вставьте ему в конец абзац с текстом '!!!'.
// let elem = document.querySelector("#elem");
// let p = document.createElement("p");
// p.innerHTML = "!!!"
// elem.insertAdjacentElement("beforeend", p);

// 19
// Дан элемент. Вставьте перед ним следующий тег:
// <div class="www"><p>text</p><p>text</p><input></div>

let elem = document.querySelector("#elem");
elem.insertAdjacentHTML("beforebegin","<div><p>text</p><p>text</p><input></div>");