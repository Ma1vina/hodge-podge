//Задача 1. Реализуйте счетчик вызова функции, работающий на замыканиях.
// function test() {
// 	let num = 1;
	
// 	return function() {
// 		alert(num);
// 		num++;
// 	};
// };

// let func1 = test(); // первый счетчик
// func1();  // 1
// func1();  // 2

// let func2 = test(); // второй счетчик
// func2();  //1
// func2();  // 2

// Задача 2. Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на
//  1 и выводил на экран уменьшенное число.

// function test() {
//     let num = 10;
//     return function() {
//     console.log(num);
//     num--;
//     }
//     }
//     let func = test();
//     func();
//     func();
//     func();

// Задача 3. Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции 
// выводил на экран сообщение о том, что отсчет окончен\

// function test() {
//         let num = 10;
//         return function() {
//             if(num>=0){
//         console.log(num);
//         num--;
//             }else{
//                 console.log("отсчет окончен");
//             }
//         }
//         }
//         let func = test();
//         func();
//         func();
//         func();
//         func();
//         func();
//         func();
//         func();
//         func();
//         func();
//         func();
//         func();
//         func();
//         func();
    



