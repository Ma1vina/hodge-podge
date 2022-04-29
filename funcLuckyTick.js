//ЗАДАЧА 1. вывести на экран(в массиве) все возможные счастливые автобусные билеты из 6 цифр (сумма трух равна другим трем)
//первый счастливый билет 001001

// function getLuckyTicket (){
//         let result = [];
        
//         for (let i = 1001; i <= 999999; i++) {
//             if (isLucky(i)) {
//                 result.push(i);
//             }
//         }
        
//         return result;
//     }
// function isLucky(num){
//     let str = normalizeDigits(num)
//     let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// 	let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
//    return sum1 == sum2
//    }

// function normalizeDigits (num){
//     let str = String(num);
	
// 	if (str.length == 5) {
// 		str = "0" + str;
// 	}
// 	if (str.length == 4) {
// 		str = "00"  + str;
// 	}
	
// 	return str;
// }
// console.log(getLuckyTicket());

//Счастливое число для всех чисел
// function isLucky(num){
//     let str = String(num);
//     let sum1 = 0;
//     let sum2 = 0;
//     for( let i = 0 ; i < str.length / 2 ; i ++){
//     sum1 = sum1 + Number(str[i]);
//     }
//     for( let i = str.length / 2 ; i < str.length ; i ++){
//     sum2 = sum2 + Number(str[i]);
//     }
//     return sum1 == sum2;
//     }
//     console.log(isLucky(1010));



//Заполнить недостающее кол-во элементов
function formStr(data, length){ //формирование строки
    let str = '';
    for(let i = 1; i <= length; i++){
    str = str + data;
    }return str;
    }
    console.log(formStr('0', 3))

    function normalizeNum(num, digitsAmount) {
        let str = String(num);
        return formStr('0', digitsAmount - str.length) + str;
    }

    console.log(normalizeNum("123", 4));

    //Потестируйте совместную работу функций normalizeNum и isLucky

    function isLucky(num){
        let str = normalizeNum(num)
    let sum1 = 0;
    let sum2 = 0;
    for( let i = 0 ; i < str.length / 2 ; i ++){
    sum1 = sum1 + Number(str[i]);
    }
    for( let i = str.length / 2 ; i < str.length ; i ++){
    sum2 = sum2 + Number(str[i]);
    }
    return sum1 == sum2;
    }

 console.log(isLucky(normalizeNum(6123, 6)));  

    
        