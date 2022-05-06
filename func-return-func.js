// Задача 1. Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную 
// функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

// function func1(){
//     return function(){
//        return 1 ;
//     }
// }

// function func2(){
//     return function(){
//        return 2 ;
//     }
// }
// console.log(func2()()+func1()());

//Вложенность любого уровня:
//Задача 2.Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.

// function func(){
//     return function (){
//     return function (){
//     return function (){
//     return function (){
//         return "!";
//     }
//     }
//     }
//     }
// }
// console.log(func()()()()());

//Задача 3. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

// function func (num){
//     return function(num1){
//         return function(num2){
//             return num+num1+num2;
//         }   
//     } 
// }
// console.log(func(1)(2)(2));

// Задача 4. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в
// параметры чисел.

// function func (num1){
//     let arr = [];
//     return function(num2){
//         return function(num3){
//             return function (num4){
//                 return function(){
//                     arr.unshift(num1,num2,num3,num4);
//                     return arr;
//                     }
//                 }
//             }
//         }
//     }
// console.log(func(2)(3)(4)(5)());



