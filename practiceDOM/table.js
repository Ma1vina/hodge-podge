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

// 9
// Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на
//  удаление этого ряда.
// let trS = document.querySelectorAll("#table tr");
// let btn= document.querySelector("#button");
// let table = document.querySelector('#table');

// btn.addEventListener("click",function(event){
// for(let tr of trS){
//     let td = document.createElement("td");
//     tr.appendChild(td);

//         let remove = document.createElement("a");
//             remove.href = "";
//             remove.textContent = "удалить"
//             td.appendChild(remove);
// }
// table.appendChild(tr);
// })


// var len = table.tr.length; 
// for(var i=0; i<len; i++){ t
//   table.deleteRow(0); 
// }

// 10.
// Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования
//  текста этой ячейки.

// let tdAll = document.querySelectorAll("#table td");
// let tr = document.querySelector("tr");

// for(let td of tdAll){
//     td.addEventListener("click", function func(){
//         let input = document.createElement("input");
//         input.value = td.textContent;

//         td.textContent = "";
//         td.appendChild(input);


//      input.addEventListener("blur", function(){
//        td.textContent = this.value;
//        td.addEventListener("click", func);
//      })
//      td.removeEventListener("click",func);
//     })
// }


// 11
//  Активация элемента. По клику на нее, активировать ячейку, перекрасив в красный

// let tds = document.querySelectorAll('#table td');

// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.classList.add('active');
// 	});
// }

//Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.
// let tds = document.querySelectorAll('#table td');

// for (let td of tds) {
// 	td.addEventListener('click', function func() {
// 		this.classList.add('active');

//         td.addEventListener('click', function(){
//          this.classList.remove("active");  

//          td.addEventListener('click',func);
//         })
//         td.removeEventListener("click", func);
// 	});

// }


// 12
// чередование цветов: пусть первая ячейка красится в красный, вторая - в зеленый, третья - опять в красный
// let tds = document.querySelectorAll('#table td');

// let color = 'color1';
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color == 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}
		
// 		this.classList.add(color);
// 	});
// }

// произвольное кол-во цветов
// let tds = document.querySelectorAll('#table td');

// let i = 0;
// let colors = ['color1', 'color2', 'color3'];

// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.classList.add(colors[i]);
		
// 		i++;
// 		if (i == colors.length) {
// 			i = 0;
// 		}
// 	});
// }