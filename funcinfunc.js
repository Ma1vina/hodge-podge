//Задача 1.Найдем квадрат суммы элементов этого массива, используя комбинацию приведенных выше функций:
// function getSum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }

// function getSquare(num) {
// 	return num * num;
// }
// console.log( getSquare(getSum([1, 2, 3, 4, 5])) );

//Задача 2. Используя комбинацию приведенных функций найдите сумму цифр числа 12345.
// function getDigits(num) {
// 	return String(num).split('');
// }

// function getSumm (num){
// 	let summ = 0;
// 	for(let i = 0; i < num.length;i++){
//     summ = summ + Number(num[i]);
// 	}
// 	return summ;
// }
// console.log(getSumm(getDigits(12345)));

// Задача 3.Дано число. Нужно найти его делители (без 1 и самого числа), а затем найти
//  среднее арифметическое (сумма делить на количество) делителей числа и вывести результат на экран. 
// 10
// function getDivisors(num){//массив делителей числа
// 	let arr = [];
// for (let i = 2; i < num; i++) {
// 	if (num % i == 0) {
// 	arr.push(i);
// 	}
// 	}
// 	return arr;
// 	}

// function getAvg(arr) {// среднее арифметическое
// 		let sum = 0;
// 		for (let elem of arr) {
// 		sum = sum + elem;
// 		}
		
// 		return sum/arr.length;
// 		}
		
// console.log(getAvg(getDivisors(10)));

//Задача 4. дан массив с числами, запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.
let arr = [12, 19, 28, 13, 14, 345];
let result = [];

function inRange(num) {
	let sum = getSum(getDigits(num));
	return sum >= 1 && sum <= 9;
}

function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += Number(elem);
	}
	return sum;
}

function getDigits(num) {
	return String(num).split('');
}

for (let elem of arr) {
	if (inRange(elem)) {
		result.push(elem);
	}
}

console.log(result);
