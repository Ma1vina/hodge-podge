// ОКРУГЛЕНИЕ с toFixed
let a = 0.1 + 0.2;
let y = a.toFixed(2);
console.log(y); // выведет 0.30  (но получится строка)

console.log(typeof(y)); // string
console.log(+y); // преобразование в число 

