//Подсчитайте сумму элементов, которые начинаются на 1 или 2
let obj = {a: 10, b: 20, c: 30, d: 10};
let sum = 0;
for (let key in obj) {
    let x = String(obj[key]);
	 if (x[0] === '1'|| x[0] === "2") {
         sum = +sum + +x;
      }
 }
console.log(sum);

