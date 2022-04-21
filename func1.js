//Задача 1.Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.
// function sum() {
//     let summ = 0;
//     for(let i=0; i<=100; i++){ 
//        summ = summ + i;
//     }
//     console.log(summ);
// }
// sum();

//PЗадачка 2.
//Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.
// В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.

// function x(numb) {
//    if(numb<0){
//        console.log("---");
//    } else{
//        console.log("+++");
//    }
// }
// x(-1);
// x(3);

//Задачка 3.
// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }

// func(2, 3); //5
// func(3); //3
// func() //0

//Задача 4
// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. 
// С помощью этой функции найдите корень числа 3, затем найдите корень числа 4.
//  Просуммируйте полученные результаты и выведите их на экран.
// function x (num){
//     return Math.sqrt(num)
// };
// let result = x(3) + x(4);
// console.log(result);

//Задача 5. Возвести число 2 в квадрат потом в куб  с помощью вложенных функций.
// function square(num) {
// 	return num * num;
// }
// function cube(num) {
// 	return num * num * num;
// }
// let result = cube(square(2));
// console.log(result);

// Задача 6. С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }
// let result = round(sqrt(2));
// console.log(result);

//Задачка 7. сумму цифр от 1 до 5
// function func() {
// 	let sum = 0;
	
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 	}	
// 	return sum;
// }
// let result = func();
// console.log(result); // выведет 15

// function func(num) {
// 	let sum = 0;
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 	}
//     return sum;
// }
// console.log( func(5) );//15

// Функция, которая определяет, сколько первых элементов массива нужно сложить,
//  чтобы сумма стала больше или равна 10:
// function func(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum = sum + arr[i];
// 		if (sum >= 10) {
// 			return i + 1; // выходим из цикла и из функции
// 		}
// 	}
// }
// let result = func([1, 2, 3, 4, 5]);
// console.log(result);


//Функция, которая вычисляет, сколько целых чисел, начиная с 1, нужно сложить, чтобы результат был больше 100:
// function func() {
// 	let sum = 0;
// 	let i = 1;
// 	while (true) { // бесконечный цикл
// 		sum = sum + i;
// 		if (sum >= 100) {
// 			return i; // цикл крутится пока не выйдет тут
// 		}
// 		i++;
// 	}
// }
// console.log( func() );

// Задача 10
// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз,
//  пока результат не станет меньше 10. Пусть функция возвращает количество итераций,
//  которое потребовалось для достижения результата.

// function result(num) {
//     let i = 1;
//     while(true){ //цикл будет выполняться постоянно
//     num = num/2; // делит число и если
//     if(num < 10){  //если число меньше 10,
//     return i;    // тогда return i =1 ( наш счетчик)
// }
// 		i++; //увеличить на один если цикл выполнился, .т.е. подсчитать итерации
// 	}
// }
// console.log( result(36) );

//Задача 11 Перепишите функцию в сокращенной форме согласно изученной теории:
// function func(num1, num2) {
// 	let result;
// 	if (num1 > 0 && num2 > 0) {
// 		result = num1 * num2;
// 	} else {
// 		result = num1 - num2;
// 	}
// 	return result;
// }
// alert(func(3, 4));
// :
// function x(num1,num2){
//     if(num1>0 && num2>0){
//         return num1*num2;
//     }else{
//         return num1 - num2;
//     }
// }
// console.log(x(2,2));

