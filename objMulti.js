"use strict"
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


//ПЕРЕБОР ЭЛЕМЕНТОВ
// let obj = {
// 	a: {1: 'a1',2: 'a2',3: 'a3',},
//     b: {1: 'b1',2: 'b2',3: 'b3',},
// 	c: {1: 'c1',2: 'c2',3: 'c3',},
// };
// for (let key in obj) { // ключи в объекте
// 	let subObj = obj[key]; // мини-объекты (=) в элементах ключей
// 	for (let subKey in subObj) { // и ключики из мини-объектов
// 		console.log(subObj[subKey]); //мини-объекты( и их мини-ключики)
// 	}
// }

//Задачка1 . Используя циклы, найдите сумму элементов этого объекта.
// let obj = {1: {1: 11, 2: 12, 3: 13,},
// 	       2: {1: 21, 2: 22, 3: 23,},
// 	       3: {1: 24, 2: 25, 3: 26,},
//           };
//   let summ = 0;
//   for(let key in obj){
//       let subObj = obj[key];
//       for(let subKey in subObj){
//           console.log(subObj[subKey])
//           summ = summ + subObj[subKey]
//       }
//   }        
// console.log(summ);

// ИЛИ через обычный for найти сумму объектов:
// let obj = {1: {1: 2, 2: 4, 3: 4,},//10
// 	       2: {1: 4, 2: 3, 3: 2,},//9
//            3: {1: 1, 2: 1, 3: 1,},//3
//           };
//  let summ = 0;
//  for(let i = 1;i<4; i++){
//      let subObj = obj[i]; 
//      for(let key in subObj){
//    summ =  summ + subObj[key]           
//      }
//  }         
//  console.log(summ);  

//+++найдите сумму всех ключей объекта:
let obj = {1: {1: 2, 2: 4, 3: 4,},//6
	       2: {1: 4, 2: 3, 3: 2,},//6
          };//3
 let result1=0;
 let result2=0;
 let summ = 0;
 for(let key in obj){
     let miniObj = obj[key];
     result1 = result1 + Number(key);//3
    for(let subKey in miniObj){
  result2 = result2 + Number(subKey);
     summ = result1 + result2
     }
 }
console.log(summ);
        




// Найдите сумму ключей этого объекта и поделите ее на сумму значений.
// let obj = {3: 1, 3:1 , 3: 1};
// let summ1 = 0;
// let summ2 = 0;
// let x = 0;
// for(let key in obj){
// summ1 =summ1+ Number(key); // сумма ключей
// summ2 =summ2+ Number(obj[key]); //сумма элементов 
// x = summ1 / summ2;
// }
// console.log(x);
