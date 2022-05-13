"use strict"

//Вывести на экран все примитивы в массиве:
// let arr = [
// 	1,
// 	[
// 		2, 7, 8
// 	],
// 	[
// 		3, 4, [5, [6, 7]],
// 	]
// ];


// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			console.log(elem);
// 		}
// 	}
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);


//Задача 1. Дан многомерный объект произвольного уровня вложенности, например, такой:
//С помощью рекурсии выведите все примитивные элементы этого объекта на экран.

// let obj = {
//     a: 1,
//     b: {c: 2, d: 3, e: 4},
//     f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}
//            };

//   function sortSimpleDigit (obj){
//       for( let key in obj){
//           if(typeof obj[key] == "object"){
//          sortSimpleDigit(obj[key]);
//           } else{
//               console.log(obj[key])
//           }
//       }
//   }
// sortSimpleDigit(obj);


// Напишите код, который развернет наш многомерный массив в одномерный. 
//     [1, 
//     [2, 7, 8],
//      [3, 4, [5, [6, 7]]]
//     ]
 //Для приведенного выше массива это будет выглядеть вот так:
// [1, 2, 7, 8, 3, 4, 5, 6, 7];

// let arraysOfArrays = [1, [2, 7, 8],[3, 4, [5, [6, 7]]]];

// function getMassive (multiArr){
//     let arr = [];
//     function sortMass (multiArr){
//     for(let i=0; i<multiArr.length;i++){
//         if (typeof multiArr[i] == 'object') {
//             sortMass(multiArr[i])
//     }else{
//     arr.push(multiArr[i]);
//     }
//     }
//     return arr;
// }
// console.log(sortMass(multiArr));
// }
// getMassive(arraysOfArrays);


// найти сумму примитивных элементов  массива:
// function func(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			sum = sum + func(elem);
// 		} else {
// 			sum = sum +elem;
// 		}
// 	}
// 	return sum;
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

 //Задача 3.Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1,
//  b: {c: 2, d: 3, e: 4},
//  f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии найдите сумму элементов этого объекта.

// let obj = {a: 1,
//       b: {c: 2, d: 3, e: 4},
//       f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

// function getSum (objj){
//     let sum = 0;
//     for(let key in objj){
//         if(typeof objj[key] == "object"){
//             sum = sum + getSum(objj[key])
//         }else{
//             sum = sum +objj[key]
//         }
//     }
// return sum;
// }
// console.log(getSum(obj));


// Задача 4. Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
//let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// С помощью рекурсии слейте элементы этого массива в одну строку:
// 'abcdefgjk'

// function arrStr(arr){
// let str = "";
// for(let elem of arr){
// if(typeof elem == 'object'){
//         str = str + arrStr(elem)
//     }else{
//         str = str + elem;
//     }
// }
// return str;
// }

// console.log(arrStr(arr));

//ИЛИ:  

    //     function sortMass (multiArr){
    //         let str = "";
    //     for(let i=0; i<multiArr.length;i++){
    //         if (typeof multiArr[i] == 'object') {
    //             let y =sortMass(multiArr[i])
    //             str = str + y
    //     }else{
    //     str = str + multiArr[i]
    //     }
    //     }
    //     return str;
    // }
    // console.log(sortMass(arr));


    //ЗАДАЧА. Прибавим к каждому элементу "!":
    // function func(arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //         if (typeof arr[i] == 'object') {
    //             arr[i] = func(arr[i]);
    //         } else {
    //             arr[i] = arr[i] + '!';
    //         }
    //     }
        
    //     return arr;
    // }
    // console.log(func([1, [2, 7, 8], [3, 4, [5, 6]]]));

//Задача. Дан многомерный массив произвольного уровня вложенности, например, такой:
// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
//Возведите все элементы-числа этого массива в квадрат.

// function getSquareElemOfArr (arrs){
//     for(let i=0; i<arrs.length; i++){
//         if (typeof arrs[i] == 'object') {
//             arrs[i] = getSquareElemOfArr(arrs[i])
//     }else{
//     arrs[i] = arrs[i]**2
//     }
// }
// return arrs
// }
// console.log(getSquareElemOfArr(arr));










