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


