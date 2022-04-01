// //КОМБИНИРОВАНИЕ. КОНСТРУКЦИЯ if + Else

// //В переменной day лежит какое-то число из интервала от 1 до 31. 
// //Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 31;
if(day<= 10){
    console.log("первая декада")
}
if(day<10 && day<=20){ 
    console.log("вторая декада")
}
if(day>20 && day<=31){
    console.log("третья декада")
}
//ИЛИ
let day1 = 35;
if(day1<= 10 && day1>0){
    console.log("первая декада");
}else if (day1>10 && day1<=20){ 
    console.log("вторая декада")
}
else if(day1>20 && day1<=31){
    console.log("третья декада") //Преимуществом использования else if вместо нескольких ифов является возможность отловить ситуацию, 
                                //когда значение переменной не подходит ни под одно из условий
}else{
console.log("неправильноe число")
}


// так же можно использовать 2 if, потом 2 else , то есть произвольно
let num = 3;
if (num >= 0) {
	if (num <= 5) {
		console.log('меньше или равно 5');
	} else {
		console.log('больше 5');
	}
} else {
	console.log('меньше нуля');
}


//задачка попытка 2
let x = 77;
if(!(x>=10 && x<=99)){ // НЕ в этом диапазоне
    console.log("не входит в диапазон")
} else { // в др случае, если входит в этот диапазон
    let str = String(x); // перевести в строку
    let z = str.split(""); // разбить на массив
    let w = Number(z[0]); // перевести индексы в цифры
    let p = Number(z[1]);
 let summ = w + p; // подсчитать сумму
if(summ <=9){
    console.log(summ + " сумма цифр однозначна")
} else {
    console.log(summ + " сумма цифр двузначна")
 }
}

//посчитать сумму цифр 10
// let i = 10;
// let c = String(i);
// let o = Number(c[0]);
// let v = Number(c[1]);
// let s = o+v;
// console.log(s);

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
//Задачка 7
	//Дано трехзначное число. Найдите сумму цифр этого числа.
// 	let f = 999;
// 	let summ1 = 0;
//     let r1 = String(f);
// for( let i = 0; i < r1.length; i++){
// 	summ1 = summ1 + Number(r1[i]);
// }
// if(summ1 <=9){
// 	console.log("однознач " + summ1)
// }else{
// 	console.log("двузнач"+ summ1)
// }
