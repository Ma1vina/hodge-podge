//Найдите с помощью приведенной функции сумму элементов массива.

// let arr = [1, 2, 3, 4, 5];

// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }

// console.log(func(...arr));

//задача 3.Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.

// let arr = [0,2,3,4];
// let min = Math.min(...arr);
// console.log(min);

//СЛИЯНИЕ МАССИВОВ:
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];
// let arr3 = [...arr2, 7, 8, 9];

// let arr  = [0, ...arr3];
// console.log(arr);


////////////////
// let arr = [...String(12345)]; // получится массив ['1', '2', '3', '4', '5']

//REST:
// function func(...nums) {
// 	console.log(nums);
// }

// func(1, 2, 3); // выведет [1, 2, 3]

//найдем сумму переданных чисел:
// function func(...nums) {
// 	let sum = 0;
	
// 	for (let num of nums) {
// 		sum += num;
// 	}
	
// 	return sum;
// }

// let result = func(1, 2, 3);
// console.log(result); // выведет 6

//Задача 1/ Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать
// их среднее арифметическое (сумма делить на количество).

function getResult(...rest){
    let sum = 0;
    let sum1 = 0;
    for (let num of rest) {
		sum += num;
        sum1= sum/rest.length
	}
    return sum1;
}
console.log(getResult(2,6,7));
