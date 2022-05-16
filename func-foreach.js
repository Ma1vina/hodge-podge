"use strict"
//Задача 1.Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.

let arr = [1,2,3,4];
let sumSquare =0;
let summm = arr.forEach(function(elem){
let square = elem*elem;
sumSquare = sumSquare + square;
})
console.log(sumSquare);

