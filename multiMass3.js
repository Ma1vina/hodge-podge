//МНОГОМЕРНЫЕ МАССИВЫ
//Вручную, без цикла, найдите сумму элементов этого массива. \\55 summ
// let arr = [
//     [1, 2, 3, [4, 5, [6, 7]]],
//      [8, [9, 10]]
// ];
// let summ = arr[0][0]+arr[0][1]+arr[0][2]+arr[0][3][0]+arr[0][3][1]+arr[0][3][2][0]+arr[0][3][2][1]+arr[1][0]+arr[1][1][0]+arr[1][1][1];
// console.log(summ);

//Задачка 1. вывести все элементы на экран
// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
// for (let subArr of arr) { // подмассивы в массиве
// 	for (let elem of subArr) { // элементы подмассивов
// 		console.log(elem);
// 	}
// }

//Задачка 2
//С помощью вложенных циклов найдите сумму элементов этого массива.
// let arr = [[1, 2, 3], [4, 5], [6]];
// let summ=0;
// for(let subArr of arr){
//     for(let elem of  subArr){
//         summ = summ +elem
//     }
// }
// console.log(summ);

//Задачка 3. С помощью вложенных циклов найдите сумму элементов этого массива.
//  let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let summ = 0;
// for(let elem of arr){ // элементы массива
// for(let subElem of elem){ // подэлементы элементов
// for(let subSubElem of subElem){ // подэлементы подэлементов
// summ = summ  + subSubElem;}
// }
// }
// console.log(summ);

//Задачка 4. Через обычный for вывести все элементы и найти сумму + вывести ее
//  let arr = [[1, 2, 3], [4, 5], [6]];
//  let summ = 0;
//  for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {  //меньше длины элемента (элемент - массив)
// 		console.log(arr[i][j]);
//         summ = summ + arr[i][j]
// 	}
// }
// console.log(summ);

//Задачка 5. найдите сумму элементов этого массива.
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let summ = 0;
// for(let i = 0; i< arr.length; i++){
//     for(let j =0; j < arr[i].length; j++){
//         for(let k =0; k < arr[i][j].length; k++){
//             console.log(arr[i][j][k]);

//             summ = summ + arr[i][j][k];
//         }
//     }
// }
// console.log(summ);

//СОЗДАНИЕ МНОГОМЕНРНЫХ МАССИВОВ
//Создайте такой массив: [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; // создаем подмассив 3 шт

// 	for (let j = 0; j < 4; j++) {    //до числа 4
// 		arr[i][j] = j + 1; // заполняем подмассив числами
// 	}
// }
// console.log(arr);

// ИЛИ с push:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 4; j++) {
// 		arr[i].push(j + 1); // вместo [j] будет push
// 	}
// }
// console.log(arr);

//Задача 1. Создайте массив:
// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
// let arr = [];
// for(let i = 0; i < 3; i++){
//     arr[i] =[];
//     for(let j =0; j<5; j++){
//         arr[i][j] = j + 1;
//     }
// }
// console.log(arr);

//Задача 2. Создайте массив:
// [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']]
// let arr = [];
// for(let i = 0; i < 4; i++){
//     arr[i] = [];
//     for(let j =0; j<4; j++){
//         arr[i][j] = "x";
//         // // или :
//         // arr[i].push("x");
//     }
// }
// console.log(arr);

//Задачка 3. Сформируйте следующий массив: (3-х мерный)
//  [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]
// let arr = [];
// for(let i = 0; i< 3; i++){
//     arr [i] = [];
//     for(let j = 0; j<2; j++){
//         arr[i][j] = [];
//         for(let k = 0; k<5; k++){
//              arr[i][j][k] = k +1;
//           // или  arr[i][j].push(k+1);
//         }
//     }
// }
// console.log(arr);

//ЗАПОЛНЕНИЕ ЧИСЛАМИ ПО ПОРЯДКУ
// [[1, 2, 3, 4], [5, 6, 7, 8], [ 9, 10, 11, 12]]

// let arr = [];
// let k = 1; // счетчик
// for (let i = 0; i < 3; i++) {  // 3 элемента
// 	arr[i] = [];
// 	for (let j = 0; j < 4; j++) {
// 		arr[i][j] = k; // записываем счетчик
// 		k++; // увеличиваем счетчик
// 	}
// }
// console.log(arr);
//ИЛИ
// let arr1 = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr1[i] = [];
// 	for (let j = 0; j < 4; j++) {
// 		arr1[i][j] = k++;
// 	}
// }
// console.log(arr1);

//Задачка 1. Создайте массив [[1, 2], [3, 4], [5, 6], [7, 8]].
// let arr = [];
// let f = 1; // счетчик, будет начинаться отсчет с 1
// for(let i = 0; i< 4; i++){ //4 элемента(подмассива) в массиве
//     arr[i] = [];
//     for(let j = 0; j<2; j++){ // 2 элемента в подмассивах
//      arr[i][j] = f;
//      f++; //  в каждой итерации увелич.
//     }
// }
// console.log(arr);

//Задачка 2. Создайте массив [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// let arr = [];
// let d  = 1;
// for(let i = 0; i< 2; i++){ // два больших массива
//     arr[i] = [];
//     for(let j = 0; j<2; j++){ // два подмассива
//         arr[i][j] = [];
//         for(let k = 0; k<2; k++){ //два элемента
//             arr[i][j][k] = d;
//             d++;
//         }
//     }
// }
// console.log(arr);

//массив на подмассивы, разбить массив
const arr = [1, 2, 3, 4, 5, 6];
let size = 3;
function sliceArr(arr, size) {
    const res = [];
    for (let i = 0; i < arr.length; i = i+ size) {
        const x = arr.slice(i, i + size);
        res.push(x);
    }
    return res;
}


console.log(sliceArr(arr, size));