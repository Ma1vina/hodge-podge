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
// function formStr(data, length){ //формирование строки
//     let str = '';
//     for(let i = 1; i <= length; i++){
//     str = str + data;
//     }return str;
//     }
//     console.log(formStr('0', 3))

//     function normalizeNum(num, digitsAmount) {
//         let str = String(num);
//         return formStr('0', digitsAmount - str.length) + str;
//     }

//     console.log(normalizeNum("123", 4));

    //Потестируйте совместную работу функций normalizeNum и isLucky

    // function isLucky(num){
    //     let str = normalizeNum(num)
    // let sum1 = 0;
    // let sum2 = 0;
    // for( let i = 0 ; i < str.length / 2 ; i ++){
    // sum1 = sum1 + Number(str[i]);
    // }
    // for( let i = str.length / 2 ; i < str.length ; i ++){
    // sum2 = sum2 + Number(str[i]);
    // }
    // return sum1 == sum2;
    // }

// Сделайте функцию getFirst, которая параметром будет принимать число цифр в билете и возвращать число,
// соответствующее началу цикла. Потестируйте эту функцию на различных значениях.

// function getFirst(num){
//     let str = '1';
//     let count = (num / 2 + 1) - 2;
//     for (let i = 1; i <= count; i++){
//     str = str + '0';
//     }return Number(str + '1');
//     }
//     console.log( getFirst(8) );  



//     function getLuckyTickets(digitsAmount) {
//         let result = [];
        
//         let first = getFirst(digitsAmount);
//         let last  = getLast(digitsAmount);
        
//         for (let i = first; i <= last; i++) {
//             let ticketNum = normalizeNum(i, digitsAmount);
            
//             if (isLucky(ticketNum)) {
//                 result.push(ticketNum);
//             }
//         }
        
//         return result;
//     }

//     // Соберите весь код вместе, запустите его. Потестируйте общую работу кода для билетов с различным количеством цифр.

//     function isLucky(num){
// let a = String(num);
// let sum1 = 0;
// let sum2 = 0;
// for( let i = 0 ; i < a.length / 2 ; i ++){
// sum1 += Number(a[i]);
// }
// for( let i = a.length / 2 ; i < a.length ; i ++){
// sum2 += Number(a[i]);
// }
// return sum1 == sum2;
// }

// function formStr(data, length){
// let str = '';
// for(let i = 1; i <= length; i++){
// str += data;
// }return str;
// }

// function getLast(num){
// let str = '';
// for(let i = 1; i <= num; i++){
// str += '9';

// } return Number(str);
// }

// function getFirst(num){
// let str = '1';
// let countZ = (num / 2 + 1) - 2;
// for (let i = 1; i <= countZ; i++){
// str += '0';
// }return Number(str + '1');
// }
// function normalizeNum(num, digitsAmount) {
// let str = String(num);
// return formStr('0', digitsAmount - str.length) + str;
// }

// function getLuckyTickets(num){

// let result = [];
// for(let i = getFirst(num); i <= getLast(num); i++){

// if(isLucky(normalizeNum(i, num))){
// result.push(i);
// }
// }
// return result;
// }

// console.log( getLuckyTickets(6) );









    
        