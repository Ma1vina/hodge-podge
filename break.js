//сложите столько чисел чтобы получилось 105, начиная с 1
let x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let summ =0;
for(let i = 0; i<x.length; i++){
let y = x[i];
summ = summ + y
if(summ == 105){
    console.log(summ);
    break;
}
}

//есть ли в массиве 3:
let arr = [1, 2, 3, 4, 3, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('есть'); // выведет несколько раз
	}
}
//Поправим проблему: завершим цикл с помощью break, если элемент уже найден:

let arr = [1, 2, 3, 4, 3, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('есть');
		break;  // завершим цикл
	}
}