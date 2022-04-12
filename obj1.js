// //соединить массивы в 1 объект
// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// let obj = {};

// for (let i = 0; i <= 4; i++) {
// 	obj[keys[i]] = values[i];
// }
// console.log(obj);//{ a: 1, b: 2, c: 3, d: 4, e: 5 }

// //заполнение нового объекта с нечетными числами
// let obj1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let obj2 = {};

// for (let key in obj1) {
// 	if (obj1[key] % 2 != 0) {
// 		obj2[key] = obj1[key];
// 	}
// }
// console.log(obj2); 

//Задача 4/Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.
let obj3 = {'a': 9, 'b': 20, 'c': 13, 'd': 23, 'e': 17};
let obj4 ={};
for(let key in obj3) {
    if (obj3[key] <=20 ){
        if(obj3[key]>=10){
            obj4[key] = obj3[key];
        } 
    }
}
console.log(obj4);

//Задача 5. Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
for(let key in obj){
    obj[key] = obj[key] **2
}
console.log(obj);

// ЗАМЕНА КЛЮЧЕЙ С ОБЪЕКТАМИ
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let result = {};

for (let key in obj) {
	result[obj[key]] = key; // т.е. теперь значения (obj[key]) будут равны (key), тем замым поменяем местами
}
console.log(result); // выведет {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}