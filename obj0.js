// //Задача 1
// //Дан следующий объект с работниками и их зарплатами.Увеличьте зарплату каждого работника на 10%.
// let obj = {
// 	employee1: 10000,
// 	employee2: 20000,
// 	employee3: 30000,
// 	employee4: 40000,
// 	employee5: 50000,
// 	employee6: 60000,
// 	employee7: 70000,
// };
// for(let key in obj){

//     let y = obj[key];
//     y = 10 * (y/100) 
//     obj[key] = obj[key] +y;
// }
// console.log(obj);

// // Задача 2
// // Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, 
// // у которых она меньше или равна 40000.
// let obj1 = {
// 	employee1: 10000,
// 	employee2: 20000,
// 	employee3: 30000,
// 	employee4: 40000,
// 	employee5: 50000,
// 	employee6: 60000,
// 	employee7: 70000,
// };
// for(let key in obj1){
//     let y = obj1[key];
//     y = 10 * (y/100) 
// 	if(obj1[key] <= 40000){
// 		obj1[key] = obj1[key] +y;
// 	}
// }
// console.log(obj1);

// Задача 3
// С помощью этих массивов создайте новый объект,
//  сделав его ключами элементы первого массива, а значениями - элементы второго.
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let objj = {};
// for(let i = 0; i < arr1.length; i++){
// 	objj[arr1[i]]=arr2[i];
// }
// console.log(objj);

// Задача 4
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

//задача 5
// Запишите ключи этого объекта в один массив, а значения - в другой.
// let obj = {'a': 1, 'b': 2, 'c': 3};
// let arr1 = [];
// let arr2 = [];
// for(let key in obj){
// 	arr1.push(key);
// 	arr2.push(obj[key]);
// }
// console.log(arr1,arr2);

// задачка 6
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.
// let obj = { 1: 125, 2: 225, 3: 128, 4: 356, 5: 145, 6: 281, 7: 452, };
// let arr = [];
// for(let key in obj){
// 	if(String(obj[key])[0] == 1 || String(obj[key])[0] == 2){
//    arr.push(obj[key]);
// 	}
//  }
//  console.log(arr);

 //Задача 7
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
// let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let arr1 = [];
// let obj = {};
// for (let i = 1; i <= 5; i++) {
// 	arr1.push(i);
// }
// for( let i = 0; i<arr.length;i++){	
// 		  obj[arr1[i]] = arr[i];
//  }
// console.log(obj);//вставила массив в типе number а в объекте получилась string(где ключи) what's happened???

// ИЛИ +решила по-другому:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for (let i = 1, j =0; i < (arr.length + 1); i++, j++){
// obj[i] = arr[j]; // obj[i] - ключ(число цикла), arr[j] - значение
// }
// console.log(obj);

//Задача 8
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
// let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};