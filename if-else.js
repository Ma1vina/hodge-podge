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