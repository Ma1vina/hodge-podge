"use strict"
// 1
// setInterval(function() {
// 	console.log('hey');
// }, 3000);


// 2
// let i = 0;

// setInterval(function() {
// 	i++;
// 	console.log(i);
// }, 1000);
//или
// let i = 0;
// setInterval(() => console.log(++i), 1000);

// 3
// Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет
//  уменьшать значение этой переменной на 1 и выводить это значение в консоль.
// let i = 100;

// setInterval(() => console.log(i--),1000);

// 4
// Запустим таймер, выводящий в консоль числа по возрастанию, начиная с 1. Остановим таймер, как только на экран будет
//  выведено число 10:

// let i = 0;
// let timerId = setInterval(function() {
// 	console.log(++i);
	
// 	if (i >= 10) {
// 		clearInterval(timerId);
// 	}
// }, 1000);


// 5
// Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет 
// уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной 
// достигнет 5 - остановите таймер.
// let i = 10;
// let timerId = setInterval(function(){
//     console.log(i--);
//     if(i < 5){
//         clearInterval(timerId);
//     }
// },1000)


// 6
// Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую
//  кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение 
//  в консоль. Как только значение переменной достигнет нуля - остановите таймер.
// По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, 
// но значение переменной достигло нуля.

// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2")

//  let timerId;

// btn1.addEventListener("click",function func(){
//     let i = 10;
// timerId = setInterval(function(){
//     console.log(--i);
//     if(i<1){
//         clearInterval(timerId);
//     }
// },1000);
// this.removeEventListener("click",func)
// });

// btn2.addEventListener("click",function(){
//     clearInterval(timerId);
// })

// 7
// по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени:


let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let timerId;

start.addEventListener('click', function func() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getHours() + ":" + date.getMinutes() + ':' + date.getSeconds());
	}, 1000);
    this.removeEventListener("click",func)
    this.addEventListener('click',func)
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
});


