"use strict"
// let date = new Date();
// console.log(date.getFullYear());


//Вывести текущий день,месяц,год
// let date = new Date();
// console.log(addZero(date.getFullYear()) + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate()));

// function addZero(num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }

//1.Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Используйте для всех частей даты 
//(кроме года) созданную нами функцию для добавления нуля при необходимости.

// let date = new Date();

// console.log((addZero(date.getHours()) + ":" + (addZero(date.getMinutes() + ":" + (addZero(date.getSeconds()))))));

// function addZero(num){
//     if(num>=0 && num<=9){
//         return "0" +num;
//     }else{
//         return num;
//     }
// }

//
// let str = '2025-12-31';
// let arr = str.split('-');
// let result = arr[2] + '/' + arr[1] + '/' + arr[0];

// console.log(result); 

//
// let date = new Date();
// console.log(func(date.getDay()));

// //Определите, является ли текущий день недели выходным или рабочим днем.
// function func(num){
//     if(num==0 || num==6){
//         return  num + " -выходной день!"
//     }else{
//         return num + " -будний день"
//     }
// }

//Определите сколько дней осталось до ближайшего воскресенья.
// let date = new Date();

// function func(num){
//     return (7 - date.getDay());
// }

// console.log(func(date));

//
// let date = new Date();
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);

//
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// // Выведите с помощью этого массива название текущего месяца.
// let date = new Date();
// let month = date.getMonth();

// console.log(months[month]);

//
// let date = new Date(2025, 10, 6); // установим 6 ноября 2025 года
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);


// Узнайте, какой день недели был в ваш день рождения.
// let date = new Date(1997, 8, 12); 
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);


//Выведите на экран количество дней, прошедшее между 1 марта 1998 года и 10 января 2000 года.
// let date1 = new Date(1998,2,1);
// let date2= new Date(2000,0,10);
// let diff = date2.getTime() - date1.getTime();
// console.log(diff/(1000*60*60*24));


//
//Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.

// let date1 = new Date(2010,1,15);
// let date2 = new Date(2000,8,1);
// let diff = date1 - date2;
// console.log(diff/(1000*60*60*24*30*12));


// let date = new Date(2018, -12, -33);
// console.log(date)

let date = new Date(2018, 0, 1, 23, 0, 60);
console.log(date);

