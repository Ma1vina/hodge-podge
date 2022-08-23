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
// let tab = document.querySelector("#table");
// let inpRow = document.querySelector("#row");
// let inpLine = document.querySelector("#line");
// let btn = document.querySelector("#btn");
// let div = document.querySelector('div');

// btn.addEventListener("click", func);
// function func(){ //создаем table 
// 	if (tab != undefined){ //не(не найдено)
// 		tab.innerHTML = '';
// 	} else {
// 		tab = document.createElement('table');
// 		div.appendChild(tab); //в див
// 	}

//     //создаю колонки
// 	for (var i = 0; i < inpRow.value; i++) {
// 		var row = document.createElement('tr');
// 		tab.appendChild(row);
// 	}

// 	//создаю ряды
// 	var rowsAll = document.getElementsByTagName('tr'); //получить все tr(колонки)
// 	for (var i = 0; i < rowsAll.length; i++) { //длина кол-во колонок
// 		for (var k = 0; k < inpLine.value; k++) { //кол-во рядов из value
// 			var cell = document.createElement('td'); //строки
// 			rowsAll[i].appendChild(cell);//генерируем
// 		}
// 	}
// }
////////////////////////////////////////

// 4
// Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа
// от 1 до 25.
//Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.

let table = document.querySelector("#table");
let k = 2;
for(let i = 0; i<5;i++){
    let tr = document.createElement("tr");
    for(let i=0;i<5;i++){
        let td=document.createElement("td");
        td.textContent = k;
        k= k+2;
        // for(let j=2;j<=50;j=j+2){
        //     // if(j % 2 == 0){
        //         td.textContent= j; //мой цикл не работает, почему?
        //     // }
    tr.appendChild(td);
    }
    table.appendChild(tr);
};

