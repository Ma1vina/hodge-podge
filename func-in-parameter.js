//ЗАДАЧА 1.Вывести на экран сумму результатов первой и второй функции:
// test(
// 	function() {return 1;},
// 	function() {return 2;}
// );

// function test(func1, func2) {
// 	console.log( func1() + func2() ); // выведет 3
// }

// Задача 2. Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию,
//  возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите на экран сумму
//   результатов функций.


function test(func1,func2,func3){
    console.log(func1() + func2() + func3());
    }

    let get1 = function(){return 1};
    let get2 = function(){return 2};
    let get3 = function(){return 3};
    test(get1, get2, get3);