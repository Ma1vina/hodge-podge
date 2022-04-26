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
// let arr = [12, 19, 28, 13, 14, 345];
// let result = [];

// function inRange(num) {
// 	let sum = getSum(getDigits(num));
// 	return sum >= 1 && sum <= 9;
// }

// function getSum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
// 	return sum;
// }

// function getDigits(num) {
// 	return String(num).split('');
// }

// for (let elem of arr) {
// 	if (inRange(elem)) {
// 		result.push(elem);
// 	}
// }

// console.log(result);

//Задача 5. Запишите в новый массив только те элементы сумма которых равна до 10.
// let myarr = [222,555,666];
// let newarr = [];


// function strElemArr(num){
// 	return String(num).split("");
// }

// function getSum (arr){
// 	let sum = 0;
// 	for(let elem of arr){
// 		sum = sum + Number(elem)
// 	}
// 	return sum;
// } 

// function inRange (num){
// 	let sum = getSum(strElemArr(num));
// 	return sum < 10
// 	}

// for( elem of myarr){
// 	if(inRange(elem)){
// 		newarr.push(elem)
// 	}
// }

// console.log(newarr);

//Дружественные числа. ДЕЛИТЕЛИ
//На примере 220 и 284.(равна ли сумма делителей этих чисел)
// let numberss1 = 220;
// let numberss2 = 284;
// function isFriedly (num1,num2){
// 	sum1 = getSumm(getDivisors(num1));
// 	sum2 =getSumm(getDivisors(num2));
// 	return sum1 == num2 && sum2 == num1;
// }
// //узнаем делители числа, принимает число  и делает массив делителей
// function getDivisors (num){
// let arr = [];
// for(let i = 0;i< num;i++){
// 	if(num % i == 0){
// 		arr.push(i)
// 	}
// }
// return arr;
// }

// //узнаю сумму делителей
// function getSumm (arr){
// 	let sum = 0;
// 	for(let elem of arr){
//     sum = sum + elem
// 	}
// 	return sum;
// }

// console.log(isFriedly(numberss1,numberss2));

//Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке и
 //возвращать их в виде двухмерного массива вида следующего вида:
// [ [220, 284], [1184, 1210], [2620, 2924] ]
// С помощью созданной функции найдите все пары дружественных чисел на промежутке от 1 до 3000.



//находим делители числа! сделаем массив 
// function getDividerSum (num){
//    let arr = [];
// 	for(let i = 0; i< num; i++){
// 		if(num % i == 0){
//          arr.push(i);
// 		}
// 	}
// return arr;
// }

// //узнаем сумму делителей из массива 
// function getsumm (arr){
// 	let sum = 0;
// 	for( let elem of arr){
//      sum = sum + elem;
// 	}
// 	return sum;
// }

// //дружественны ли
// function isFriendly(num1, num2) {
// 	let sum1 = getsumm(getDividerSum(num1))
// 	let sum2 = getsumm(getDividerSum(num2))
	
// 	if (sum1 == num2 && sum2 == num1) {
// 	return true
// 	} else {
// 	return false
// 	}
// 	}

// //пихаем в массив(диапазон от 1 до 3000):
// function inRange(min, max) {
// 	    let arr = []
// 	    for (let i = min; i < max; i++) {//наш диапазон заключить в цикл
//    for (let j = i + 1 ; j < max; j++) {// i + 1 после первого индекса(вторым числом)
// 	  if (isFriendly(i, j)) {
//   arr.push([i,j])
// 	    }
// 	    }
// 	    }
// 	    return arr
// 	    }
	
	

// 		console.log(inRange(1,3000));