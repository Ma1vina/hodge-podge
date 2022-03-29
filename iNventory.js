let x = 5; // диапазон от 0 до 10
if(x >= 0 && x <= 10){
    console.log("+") // +
}else{
    console.log("-")
}
//Произвести обратное, то есть число меньше 0, и больше 10
let y = -5; // диапазон от 0 до 10
if(y <= 0 || y >= 10){
    console.log("+")//+
}else{
    console.log("-")
}

// ИЛИ 
// просто инвентировать
let s = -5; // число в диапазоне меньше 0, и больше 10 ( то есть - (НЕ(от 0 до 10)) !!!
if (!(s >= 0 && s <= 10)){
    console.log("+")//+
}else{
    console.log("-")
}

// ЗАДАЧКА №345:
//Используя оператор ! инвертируйте приведенное условие
let num1 = -1;
let num2 = 11;
if (!(num1 >= 0 && num2 <= 10)) {  //тоже меньше 0, больше 10 - (И)
	console.log('верно');
} else {
	console.log('неверно');
}


// Задачка 555
let test = 1;		
if (test != true) {
	console.log('верно');
} else {
	console.log('неверно'); //+
}
//  значения, которые при приведению к логическому типу
// дают false: 0, -0, +0, null, false, NaN, undefined, '' (пустая строка).
// в другом случаи при сравнении приводится к true

let test1 = 1;

if (test1 == true) {
	console.log('верно'); // сработает этот, тк 1 == true - это верно
} else {
	console.log('неверно');
}

//CОКРАЩЕННЫЙ if
// вместо if (test == true) можно написать просто if (test).
let test2 = true;

if (test2) { // эквивалентно if (test == true)
	console.log('верно');
} else {
	console.log('неверно');
}
// в случае в неравенством (!test2)

// Аналогично для  false. Условие test == false на самом деле все равно, что test != true.

let test4 = 3 * 'abc';

if (test4) {
	console.log('верно');
} else {
	console.log('неверно');//+

}

let test5 = '0';
if (test5) {
	console.log('верно');//+
} else {
	console.log('неверно');
}


//СОКРАЩЕНИЕ ФИГУРНЫХ СКОБОК (если выражение одно)
let test0 = 0;
if (test0 == 0) {
	console.log('верно');     //+
} else {
	console.log('неверно!');
}
// ИЛИ
if (test0 == 0) console.log('верно'); else console.log('неверно!');
//ИЛИ
if (test0 == 0)
console.log('верно');
else
console.log('неверно!');