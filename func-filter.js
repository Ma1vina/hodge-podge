
//ОСТАВИМ ТОЛЬКО ЧЕТНЫЕ ЧИСЛА:
// let arr = [1, 2, 3, 4, 5];

// let result = arr.filter(function(elem) {
// 	if (elem % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(result); // выведет [2, 4]

//:или через стрелочную

// let callback = elem => elem % 2 == 0;
// let result = arr.filter(callback);
// console.log(result);

//ИЛИ:

// let result = arr.filter(elem => elem % 2 == 0);
// console.log(result);

// ИЛИ вот таак:)0))

// console.log( arr.filter(elem => elem % 2 == 0) );


//Задача 1.Дан массив с числами. Оставьте в нем только положительные числа.
//  let arr = [-1,1,2,-2];
//  console.log(arr.filter(elem => {return elem>0}));

//Задача 2. Дан массив с числами. Оставьте в нем только отрицательные числа.
//   let arr = [-1,1,2,-2];
// console.log(arr.filter(elem => {return elem<0}));

//Задача 3. Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

// let arr = [-1,1,2,11,9,-2];
// console.log(arr.filter(elem => {return elem>0 && elem<10}));

//Задача 4. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let arrStr = ["привет","я","маленький","гномик!"];
// console.log(arrStr.filter(elem => elem.length>5));

//Задача 5.Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 10.
// let arr = [1,10,3,4,5,6];
// let result = arr.filter(function(elem,index){
// let sum = elem*index;
// return sum<10;
// })
// console.log(result);

// Задача 6.Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в 
// нем только обычные элементы.
// let arr =[1, 2, [3, 4], 5, [6, 7]];
//     console.log(arr.filter(elem => typeof elem != "object"));


//Задача 7.Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// let arr = [1,2,-4,-6,-5];
// let result = arr.filter(elem => {return elem<0});
// console.log(result.length);







