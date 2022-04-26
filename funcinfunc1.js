//Задача 1. Сделайте функцию getPerfect, которая будет находить совершенные числа в
// заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.
//в промежутке от 1 до 28 == ответ [6,28]
function perfectDigit (num){

}

function numb (num){
    let arr= [];
    for(let i = 0;i< num; i++){
        if(num% i == 0){
         arr.push(i);
        }
    }
    return arr;
}

