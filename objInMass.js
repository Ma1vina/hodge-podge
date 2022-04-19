//ОБЪЕКТЫ В МАССИВАХ
// let users = [{name: 'name1',age: 31,},
// 	         {name: 'name2',age: 32,},
//              {name: 'name3',age: 33,},
//             ];
// console.log(users[0]);//{name: 'name1',age: 31,}

// console.log(users[1]['name']); // выведет 'name2'
// //ИЛИ:
// console.log(users[1].name);

//Задачка 1
//Выведите на экран сумму значений.
// let employees = [
// 	{salary: 10,salary: 10,},
// 	{salary: 10,salary: 10,},
// 	{salary: 10,salary: 10,},
//                 ];
// let summ = 0;
// for(let i = 0; i<employees.length; i++){
//     let obj = employees[i];
//  for(let key in obj){
//  let x = obj[key]
//  x = Number(x);
//  summ = summ + x;
//    }
// }
// console.log(summ);

//Задачка 2
//Выведите на экран вручную сумму зарплат первого и второго работников.
// let employees = [
// 	{name: 'name1',salary: 300,},
// 	{name: 'name2',salary: 400,},
// 	{name: 'name3',salary: 500,},
//                 ];
// console.log(employees[0]["salary"] + employees[1]["salary"]);

//Задачка 3.
//Выведите на экран элемент 'Вася' и элемент 'Лена'.
// let students = {
// 	'boys':  ['Коля', 'Вася', 'Петя'],
// 	'girls': ['Даша', 'Маша', 'Лена'],
//                };
// console.log(students["boys"][1], students["girls"][2]);


//Вывести данные юзеров на экран:
// let users = [
// 	{name: 'name1',age: 31,},
// 	{name: 'name2',age: 32,},
// 	{name: 'name3',age: 33,},
//             ];
// for (let user of users) {
// 	document.write(user.name + ' ' + user.age + "<br>" );
// }


//ЗАдачка 1.
//Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
// let employees = [
// 	{name: 'name1',salary: 300,	age: 28,},
// 	{name: 'name2',salary: 400,age: 29,},
// 	{name: 'name3',salary: 500,age: 30,},
// 	{name: 'name4',salary: 600,age: 31,},
// 	{name: 'name5',salary: 700,	age: 32,},
// ];
// let summ = 0;
// for(let user of employees){
//     if(user.age>=30){
//         summ = summ + user.age;
//     }
// }
// console.log(summ);

//Задачка 2.
//Дан следующий массив работников, в котором поле dismissed хранит
// в себе информацию о том, уволен работник или нет (true - уволен):
//Выведите на экран имена и зарплаты неуволенных работников.

	// let employees = [
    //     { name: 'name1',salary: 300, dismissed: false,},
    //     {name: 'name2',salary: 400,dismissed: true,},
    //     {name: 'name3',salary: 500,dismissed: false,},
    //     {name: 'name4',salary: 600,dismissed: true,},
    //     { name: 'name5',salary: 700,dismissed: false,},
    // ];
    // for(let user of employees){
    //     if(user.dismissed != true){
    //         console.log(user["name"] + " " + user["salary"]);
    //     }
    // }


//СЛОЖНЫЕ РАЗЛИЧНЫЕ СТРУКТУРЫ
//Задача 1
//Выведете на экран все строки с данными
// let students = {
// 	'group1': ['student11', 'student12', 'student13'],
// 	'group2': ['student21', 'student22', 'student23'],
// 	'group3': ['student31', 'student32'],
// };
// for (let group in students) {
// 	for (let name of students[group]) {
// 		console.log(name);
// 	}
// }
 
//Задача 2. Выведете все строки с данными
// let data = [
// 	{ 1: 'data11', 2: 'data12', 3: 'data13', 4: 'data14',},
// 	{1: 'data21',2: 'data22',3: 'data33',},
// 	{1: 'data31',2: 'data32',},
//             ];
//  for(let numb of data){
//      for(let key in numb){
//       console.log(numb[key]);
//      }
//  }  

//Задачка 3.Выведете на экран все строки с данными
let data = [
	{1: ['data111','data112','data113',],
	2: ['data121','data122','data123',],
    },
         {1: ['data211','data212','data213',],
	     2: ['data221','data222','data223','data224',],
		 3: ['data231','data232','data233','data234','data235',],
	     },
          	{1: ['data411','data412','data413',],
		     2: ['data421',],
            },
          ];
for(let obj of data){
   for(let key in obj){
       x = obj[key];
       for(let name of x){
   console.log(name);
       }
   } 
}
