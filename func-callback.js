
// Задача 2. Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном
// порядке.
// let arr = ["good", "game"];

// function each(arr, callback) {
// 	let result = [];
	
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
	
// 	return result;
// }

// function getStrBack(str){ 
//     let result = '';
//      for(let i = str.length - 1; i >= 0 ; i--){
//          result = result + str[i]
//         }
//           return result;
//         };

//         console.log(each(arr, getStrBack));

//////////////////////////////////////////////
// let result = each([1, 2, 3, 4, 5], function(num) {
// 	return num ** 3;
// });

// console.log(result);

//Задача 3. Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
// let arrStr = ["good", "day"];

// function each(arr, callback) {
//     	let result = [];
        
//     	for (let elem of arr) {
//     		result.push( callback(elem) ); 
//     	}
        
//     	return result;
//     }

//     console.log(each(arrStr, function(str){
//         let result = str.slice(0,1).toUpperCase() + str.slice(1);
//         return result;}));


//Задача 4. С помощью следующей функции возведите все элементы массива в куб:

// function square(num) {
// 	return num **3;
// }

// let result = each([1, 2, 3, 4, 5], square);
// console.log(result);

// function each(arr, callback) {
//         	let result = [];
            
//         	for (let elem of arr) {
//         		result.push( callback(elem) ); 
//         	}
            
//         	return result;
//         }