 //Вложенные функции:
// function func(num1, num2) {
// 	function square(num) {
// 		return num * num;
// 	}
	
// 	return square(num1) + square(num2);
// }

// console.log(func(2, 3)); 

 //Попытка вызвать square снаружи func приведет к ошибке:
// function func(num1, num2) {
// 	function square(num) {
// 		return num * num;
// 	}
	
// 	return square(num1) + square(num2);
// }
// console.log(square(2)); // выдаст ошибку

// Задача 1. Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого
//  числа с кубом второго числа.  Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и
//   вспомогательную функцию cube, возводящую число в куб.

// function func (num1, num2){
//     return getSquare(num1) + getCube(num2);
// }
// function getSquare(num){
//     return num**2;
// }
// function getCube(num){
//     return num**3;
// }
// console.log(func(1,2));


