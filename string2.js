//Найдите сумму цифр из этой строки:
let str = '12345';
let arr = str.split('');
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += Number(arr[i]);
}
console.log(sum);