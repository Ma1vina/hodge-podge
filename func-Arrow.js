"use strict"
//Задача 1/ Дана следующая функция с коллбэком: Упростите коллбэк через стрелочную функцию.
// let result = every([1, 2, 3, 4, 5], function(elem) { if (elem > 0) { return true; } else { return false; } });


// let arr = [1, 2, 3, -4, -5];

//  let callback = elem => {
//      return elem>0;
//  }

//  let getDigit = (array, arriveCallback) => {
//      for(let i=0; i<array.length; i++){
//          if(arriveCallback(array[i])){
//              console.log(array[i])
//          }
//      }
//  }
//  getDigit(arr,callback);


///////////////////////////////////////////////
// let func2 = (num1, num2) => { 
//  return num1 * num2; 
// } 
// console.log(func2(2,2)); 
//////////////////////////////////////////


//Задача 2.Упростите коллбэк через стрелочную функцию.

// let result = every([1, 2, 3, 4, 5], function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });


//  let callback = (elem,index) => elem*index>10;
 
//  let getDigit = (array, funcCallbacks) => {
//      for(let i =0; i<array.length;i++){
//          if(funcCallbacks(array[i],i)){
//              console.log(array[i])
//          }
//      }
//  }

//  let arr = [1, 2, 3, 4, 50];
 
// getDigit(arr,callback);