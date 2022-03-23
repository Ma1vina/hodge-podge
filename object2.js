let obj = {1: 'a', 2: 'b', 3: 'c'};
console.log(obj); // выведет сам объект, не через алерт

//Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.

let win = {a:1, b: 2, c:3};
console.log(win["a"]+win["b"]);

//ключи объектов нельзя начинать на цифры, использовать пробелы,дефис и прочее (можно, но используй скобки)
let objj = {'1key': 'a', 'key-2': 'b', key3: 'c'};
console.log(objj['1key']);  // выведет 'a'
console.log(objj['key-2']); // выведет 'b'

console.log(objj['key3']);  // выведет 'c'
// или 
console.log(objj.key3);  // альтернативный вариант, но только для допустимых имен ключей



let obj1 = {key1: 1, key2: 2, key3: 3};
s = obj1.key1 + obj1.key2; // cумма
console.log(s);

////Создайте объект user с ключами name, surname, patronymic и какими-то произвольными значениями.
 //Выведите на экран фамилию, имя и отчество через пробел.
 let me  = {name: " Marina", surname: " Chekmeneva", patronymic: " Aleksandrovna"};
 console.log(me.surname, me.name, me.patronymic);
 console.log(me.surname + me.name + me.patronymic);


 //Объекты заполняются так же, как и массивы:
let obj4 = {};
obj['key1'] = 'a';
obj['key2'] = 'b';
obj['key3'] = 'c';
console.log(obj4); // выведет {key1: 'a', key2: 'b', key3: 'c'}
//или:

let obj5 = {};
obj.key1 = 'a';
obj.key2 = 'b';
obj.key3 = 'c';
console.log(obj5); // выведет {key1: 'a', key2: 'b', key3: 'c'}


//Пусть мы хотели обратиться к элементу с ключом text, но забыли кавычки.
// В этом случае JavaScript будет искать переменную text, не найдет ее и выдаст ошибку:
let obj = {text: '!!!'};
console.log(obj[text]); // выдаст ошибку, так как переменной text нет