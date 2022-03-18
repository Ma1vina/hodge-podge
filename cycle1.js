// ЦИКЛЫ ПОЛНЫЙ РАЗБОР
//
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

//дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран.
// let x = ["a", "b", "c", "d", "e"];
// for( let i = 0; i  < x.length; i++){
//     let y = x
//     console.log(x[i]);
// }

//Внутри цикла for можно использовать условие if. Давайте, например, при переборе массива,
// будем выводить в консоль только элементы с четными числами:
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 == 0) {
// 		console.log(arr[i]);
// 	}
// }

//Дан массив с элементами 1, 2, 3, 4, 5. 
//С помощью цикла for и оператора if выведите в консоль нечетные элементы массива.
// let sum=0;
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 == 1) {
// 		sum = sum + arr[i];
      
// 	}
// }
// console.log(sum);

//найти сумму всех отрицательных элементов
//   let y = 0; 
//   let arr = [-5, -3, 5, 10]; 
//   let summ = 0; 
//   for (let i = 0; i < arr.length; i++) { 
//    if (y > arr[i]) { 
//    } else { 
//    summ = summ + arr[i]; 
//    } 
//   } 
//   console.log(summ);

//найдите произведение чисел
// let prosv = 1; 
// let arr = [2, 2, 2];
// for (let i = 0; i < arr.length; i++) { 
//     prosv = prosv * arr[i]
// }
// console.log(prosv);


//С помощью цикла for найдите сумму квадратов элементов этого массива.
// let summ = 0;
// let arr = [2, 2, 2];
//  for (let i = 0; i < arr.length; i++) {
//      let x = arr[i]
//      summ = summ + x**2
//  }
//  console.log(summ);


// С помощью цикла for и оператора if выведите в консоль те элементы массива,
 //которые больше 3-х, но меньше 10.
 let m = 3;
 let b = 10;
 let arr = [2, 5, 6, 11];
for (let i = 0; i < arr.length; i++) {
    let x = arr[i]
    if(x > m)
    if(x<b)
    console.log(arr[i])     
    }  

