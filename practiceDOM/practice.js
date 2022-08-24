// 1
// Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5, 6, 7];
// for(let i = 0; i < arr.length; i++){

// let li = document.createElement('li');
// li.innerHTML = arr[i];
// li.addEventListener('click', func);

// parent.appendChild(li);
// }
// function func () {
// 	this.innerHTML =this.innerHTML + "!" ;
// 	this.removeEventListener("click",func);
// 	};


// 2
// В цикле создадим 9 новых абзацев, при этом сделаем так, чтобы любой абзац удалялся по клику на нем:

// let parent = document.querySelector('#parent');

// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = i;
	
// 	p.addEventListener('click', function() {
// 		this.remove();
// 	});
	
// 	parent.appendChild(p);
// }

// 3
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась 
// по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.

// let parent =document.querySelector("#parent");
// let btn = document.querySelector("#button");
// let liAll = document.querySelectorAll("li");
// let i = 4;

// btn.addEventListener('click', function(){
//     let li = document.createElement("li");
//     li.textContent = i;
//     i++;
//     parent.appendChild(li);
// });

// parent.addEventListener("click", function(event){
//     var li = event.target.closest("li");

// 	if (li) {
// 		li.remove(); 
// 	}
// });

// 4
//удаление ссылки
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');

// remove.addEventListener('click', function() {
// 	elem.remove();
// });

// 5
// cоздание ссылок на удаление
// let elems = document.querySelectorAll('#parent p');

// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }

// 6
// Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
let liAll = document.querySelectorAll("#parent li");

for(let li of liAll){
    let remove = document.createElement("a");
    remove.href = "";
    remove.textContent = "удалить"
    li.appendChild(remove);

    remove.addEventListener("click", function(event){
   li.remove();
   event.preventDefault()
    })
}









