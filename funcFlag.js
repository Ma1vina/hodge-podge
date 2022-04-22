//Выяснить простое ли число, или составное:
// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// console.log(isPrime(32));

// Задача 1.
// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять,
//  что все элементы в этом массиве являются четными числами.
// function even (arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 1){
//          return false;
//         }
//     }
//     return true;
// }
// let arrs = [2,3,4];
// console.log(even(arrs));

// Задача 2
// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве
//  два одинаковых элемента подряд.
// function check(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] == arr[i+1]){
//             return true;
//         }
//     }
//     return false;
// }
// let arrs = [1,2,2,4];
// console.log(check(arrs));
