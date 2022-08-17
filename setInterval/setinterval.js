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
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;

// start.addEventListener('click', function func() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getHours() + ":" + date.getMinutes() + ':' + date.getSeconds());
// 	}, 1000);
//     this.removeEventListener("click",func)
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
//     //привязать продолжение таймера
// });

// 8
// elem.addEventListener('click', function() {
// 	let self = this;
	
// 	setInterval(function() {
// 		console.log(self.value);
// 	}, 1000);
// });


// 9
// Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1. Однако,
//  по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода. Напишите текст, в котором вы дадите
//   объяснение автору кода, почему возникла его ошибка.
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
//     let self = this;
// 	setInterval(function() {
// 		self.value = Number(elem.value) + 1;
// 	}, 1000);
// });

//или через стрелочную
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
//     let self = this;
// 	setInterval(() => self.value = Number(elem.value) + 1, 1000);
// });

//или через замыкание
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	function func(self) {
// 		return function() {
// 		return self.value = Number(elem.value) + 1;
// 		}
// 	}
	
// 	setInterval(func(this), 1000);
// });

// или передать контекст через параметр
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(func, 1000, this); // параметром передаем this
	
// 	function func(self) { // в self попадает this
// 		console.log(self.value);
// 	}
// });

//Сделаем более компактное решение через анонимную функцию:

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(function(self) {
// 		console.log(self.value);
// 	}, 1000, this);
// });

// 9
// Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду уменьшалось на 1. Однако, по нажатию
//  на кнопку вообще ничего не происходит. Исправьте ошибку автора кода, используя изученный в данном уроке способ.

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(function(self) {
// 		self.value = Number(self.value)-1;
// 	}, 1000, this);
// });

// 10
// Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду
//  будет увеличивать текст абзаца на 1

// let btn = document.querySelector("input");
// let p = document.querySelector("p");

// btn.addEventListener("click", function(){
//     setInterval(function(){
//         p.innerHTML = Number(p.innerHTML) + 1
//     },1000);
// })

// 11
// Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который
//  каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.

// let btn = document.querySelector("input");
// let p = document.querySelector("p");
// let timerId;

// btn.addEventListener("click", function(){
//    timerId = setInterval(function(){
//         p.innerHTML = Number(p.innerHTML)-1;
        
//         if(Number(p.innerHTML) <= 0){
//             clearInterval(timerId);
//         }
//                          },1000);
//       });

// 12
// Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
// let elem = document.querySelector("input");
//  setInterval(function(){
//     elem.value = (Number(elem.value))**2
// },1000);


// 13
// Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, 
// начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится

// let input = document.querySelector('#result'),
//     sec = document.querySelector('#sec');
 
// input.addEventListener('focusout',()=> {
//     sec.textContent = +input.value+1;
//     timer();
// });
 
// function timer(){
//     if(sec.textContent > 0){
//         setTimeout(timer,1000);
//         sec.textContent = --sec.textContent;
//     }
//     else sec.textContent = 'Конец';
// }

// 14
// Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст
//  абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет
//   до нуля.
// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let p = document.querySelector("p");

// btn.addEventListener("click",function(){
// p.textContent = (Number(inp.value))+1;
// func();
// })

// function func(){
//   if(p.textContent > 0){
//             setTimeout(func,1000);
//            p.textContent = --p.textContent;
//         }
// }

// 15
// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до 
// бесконечности, а по нажатию на вторую таймер останавливался.

// let p = document.querySelector("p");
// let btn1=document.querySelector("#btn1");
// let btn2= document.querySelector("#btn2");
// let timerId;

// btn1.addEventListener("click", function(){
//   timerId = setInterval(function(){
//     p.innerHTML = +p.innerHTML +1;
//   },1000)
// })

// btn2.addEventListener("click",function(){
//   clearInterval(timerId);
// });

// 16
// Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
let p = document.querySelector("p");

setInterval(function(){
    if(p.style.color =='red') {
      p.style.color = 'green';
     } else {
      p.style.color ='red';
    }
    },1000)


