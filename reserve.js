//в обратном порядке:
// let arr = [1, 2, 3, 4, 5];
// let result = [];
// for (let i = arr.length - 1; i >= 0; i--) {
// 	result.push(arr[i]);
// }
// console.log(result); // выведет [5, 4, 3, 2, 1]

// в обратном порядке
let arr1 = ['a', 'b', 'c', 'd', 'e'];
let ob = [];
for(let i = arr1.length - 1; i>=0; i--){
    ob.push(arr1[i]); 
}
console.log(ob);

//задачка 8. Записать в новый массив только нечетные числа
let ars =[];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let elem of arr) {
	if (elem % 2 != 0) {
		ars.push(elem);
	}
}
console.log(ars);