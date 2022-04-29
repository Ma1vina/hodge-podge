//Задача 1. Сделайте функцию getPerfect, которая будет находить совершенные числа в
// заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.
//в промежутке от 1 до 28 == ответ должен быть [[6],[28]]

// function getnumb (num){ // находим делители числа num 
//     let arr= [];
//     for(let i = 0;i< num; i++){
//         if(num% i == 0){
//          arr.push(i);
//         }
//     }
//     return arr;
// }

// function getSumm (arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// // console.log(getSumm([1,2])); //(getSum(getnumb(num)))

// function comparisonSum (num){
//     let t = getSumm(getnumb(num))
//     if(num == t){
//         return true;
//     }else{
//         return false;
//     }
// }

// function getPerfect (min,max){ //от 1 до 28 включительно
//     let arr = [];
//     for(let i = min;i<=max;i++){
//        if(comparisonSum(i)){
//            arr.push([i])
//        }
// }
// return arr;
// }
// console.log(getPerfect(1,28));
// console.log(getPerfect(1,10000));

//Пересечение массивов:
//ЗАДАЧА 1.вывести вновый массив одинаковые числа массивов
// function inArray(elem, arr) {
// 	if (arr.indexOf(elem) == -1) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// }

// function getInt(arr1, arr2) {
// 	let result = [];
	
// 	for (let elem of arr1) {
// 		if (inArray(elem, arr2)) {
// 			result.push(elem);
// 		}
// 	}
	
// 	return result;
// }

// function inArray(elem, arr){
// 	return arr.indexOf(elem) !== -1;
// }

// console.log( getInt([1, 2, 3], [2, 3, 4, 5]) );
	
//ЗАДАЧА 2.Разность массивов,если в массиве есть эелементы которые не одинаковы - вывести в новый массив
// function getDiff(arr1, arr2) {
// 	let result = [];
	
// 	for (let elem of arr1) {
// 		if (!inArray(elem, arr2)) {
// 			result.push(elem);
// 		}
// 	}
//     function inArray(elem, arr){
// 	return arr.indexOf(elem) !== -1;
// }
	
// 	for (let elem of arr2) {
// 		if (!inArray(elem, arr1)) {
// 			result.push(elem);
// 		}
// 	}
	
// 	return result;
// }
// console.log( getDiff([1, 2, 3], [2, 3, 4, 5]) )



// //ЗАДАЧА 3.Найти общие делители 12 и 18 
// function getDivisors (num){  // ---- arr1 и arr2 делителей
//     let arr = [];
//     for(let i = 0; i<=num;i++){
//         if(num% i ==0){
//             arr.push(i)
//         }
//     } 
//     return arr;  
// }
// function compare(arr1,arr2){
//     let arr = [];
//      for(let i=0; i<arr1.length; i++){
//          for(let j=0; j<arr2.length; j++){
//              if(arr1[i] == arr2[j]){
//                  arr.push(arr1[i])
//              }
//          }
//      }
//      return arr; //arr общих делителей
//     }
    
//   //теперь найдем наибольший делитель из arr oбщих делителей  (compare(num1,num2))
//   function getBigDivisor (num1,num2){
//       let arrCompare = [];
//        let arr1 = getDivisors(num1); //масс делителей+
//        let arr2 = getDivisors(num2); //масс делителей=
//        arrCompare = compare(arr1,arr2); // =общий делитель
//        let max = Math.max.apply(null,arrCompare) //наибольш.делитель
//    return max;
//   }
//   console.log(getBigDivisor(12,18));

//ЗАДАЧА 4. Напишите функцию, которая параметрами будет принимать два числа и проверять - взаимно простые они или нет.
// function getSimpleDigit (num1,num2){
//     let arrCompare = [];
//         let arr1 = getDivider(num1); //масс делителей+
//         let arr2 = getDivider(num2); //масс делителей=
//         arrCompare = compareArrDivisors(arr1,arr2); // =общий делитель
//         let max = Math.max.apply(null,arrCompare);//наибольш.делитель
//         return max == 1;
//         } 
   
// console.log(getSimpleDigit(14,25));

// function getDivider (num){ //найду делители числа
//     let arr = [];
//     for(let i = 0; i<num;i++){
//         if(num% i == 0){
//             arr.push(i)
//         }
//     }
//     return arr;
// }

// function compareArrDivisors (arr1,arr2){
//     let arr = [];
//     for(let i =0; i< arr1.length; i++){
//         for(let j =0; j< arr2.length;j++){
//          if(arr1[i] == arr2[j]){
//          arr.push(arr1[i]);
//         }
//     }
// }
// return arr; // вывели массив с общими делителями
// }

//ЗАДАЧА 5..Случайное число массива
// let arrArr = [6,1,5,2,6];
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min; //cлучайное число (базовая функция)
// }

// function random (arr){
//     return arr[getRandomInt(0, arr.length -1)]; 
// }
// console.log(random(arrArr));

// //ЗАДАЧА 6. Используя созданную функцию, найдите сумму трех случайных элементов из массива.
//  console.log(random(arrArr)+random(arrArr)+random(arrArr));


 //ЗАДАЧА 7. Перемешивание массива.
// let arr = [1,2,3,4,5];

//  function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;//получить случайное число
// }

// function shuffle (arr){
//     let newArr = [];
//     while(arr.length>0){ // пока длина больше 0 (длина уменьшается при вырезании-splice)
//     let elemRand = getRandomInt(0, arr.length -1) //случайное число от 0 до последнего элемента массива
//     let elems = arr.splice(elemRand,1)[0]; //вырезать элемент (случайный, 1) и вставить arr[0]
//     newArr.push(elems)
//     }
//     return newArr;
// }
// console.log(shuffle(arr));

//ЗАДАЧА 8. Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, и
// возвращающую массив, заполненный целыми перемешанными числами из этого диапазона.

//  function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;//получить случайное число
// }
// function inRangeGetMassShuffle (num1,num2){
//     let arr = [];
//     let newArr = [];
//     for(let i = num1; i<=num2;i++){ //
//         arr.push(i);
//     }
//     while(arr.length>0){
//         let elemRand = getRandomInt(0, arr.length -1)
//         let elems = arr.splice(elemRand,1)[0]; 
//         newArr.push(elems)
//     }
//     return newArr; 
// }
// console.log(inRangeGetMassShuffle(10,20));

//ЗАДАЧА 9. Вернуть 3 случайных элемента из масива(в новом массиве), должно выводиться каждый раз разные 3 элем.
// function randoms(arr, length) {
// 	return first(shuffle(arr), length);
// }

// function first(arr, length) {
// 	return arr.slice(0, length);
// }

// function shuffle(arr) {
// 	let result = [];
	
// 	while (arr.length > 0) {
// 		let random = getRandomInt(0, arr.length - 1);
// 		let elem = arr.splice(random, 1)[0];
// 		result.push(elem);
// 	}
	
// 	return result;
// }

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log( randoms([1, 2, 3, 4, 5], 3) );
