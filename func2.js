//Задача 12.Напишите функцию, которая будет находить сумму квадратов элементов массива.
//  function summ(arr){
//     let sum = 0;
// for(let i = 0; i< arr.length; i++){
//   sum = sum + Math.pow(arr[i],2);
// }
// return sum;
//  }
//  let arr1 = [2,2,2]
//  console.log(summ(arr1))

// Задача 13
// Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.
// function getDigitsSum(num){
//     let summ =0;
//     for(let i = 0; i<=num; i++){
//         summ = summ + i
//     }
//   return summ;
//  }

//  console.log(getDigitsSum(4));

// Задача 14
// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей,
//  то есть чисел, на которое делится наше число.К примеру, если
//   мы передадим число 24 - мы должны получить следующий массив:
// [1, 2, 3, 4, 6, 8, 12, 24]

// function getDivisors(num){
//     let arr = [];
//     for(i=0; i<=num; i++){
//         if(num % i === 0){
//            arr.push(i); 
//         }
//     }return arr;
//     }
//     console.log(getDivisors(24));