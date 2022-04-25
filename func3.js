// //Задача 1. Перепишите функцию код в сокращенной форме согласно изученной теории о конструкции if возвращающей булевы значения.
// function func(a, b) {
// 	if (a == b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// :
// function func(a,b){
//     return a==b;
// }
// console.log(func(3,2));

//Задача 2. Код должен найти сумму результатов работы двух функций:
// function func1() {
//     let num = 3;
// 	return num;
// }
// function func2() {
// 	let num = 5;
// 	return num;
// }
// console.log( func1() + func2() );

// Задача 3.Код должен найти сумму элементов массива, однако, ничего не выводит на экран:
// function func(arr) {
// 	let summ = 0;
// 	for (let elem of arr) {
// 		summ = summ + elem;
// 	}
// 	return summ;
// }
// let arr1 = [1, 2, 3, 4, 5];
// console.log(func(arr1));

// Задача 4.
// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:
// function add(num) {
// 	if (num <= 9) {
// 		return num + 0;
// 	} else{
//      return num
//     }
// }
// console.log(add(10));


// Задача 5. Код должен найти сумму элементов массива:
// let arr = [1, 2, 3, 4, 5];
// let sum1 = sum(arr);
// console.log(sum1);

// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res;
// }

// Задача 6. Код должен найти сумму цифр числа:
// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);
// function getDigitsSum(num) { 
// 	let arr = String(num);
//     let x = arr.split('');
//     let sum = 0;
// 	for (let elem of x) {
// 		sum = sum + Number(elem);
// 	}
// 	return sum;
// }

// Задачка 7.Проверить суммы пар цифр на равенство и вывести те которые равны между собой в новый массив.
// let result = [];
// let arr = [1524, 1321, 4563, 7144, 2879];

// for (let elem of arr) {
// 	if (checkDigitsPairsSum(elem)) {
// 		result.push(elem);
// 	}
// }
// console.log(result);

// function checkDigitsPairsSum(num) {
// 	let str = String(num);
// 	let sum1 = Number(str[0]) + Number(str[1]);
// 	let sum2 = Number(str[2]) + Number(str[3]);
	
// 	return sum1 == sum2;
// }

//Задачка 8.С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.
// let result = [];
// for(let i = 1; i <= 100; i++){
// if(isPrime(i)){
// result.push(i);
// }
// }
// console.log(result);

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }


//Задачка 9.С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.
// let result;
// for(let i = 1; i<=2030;i++){
//     if(getDigitsSum(i) == 13){
//         result = i;
// }
// }
// console.log(result);

// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
// 	return sum;
// }

//let nums = [123, 456, 789];

//Задача 10. Есть массив [123, 456, 789]
//Сделать так, чтобы цифры в каждом элементе массива были в обратном порядке.
// То есть из нашего массива сделаем следующий:
//[321, 654, 987]
// Некий программист уже написал код, реализующий описанную задачу:
// let nums = [123, 456, 789]; 
// let result = []; 
// for (let num of nums) {
//      result.push(String(num).split('').reverse().join(''));
//      }
//       console.log(result); // выведет [321, 654, 987]

// function ReversNum(num){
//     return String(num).split('').reverse().join('');
//     }
//     let nums = [123, 456, 789];
//     let result = [];
//     for (let num of nums) {
//     result.push(ReversNum(num));
//     }
//     console.log(result);

//Задача 11.Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа.
// let num1 = 234;
// let num2 = 531;

// function CheckSummNumb (numb){
//     let summ = 0;
//     let arr = String(numb).split('');
//     for(let i = 0; i<arr.length;i++){
//      summ = summ + Number(arr[i]);
//     }
//     return summ;
// }
//   if(CheckSummNumb(num1) == CheckSummNumb(num2)){
//       console.log("суммы равны");
//   }else{
//       console.log("не равны");
//   }

//Задача 12.Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные
//делители этих чисел (то есть исключая число 1 и само число). Некий программист уже написал решение задачи:
let nums = [12, 24, 35, 14];

function SortDivisors (num){
    let arr =  [];
    for(let i =2; i < num; i++){
        if(i % 2 == 0){
          arr.push(i);
        }
    }
    return arr;
}
console.log(SortDivisors(nums));

