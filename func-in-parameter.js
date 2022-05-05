//ЗАДАЧА 1.Вывести на экран сумму результатов первой и второй функции:
// test(
// 	function() {return 1;},
// 	function() {return 2;}
// );

// function test(func1, func2) {
// 	console.log( func1() + func2() ); // выведет 3
// }

// Задача 2. Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию,
//  возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите на экран сумму
//   результатов функций.

// function test(func1,func2,func3){
//     console.log(func1() + func2() + func3());
//     }

//     let get1 = function(){return 1};
//     let get2 = function(){return 2};
//     let get3 = function(){return 3};
//     test(get1, get2, get3);


//////////////////////////////////////////
// function get1() {
// 	return 1;
// }
// function get2() {
// 	return 2;
// }
// test(get1, get2); // выведет 3

// function test(func1, func2) {
// 	console.log( func1() + func2() );
// }
//////////////////////////////////////////
// Переделаем на Function Expression:
// let get1 = function() {
// 	return 1;
// }
// let get2 = function() {
// 	return 2;
// }

// test(get1, get2); // выведет 3

// function test(func1, func2) {
// 	alert( func1() + func2() );
// }


//ЗАДАЧА 3. Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция
//  возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.
// function func1 (){
//     return 1;
// }
// function func2(){
//     return 2;
// }
// function func3(){
//     return 3;
// }

// test(func1,func2,func3);

// function test (func1,func2,func3){
// console.log(func1() + func2() +func3());
// }

//Задача 4.Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.
// let func1 = function (){
//     return 1;
// }
// let func2 = function (){
//     return 2;
// }
// let func3 = function (){
//     return 3;
// }

// test(func1,func2,func3);

// function test (func1,func2,func3){
// console.log(func1() + func2() +func3());
// }

/////////////////////////////////
// Анонимная функция:
// test(function(num) {
// 	return num * num;
// });

// function test(func) { // какой-то параметр
// 	console.log(func(3));
// }

// Задача 6.Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как
//  Function Declaration с именем func.
// function func(num){
//     return num**3; 
// }
// test(func);

// function test (func){
// console.log(func(2));
// }

//Задача 7. Переделайте передаваемую функцию на Function Expression с тем же именем func.
// let func = function(num){
//     return num**3; 
// }
// test(func);

// function test (func){
// console.log(func(2));
// }

//Задача 8. Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемая
//функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.
// function func(num1,num2){
//     return num1+num2;
// }
// test(func);
// function test(func){
//     console.log(func(2,3));
// }

//Число, с которым что-то делает передаваемая функция
// function test(num, func) {
// 	console.log(func(num));
// }

// test(2, function(num) {
// 	return num * num;
// });

// Задача 9.Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также
//  параметром принимающие числа.Пусть функция test возвращает сумму результатов переданных функций.
// Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат,
//  а третьим - функцию, возводящую число в куб. Выведите результат работы на экран.

// function test(num, getSquare, getCube) {
// 	return getSquare(num) + getCube(num);
// }

// function getSquare(num){
//     return num**2
// }

// function getCube(num){
//     return num**3
// }
// console.log(test(3,getSquare,getCube));

// Задача 11. Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция 
// вернула массив с кубами этих чисел.

// function test(arr, getCube){
//     for(let i = 0; i<arr.length; i++){
//         arr[i] = getCube(arr[i]);
//     }
//     return arr;
// }
 
// function getCube(num){
//     return num**3;
// }

// console.log(test([1,2],getCube));

// //или квадрат чисел:
// function test(arr, func) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}	
// 	return arr;
// }
// let result = test([1, 2, 3], function(num) {
// 	return num * num;
// });
// console.log(result); 
