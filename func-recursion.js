//С помощью рекурсии выведите элементы этого массива на экран.
// let arr = [1, 3, 3, 4, 5];
// let i = 0;

// function getElem (arr){
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length){
//        if(i !== undefined){
//   getElem(arr);
//  }
// }
// };
// getElem(arr);



//сумма элементов
// function getSum(arr) {
// 	let sum = arr.shift();
	
// 	if (arr.length !== 0) {
// 		sum += getSum(arr);
// 	}
	
// 	return sum;
// }

// console.log(getSum([1, 2, 3]));




//С помощью рекурсии найдите сумму квадратов элементов этого массива.
 let arr = [2, 2, 3, 4, 5];

function getSum(arr) {
	let sum = getSquare(arr.shift());
	if (arr.length !== 0) {
        sum += getSum(arr);
	}
	
	return sum;
}
    function getSquare (num){
        return num*num;
     }

     console.log(getSum(arr));
