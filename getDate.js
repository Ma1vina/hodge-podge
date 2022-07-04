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
let date = new Date();

function func(num){
    return (7 - date.getDay());
}

console.log(func(date));

