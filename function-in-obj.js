// let obj = {
// 	func1: function() {return 1},
// 	func2: function() {return 2},
// 	func3: function() {return 3},
// };

// console.log(obj.func1()); // выведет 1


/////ЗАДАЧА 1. выведите на экран сумму возвращаемых чисел.
// let obj = {
// 	func1: function() {return 1},
// 	func2: function() {return 2},
// 	func3: function() {return 3},
// };
// console.log(obj.func1()+ obj.func2()+obj.func3()); 

//ЗАДАЧА 2. Переберите созданный объект циклом и выведите результаты работы функций на экран.
// let obj = {
//     	func1: function() {return 1},
//     	func2: function() {return 2},
//     	func3: function() {return 3},
//     };
//     for(let key in obj){
//        console.log(obj[key]());
//     }


//Пусть первая функция возводит переданное число в квадрат, а вторая функция - в куб
// let math = {
// 	square: function(num) {return num * num},
// 	cube: function(num) {return num * num * num},
// };

// console.log( math.square(2) ); // выведет 4
// console.log( math.cube(2) ); // выведет 8


// Задача 3. Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами.
//  Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов,
//   а третья - сумму кубов.

// let ObjFunc = {
//     getSumm: function(arr) { 
//         let sum = 0;
//         for(let elem of arr){
//          sum = sum + elem
//         }
//     return sum},
    
//     getSummSquare: function(arr) { 
//         let sum = 0;
//         for(let elem of arr){
//          sum = sum + (elem*elem)
//         }
//     return sum}, 
    
//     getSummCube: function (arr) { 
//             let sum = 0;
//             for(let elem of arr){
//              sum = sum + (elem**3)
//             }
//         return sum}  
        
//     };
//     let arrs = [1,2,3];
//     console.log( ObjFunc.getSummCube(arrs) ); 


//    // ИЛИ
//    let arr = [1, 2, 3];
// let obj = {
// getSumm: function(arr){let sum = 0; for(let elem of arr){ sum += elem;} return sum},
// getSummSquare: function(arr){let sum = 0; for(let elem of arr){ sum += elem **2;} return sum},
// getSummCube: function(arr){let sum = 0; for(let elem of arr){ sum += elem **3;} return sum},
// }
// for(let key in obj){
// console.log (obj[key](arr));
// }


