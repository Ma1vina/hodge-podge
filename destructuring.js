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
// function func() {
// 	return (new Date).getDate();
// }
// let arr = [2022, 6];
// let [year, month, day = func()] = arr; //значение по умолчанию - текущ день неделти

// console.log(day);


//
// function func() {
// 	return (new Date).getFullYear();
// }

// let obj = {
// 	month: 12,
// 	day:   31,
// };

// let {year = func(), month, day} = obj;

// console.log(year);

//
// function func() {
// 	return obj = {
// 		year:  2025,
// 		month: 12,
// 		day:   31,
// 	};
// }

// let {year, month, day} = func();


//
// func([2025, 12, 31]);

// function func([year, month, day]) {
// 	console.log(year);  // выведет 2025
// 	console.log(month); // выведет 12
// 	console.log(day);   // выведет 31
// }

//Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func([name,surname,info]) {
// 	console.log(name);
// 	console.log(surname);
// 	console.log(info);
// }

// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

//переделайте следующий код через деструктуризацию согласно изученной теории:

function func([name,surname,info=1]) {
		console.log(name);
	console.log(surname);
	console.log(info);

}

let arr =['Иван', 'Иванов']
func(arr);

