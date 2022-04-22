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

// Задача 15
// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
// //  Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.
// function reverseStr(str){
//     return ((str.split("")).reverse()).join("");
// }
// let word = "yes";
// console.log(reverseStr(word));

// Задача 16
// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы
//  с таким значением
// function delElem(num,arr){
//     let arr1 =[];
//     for(let i = 0; i < arr.length; i++){
//         if(num == arr[i]){
//             arr.splice(i,1);
//          }
//      }
//       return arr;
//  }
//  let newArr = [2,2,3,2];
//  let numb = 3;
//  console.log(delElem(numb,newArr)); 

// Задача 17
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции:
// console.log(func(5)); // выведет [1, 2, 3, 4, 5]
// function fillIn (num){
//     let arr = [];
//     for(let i = 1; i<=num; i++){
//         arr.push(i);
//     }
//     return arr;
// }
// let numb = 10;
// console.log(fillIn(numb));

// Задача 18.
// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел.
//  Пример работы такой функции:
// console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]

function giveMe(num1,num2){
    let arr = [];
    for(let i = num1; i<=num2; i++){
        arr.push(i);
    }
    return arr;
}
let s = 2;
let d = 7;
console.log(giveMe(2,7));

