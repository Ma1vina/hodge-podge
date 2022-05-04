// let arr = [
// 	function() {alert('1')},
// 	function() {alert('2')},
// 	function() {alert('3')},
// ];
// alert(arr[0]); // увидим исходный код первой функции


/////// Вызов функции просиходит с помошщью круглых скобок
// let arr = [
// 	function() {alert('1')},
// 	function() {alert('2')},
// 	function() {alert('3')},
// ];
// arr[0](); // выведет '1'


//////
// let arr = [
// 	function() {alert('1')},
// 	function() {alert('2')},
// 	function() {alert('3')},
// ];
// for (let func of arr) {
// 	func(); // вызываем наши функции в цикле
// }



//Задача 1.Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
// let arr = [
//     function() {return 1},
//     function() {return 2},
//     function() {return 3},
// ];
// for( let func of arr){
//     func();
// }
// console.log(arr[0]()+arr[1]()+arr[2]());

//Задача 2.Переберите созданный вами массив arr циклом и выведите результаты работы всех функций на экран.
let arr = [
    function() {return 1},
    function() {return 2},
    function() {return 3},
];
for( let func of arr){
    console.log(func());
}