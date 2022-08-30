'use strict'
// 1
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.

let str = 'ahb acb aeb aeeb adcb axeb';

let y = "ahb".replace(/a.b/g, "!");
console.log(y);

let x = str.replace(/a/g, "!");
console.log(x);