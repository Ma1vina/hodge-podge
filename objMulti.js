//Задача 1. Найдите сумму элементов объекта
// let obj = { key1: {key1: 1, key2: 2, key3: 3, key4: 4}, key2: {key1: 5,key2: 6,key3: 7, key4: 8},key3: {key1: 9,key2: 10,key3: 11, key4: 12},}
// let summ = 0;
// for(let i = 1; i <=3; i++){ // главных ключей key- 3
//      for(let j = 1; j <=4; j++ ){ //подключей key- 4
//             summ =  summ + obj['key'+ i]['key'+ j]; 
//     }
// }
// console.log(summ);

//Задачка 2. Выведите на экран элемент 'b2' и элемент 'c1'.
// let obj = { 1: { 1: 'a1', 2: 'a2', 3: 'a3', }, 2: { 1: 'b1', 2: 'b2', 3: 'b3', }, 3: { 1: 'c1', 2: 'c2', 3: 'c3', }, }
// console.log(obj[2][2], obj[3][1]);


//Задача 3.Найдите сумму всех элементов-чисел.
// let obj = {
// 	key1: {a: 1, b: 2, c: {d: 3,e: 4,}, f: 5,},
// 	key2: {g: 6, h: 7,},
// }
// let summ = obj["key1"]["a"] + obj["key1"]["b"] + obj["key1"]["c"]["d"] +obj["key1"]["c"]["e"] + obj["key1"]["f"]+ obj["key2"]["g"]+obj["key2"]["h"];
// console.log(summ);
