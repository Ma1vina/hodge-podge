//Задача 1/ Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и 
//запишите результат в новый массив.
// let arr = [4,16,1];
// let result = arr.map(function(elem) {
//     return Math.sqrt(elem);
// });
// console.log(result);

// Задача 2/Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

// let arr = ["Marina","Dima"];
// let result = arr.map(function(elem){
//     let str = "!";
//     return str = elem + str;
// });

// console.log(result);

//Задача 3/Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
//  let arr = ["I","will","be"];
//  let result = arr.map(function(elem){
//      return elem.split("").reverse().join("")
//  });
//  console.log(result);


//задача//
// let arr = ['123', '456', '789'];
//Используя метод map преобразуйте этот массив в следующий:
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];

// let result = arr.map(function(elem){
// elem = elem.split('');

// let arrs = elem.map(function(subElem){
// return subElem = Number(subElem);
// })
// return arrs;
// })
// console.log(result);


//ЗАДАЧА. Запишем порядковый номер элемента в массиве
// let arr = ['a', 'b', 'c', 'd', 'e'];

// let result = arr.map(function(elem, index) {
// 	return elem + index;
// });

// console.log(result); // выведет ['a0', 'b1', 'c2', 'd3', 'e4']

// Задача 5. Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента,
// умноженное на его порядковый номер в массиве.

// let arr = [1,2,3];
// let result = arr.map(function(elem,index){
//    return elem*index;
// });
// console.log(result);

//ЗАДАЧА 6.Возвести каждый элемент в квадрат:

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map(function(elem) {
	return elem.map(function(num) {
		return num * num;
	});
});

console.log(result);



