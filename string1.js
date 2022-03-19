let str1 = "xxx";
let str2 = "yyy";
console.log(`aaa ${str1} bbb ${str2} ccc`); //можно помещать переменные в фигурные скобки+ косые кавычки

let text = `hello,
marina`; // перенос строки, благодаря косым кавычкам
console.log(text);

let a = (-'5') + (-'2');
console.log(a);

let num = parseInt('12px');
console.log(num); // отбросить текст от числа // выведет 12,   важно!:но только целое число

let num1 = 12345;
let str = String(num1); // преобразуем наше число к строке
console.log(str.length);     // найдем длину строки

// alert('a' + true);    // выведет 'atrue'
// При приведении к числу значение true преобразуется в число 1, а значение false - в число 0:

// alert(Number(true));  // выведет 1
// alert(Number(false)); // выведет 0
// Во всех математических операциях логические значения вначале преобразуются к числу. Пример:

// alert(true + 1);     // выведет 2
// alert(true + true);  // выведет 2