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

// let table = document.querySelector("#table");
// let k = 2;
// for(let i = 0; i<5;i++){
//     let tr = document.createElement("tr");
//     for(let i=0;i<5;i++){
//         let td=document.createElement("td");
//         td.textContent = k;
//         k= k+2;
//         // for(let j=2;j<=50;j=j+2){
//         //     // if(j % 2 == 0){
//         //         td.textContent= j; //мой цикл не работает, почему?
//         //     // }
//     tr.appendChild(td);
//     }
//     table.appendChild(tr);
// };


// 5
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// // Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
// // Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.
// let table = document.querySelector("#table");

// for(let subArr of arr){
//     let tr = document.createElement("tr");
//     for(let elem of subArr){
//         let td=document.createElement("td");
//         td.textContent = elem**2;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// 6
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// // Выведите элементы этого массива в виде HTML таблицы.

// let table = document.querySelector("#table");
// for(let user of employees){
//     let tr = document.createElement("tr");
//     let td1= document.createElement("td");
//     td1.textContent = user.name;
//     tr.appendChild(td1);

//     let td2 = document.createElement("td");
//     td2.textContent = user.age;
//     tr.appendChild(td2)

//     let td3 = document.createElement("td");
//     td3.textContent = user.salary;
//     tr.appendChild(td3);

//     table.appendChild(tr);
// }

// 7
// Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.

// let table = document.querySelector("#table");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let tr = document.createElement("tr");
//     for (let i = 1; i <= 1; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
    
//     table.appendChild(tr);
// })

// 8
//Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.
// let trS = document.querySelectorAll("#table tr");
// let btn= document.querySelector("button");

// btn.addEventListener("click",function(){
// for(let tr of trS){
//     let td = document.createElement("td");
//     tr.appendChild(td);
// }
// })


// 8.1
// Пусть дана некоторая HTML таблица #table. Пусть перед нами стоит задача что-то сделать с каждой ячейкой таблицы,
//  например, записать в каждую из них текст '!'.
// let tds = document.querySelectorAll('#table td');

// for (let td of tds) {
// 	td.textContent = '!';
// }

