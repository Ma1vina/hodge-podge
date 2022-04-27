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
//вывести вновый массив одинаковые числа массивов
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
	
//Разность массивов,если в массиве есть эелементы которые не одинаковы - вывести в новый массив
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



//Найти общие делители 12 и 18
function getDivisors (num){
    let arr = [];
    for(let i = 0; i<=num;i++){
        if(num% i ==0){
            arr.push(i)
        }
    }
    return arr;
}
function compare(num1,num2){
    let arr1 = (getDivisors(num1));
    let arr2 = (getDivisors(num2));
    let arr = [];
    for(let elem of arr1){
        if(inArrayelem(elem,arr2)){ // ОБЩИЕ ДЕЛИТЕЛИ
            arr.push(elem)
        }
        }
        return arr;// теперь в массиве общие делители
    }
    function inArrayelem(elem,arr){
        if(arr.indexOf(elem) !== -1){
            return true
        }else{
            return false
        }
    } // перебрать элементы в двух массивах относительно друг друга

    console.log(compare([1,2,3],[2,3]));

    //общие делители нашли, теперь найти из них наиобльший( 12 и 18 числа):
     function bigDivisors (num1,num2){
         let arr = []
         let x = compare(num1)
         let y = compare(num2)
      arr = (x,y)
      let max = Math.max.apply(null,arr);
      return max;
     }
      
console.log(bigDivisors(12,18));
