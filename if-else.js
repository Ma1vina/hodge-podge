// ЗАДАЧКА 1
//В переменной arr содержится некоторый массив с числами. 
//Напишите условие, которое проверит, что в массиве 3 элемента. 
//Если это так, выведите на экран сумму элементов массива.
 let arr = [1, 2 , 9];
 let summ;
 if(arr.length == 3){
summ = arr[0] + arr[1] + arr[2];
 }
 console.log(summ);

//ЗАДАЧКА 2
//проверить равна ли первая цифра числа в переменной числу 1, для этого переведем число в строку:
let num = 12004;
let str = String(num);
if (str[0] == 1) {
	console.log('верно'); // выведет 'верно'
} else {
	console.log('неверно');
}
// ИЛИ
//Не обязательно вводить новую переменную, можно применить [0] непосредственно к результату функции String:
let num1 = 12345;
if (String(num1)[0] == 1) {
	console.log('верно'); // выведет 'верно'
} else {
	console.log('неверно');
}

// ЗАДАЧКА 3
//Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.
let x = 10;
let string1 = String(x);
let r = string1[string1.length - 1]
if(x == r){
    console.log("равна 0")
} else{
    console.log("не равно 0")
}

//ЗАДАЧКА 3
//Пусть в переменной num хранится число. Определите, четное число или нет. 
//Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.
let numb = 72;
let d = String(numb);// перевести в строку
let array = d[d.length - 1] // отделить в массиве последний символ
if(array == 0 || array == 2 ||array == 4 || array ==6 || array == 8){
	console.log("четное")
}else{
	console.log("нечетное")
}

//ЗАДАЧКА 4
//будет проверять, делится ли нацело одно число на второе:
let a = 10;
let b = 3;
if (a % b == 0) {
	console.log('делится нацело');
} else {
	console.log('делится с остатком');
}

//Задачка 5
//Остаток вычисляется в двух местах, а это не оптимально. Поправим проблему:
let rr = 10;
let yy = 3;
let rest = rr % yy;
if (rest == 0) {
	console.log('делится нацело');
} else {
	console.log('делится с остатком ' + rest);
}

//Задачка 6
 //В переменной month лежит какое-то число из интервала от 1 до 12. 
 //Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
 let month = 9;
 if(month >= 3 && month<=5){
	 console.log("весна")
 }else if(month>=6 && month<=8){
	 console.log("лето")
 }else if(month>=9 && month<=11){
	 console.log("осень")
 }else if(month=12 || month==1 || month==2){
	 console.log("зима")
 }

 //Задачка 7
	//Дано трехзначное число. Найдите сумму цифр этого числа.
	let f = 999;
	let summ1 = 0;
    let r1 = String(f);
for( let i = 0; i < r1.length; i++){
	summ1 = summ1 + Number(r1[i]);
}
if(summ1 <=9){
	console.log("однознач " + summ1)
}else{
	console.log("двузнач"+ summ1)
}

// function digitSum(y) {
// 	let sum = 0, x = String(y); 
// 	for (let i = 0; i < x.length; i++) {
// 		sum = sum + Number(x[i]);
// 	}
// 	return(sum)
// }

//Задачка аналогичная, только для чисел, которые не входят в диапазон от 10 до 99
let q = 999;
let summ2 = 0;
let c = String(q);
if(q>=10 && q<=99){ // в этом диапазоне
    console.log("входит в диапазон")
} else {
    for(let i = 0; i < c.length; i++){
         summ2 = summ2 + Number(c[i])
    } 
    if(summ2 <= 9){
      console.log(summ2 + " сумма цифр однозначна")  
    }else if( summ2 <=10 && summ2 <=99){
        console.log(summ2 + " cумма цифр двузначна")
    }else if(summ2> 99){
    console.log(summ2)
    }
} 
