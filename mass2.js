//задачка 1
//подсчитайте кол-во элекментов в массиве
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let x = 0;
// for(let i =0; i< arr.length; i++){
//     if(arr[i] == 3){
//     x++
//     }
// }
// console.log(x);

//ИЛИ по примеру учебника
// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let counter = 0;
// for (let elem of arr) {
// 	if (elem == 'a') {
// 		counter++;
// 	}
// }
// console.log(counter);

// Задача 2
// Модифицируйте предыдущую задачу так, 
// чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let x = 0;
let y = 0;
for(let i =0; i< arr.length; i++){
    if(arr[i] == 3){
    x++
    }
 if(arr[i] == 2){
    y++
    }
}
console.log(x,y);