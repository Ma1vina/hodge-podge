//с помощью цикла for-in выведем ключи этого объекта:
// let obj = {a: 1, b: 2, c: 3};
// for (let key in obj) {
// 	console.log(key); // выведет 'a', 'b', 'c'
// }
// //А теперь выведем элементы:
// let obj = {a: 1, b: 2, c: 3};
// for (let key in obj) {
// 	console.log(obj[key]); // выведет 1, 2, 3
// }

//С помощью цикла for-in найдите сумму элементов этого объекта.
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let summ = 0;
for(let key in obj){
summ= summ+ obj[key]
}
console.log(summ);