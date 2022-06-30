'use strict'

//Destructuring

// let arr = [2025, 12, 31];
// let [year, month, day] = arr;

// console.log(year);  //  2025
// console.log(month); //  12
// console.log(day);   // 31


//
// function func() {
// 	return [2025, 12, 31];
// }

// let [year, month, day] = func();
// let x = func();

// console.log(x);


//
// let arr = [2025, 12, 31, 23, 59, 59];
// let [year, month, day, ...time] = arr;

// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);   // выведет 31

// console.log(time);  

//
function func() {
	return (new Date).getDate();
}
let arr = [2022, 6];
let [year, month, day = func()] = arr; //значение по умолчанию - текущ день неделти

console.log(day);

