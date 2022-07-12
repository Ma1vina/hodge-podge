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

// let date = new Date(2018, 0, 1, 23, 0, 60);
// console.log(date);


// узнать високовсный ли год по февралю
// let date = new Date(2012, 2, 0);
// let x = date.getDate();
//         let day1 = 28;
//        if(x == day1){
//             console.log("год не высокосный - 28 дней в феврале")
//         }else{
//             console.log("год высокосный - 29 дней в феврале")
//         }



//Нахождение последнего дня месяца
//         function getLastDay(month, year) { // функция должна принимать и год
//             let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //(lastDays[0]); кол-во дней в феврале
//             if (month != 1) {
//                 return lastDays[month]; // если не февраль
//             } else {
//                 // определяем кол-во дней в феврале по году и месяцу
//                 let date = new Date(year, month + 1, 0);
//                  return date.getDate();
//                 }
//             }
//             console.log(getLastDay(1,2012));

// //ИЛИ

//         function getLastDayOfMonth(year, month) {
//             let date = new Date(year, month + 1, 0);
//             return date.getDate();
//           }        
//     console.log(getLastDayOfMonth(2012, 0) ); // 31
//     console.log( getLastDayOfMonth(2010, 1) ); // 28

//Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный,
//и false - если нет.

//
// let year  = 2025;
// let month = 0;
// let day   = 32;

// let date = new Date(year, month, day);

// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	console.log('корректна');
// } else {
// 	console.log('некорректна');
// }


//Определите, какой день недели будет 31 декабря текущего года.
// let date = new Date();
// let day = new Date(date.getFullYear(),11,31);
// console.log(day.getDay());



///
// let now  = new Date(); // получаем текущий момент
// let date1 = new Date(now.getFullYear(), 6, 6); // получаем нашу дату
// //Полученный момент времени мы можем использовать, например, чтобы определить день недели, соответствующий этой дате:
// console.log(date1.getDay())

// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 25);
// console.log(date.getDay())

//
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth() - 6, 0);
// console.log(date);

//Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.
// let now = new Date();
// let date = new Date(now.getFullYear(),now.getMonth()-1,6);
// console.log(date.getDay());


//Определите, сколько дней между 1 января и 1 сентября текущего года.
// let now = new Date();
// let date1 = (new Date(now.getFullYear(),0,1));
// let date2 = (new Date(now.getFullYear(),8,1));
// let diff = date2 - date1
// console.log(diff/(1000*60*60*24));


//Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.
// let now = new Date();
// let date1 = (new Date(now.getFullYear(),now.getMonth(),20));
// let date2 = (new Date(now.getFullYear(),now.getMonth()+1,10));
// let diff = date2 - date1
// console.log(diff/(1000*60*60*24));


//Момент времени дня
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
// console.log(date);


// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
// let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(),now.getMinutes(),now.getSeconds());
// let diff = date2 - date;
// console.log(diff/(1000*60*60));

// Определите, сколько часов осталось до конца дня.
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(),  24, 0, 0);
// let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(),now.getMinutes(),now.getSeconds());
// let diff = date - date2;
// console.log(diff/(1000*60*60));


//
//найдем все первые числа месяцев текущего года, которые являются воскресеньем:
// let now  = new Date();
// let year = now.getFullYear();

// for (let month = 0; month <= 11; month++) {
// 	let date = new Date(year, month, 1);
	
// 	if (date.getDay() == 0) {
// 		console.log(year + '-' + month + '-1');
// 	}
// }


// Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке
// попадало на выходной день, то есть на субботу или на воскресенье.
// let now = new Date();
// let nowYear = now.getFullYear();
// let x = 0;
// for(let year = 2000; year<nowYear; year++){
//     let date = new Date(year,0,1);
//     if(date.getDay() == 6 || date.getDay() == 0){
//         x++;
// 	}
// }
// console.log(x);


// Определите, сколько секунд прошло с начала дня до настоящего момента времени.
// let now = new Date();
// let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(),now.getMinutes(),now.getSeconds());
// let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(),0,0,0);
// let diff = date1 - date2;
// console.log(diff/(1000));

///Определите, сколько дней осталось до нового года.
// let now = new Date();
// let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(),now.getMinutes(),now.getSeconds());
// let date2 = new Date(2023,0,1);
// let diff = date2 - date1;
// console.log(diff/(1000*60*60*24));

//Определите, сколько пятниц 13-е в текущем году.
// let now = new Date();
//  let year = new Date(now.getFullYear());
// let x = 0;
// for(let month=0;month<=11;month++){
//     let date = new Date(year, month,13);
//     if(date.getDay() == 5){
//         x++;
//     }
// }
// console.log(x);

//Определите, какой год был 9 месяцев назад.
// let now = new Date();
// let date2 = new Date(now.getFullYear(), now.getMonth()-9);
// console.log(date2.getFullYear());

// Определите, какой день недели будет в последнем дне текущего месяца.
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth()+1,0);
// console.log(date.getDay());

// Напишите код, который будет определять, високосный ли текущий/любой год.

// function checkLeapYear(year) {

//     const leap = new Date(year, 1, 29);
//     if (leap.getDate() === 29) {
//         console.log(year + ' высокосный');
//     } else {
//         console.log(year + ' не высокосный');
//     }
// }
// checkLeapYear(2024);
// //
//ТЕКУЩИЙ:
// let now = new Date();
// let date = new Date( now.getFullYear(), 1, 29);
// if(date.getDate()=== 29){
//     console.log("текущий год високосный");
// }else{
//     console.log("текущий год не високосный");
// }

//Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
// let date1 = '2020-11-31';
// let date2 = '2020-12-01';
// if(date1<date2){
//     console.log("date2 больше")
// }else{
//     console.log("date1 больше")
// }

// Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий полдень текущего дня.
//  Сравните два этих объекта и определите, был ли уже полдень или нет.
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(),now.getMinutes(),now.getSeconds());
// let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(),12,0,0);
// if(date2>date){
// console.log("полдень ещё не наступил");
// }else{
//     console.log("полдень уже наступил")
// }

// Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий 15 число текущего месяца.
//  Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.
// let now = new Date();
//  let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(),now.getMinutes(),now.getSeconds());
//  let date2 = new Date(now.getFullYear(), now.getMonth(),15);
//  if(date<date2){
//     console.log("половина не прошла")
//  }else{
//     console.log("половина прошла")
//  }

//сколько дней осталось до какого-нибудь праздника, например, до ближайшего Женского дня
// let now  = new Date();
// let date = new Date(now.getFullYear(), 2, 8); // текущий год

// let diff = date - now; // разница
// if (diff > 0) {
// 	console.log("еще будет")
// } else if (diff == 0) {
// 	console.log("сегодня")
// } else {
// 	console.log("в следующем году")
// }

//  Определите, сколько дней осталось до вашего ближайшего дня рождения.
// let now  = new Date();
// let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// let date = new Date(now.getFullYear(), 6, 10);
// let diff = date - date1;
// if (diff > 0) {
//    	console.log(diff/(1000*60*60*24) + "осталось дней")
// }else{
// if (diff == 0) {
//     console.log("0");
// } else {
//     date = new Date(now.getFullYear()+1, 6, 10);
//    let x = date - date1;
//    console.log(x/(1000*60*60*24))
//     }
// }

// Пусть теперь День Рождения может быть произвольным и содержится в переменных month и day. Определите, сколько дней
//  осталось до заданного этой датой праздника. Учтите при решении, что есть счастливчики, которые родились 29 февраля.
//   Не забудьте их учесть в вашем решении.

// function getdaysHappyBirthDay (month,day){
//     let now  = new Date();
//     let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     let date = new Date(now.getFullYear(), month,day);
//     let diff = date - date1;
//      if (diff > 0) {
//    	console.log(diff/(1000*60*60*24) + " осталось дней/дня")
// }else{
//     if (diff == 0) {
//             console.log("0");
//         } else {
//             date = new Date(now.getFullYear()+1, month, day);
//            let x = date - date1;
//            console.log(x/(1000*60*60*24))
//             }
//         }
// }

// getdaysHappyBirthDay(6,12);


// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом),
//  который приходится на эту дату.
let days = ["вс", 'пн' , 'вт' ,'чт' , 'пт', 'сб'];

function func(text){
    let arr = text.split(".").reverse()

    let year = arr[0];
    let month = arr[1];
    let day = arr[2];

   let date = new Date(year,month,day);
   let xxx = date.getDay();
   console.log(days[xxx]);

}
let text='11.6.2022'
func(text);