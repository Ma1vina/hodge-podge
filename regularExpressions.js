'use strict'
// 1
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.

// let str = 'ahb acb aeb aeeb adcb axeb';

// let x = str.replace(/a/g, "!");
// console.log(x);

// let x ='ahb acb aeb aeeb adcb axeb'.replace(/a.b/g, '!');
// console.log(x)

// 2
// Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.
// let str = 'aba aca aea abba adca abea';
// let x = str.replace(/a..a/g, "!",);
// console.log(x);

// 3
// Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.
// let str = 'aba aca aea abba adca abea';

// let x = str.replace(/ab.a/g, "!");
// console.log(x);

// 4
// let str = 'aa aba abba abbba abca abea';
// Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону: буква 'a', буква 'b' один раз или ниодного,
// буква 'a'.
// let x = str.replace(/ab?a/g, "!");
// console.log(x);

// 5
// let str = 'aa aba abba abbba abca abea';
//Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое
// количество раз (в том числе ниодного раза), буква 'a'.
// let x = str.replace(/ab*a/g, "!");
// console.log(x);

// 6
// let str = 'ab abab abab abababab abea';
// Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.

// let x = str.replace(/(ab)+/g, "!");
// console.log(x);

// 7
// let str = '23 2+3 2++3 2+++3 345 567';
// //Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные (+ может быть любое количество).
// let x= str.replace(/2\++3/g, "!");
// console.log(x);

// 8
// let str = '23 2+3 2++3 2+++3 445 677';
// // Напишите регулярку, которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальные.
// let x = str.replace(/2\+*3/g, "!");
// console.log(x);

// 9
// let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.
// let x = str.replace(/\*q+\+/g, "!");
// console.log(x);

// 10
// let str = 'aa aba abba abbba abbbba abbbbba';
// // Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).
// let x = str.replace(/ab{4,}a/g, "!");
// console.log(x);

// 11
// let str = 'aba accca azzza wwwwa';
// // Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. 
// // Между буквами a может быть любой символ (кроме 'a').

// let x = str.replace((/^a.+?a$/, '!'))
// console.log(x);

// 12
// let str = 'a1a a2a a3a a4a a5a aba aca';
// // Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.
// let x = str.replace(/a\d{1}a/g, "!");
// console.log(x);


// 13
