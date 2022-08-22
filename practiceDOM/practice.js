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
// let table = document.querySelector('#table');

// for (let i = 0; i < 3; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 3; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = "x"
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

// 3
// реализуйте генератор таблиц
let tab = document.querySelector("#table");
let inpRow = document.querySelector("#row");
let inpLine = document.querySelector("#line");
let btn = document.querySelector("#btn");
let div = document.querySelector('div');

btn.addEventListener("click", func);
function func(){
	if (tab != undefined){
		tab.innerHTML = '';
	} else {
		tab = document.createElement('table');
		div.appendChild(tab);
	}

	for (var i = 0; i < inpRow.value; i++) {
		var row = document.createElement('tr');
		tab.appendChild(row);
	}

	var rowsAll = document.getElementsByTagName('tr');
	for (var i = 0; i < rowsAll.length; i++) {
		for (var k = 0; k < inpLine.value; k++) {
			var cell = document.createElement('td');
			rowsAll[i].appendChild(cell);
		}
	}
}
////////////////////////////////////////