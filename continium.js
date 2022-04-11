// //числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3,
// // возведем в куб и выведем в консоль. Вот решение описанной задачи:

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let elem of arr) {
// 	let result;
	
// 	if (elem % 2 === 0) {
// 		result = elem * elem;
// 		console.log(result);
		
// 	} else if (elem % 3 === 0) {
// 		result = elem * elem * elem;
// 		console.log(result);
		
// 	}
// }
// //вынесем result за if, вот так:

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let elem of arr) {
// 	let result;
	
// 	if (elem % 2 === 0) {
// 		result = elem * elem;
// 	} else if (elem % 3 === 0) {
// 		result = elem * elem * elem;
// 	}
	
// 	console.log(result); // вынесли вывод за условие
// }
//чтобы result не обрабатывал остальные элементы, к if еще условие else,
// которое будет срабатывать для элементов, не делящихся на 2 и 3, и 
//вызовем там инструкцию continue, которая сразу же будет перебрасывать нас на новую итерацию цикла:

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr1) {
	let result;
	
	if (elem % 2 == 0) {
		result = elem * elem;
	} else if (elem % 3 == 0) {
		result = elem * elem * elem;
	} else {
		continue; // перейдем на новую итерацию цикла
	}
	
	console.log(result); // выполнится, если делится на 2 или 3
}