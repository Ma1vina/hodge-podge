// По нажатию на кнопку добавить новую li в конец, а при клике на li добавить ему в конец знак !
// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li')

// function handler() {
// 	this.innerHTML = this.innerHTML + '!';
// }

// for (let item of items) {
// 	item.addEventListener('click', handler);
// }

// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.innerHTML = 'item';
	
// 	item.addEventListener('click', handler);
	
// 	list.appendChild(item);
// });

//СПОСОБ через делегирование событий: + EVENT

let button = document.querySelector('button');
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li')

list.addEventListener("click",function(event){
    let li = event.target.closest('li'); //closet -ищет родителя и сам элемент	
	if (li) {
		li.innerHTML = li.innerHTML + '!';
	}
});

button.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerHTML = "item";
    list.appendChild(item)
});