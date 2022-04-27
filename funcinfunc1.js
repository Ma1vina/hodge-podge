//Задача 1. Сделайте функцию getPerfect, которая будет находить совершенные числа в
// заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.
//в промежутке от 1 до 28 == ответ должен быть [[6],[28]]

function getnumb (num){ // находим делители числа num 
    let arr= [];
    for(let i = 0;i< num; i++){
        if(num% i == 0){
         arr.push(i);
        }
    }
    return arr;
}

function getSumm (arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
// console.log(getSumm([1,2])); //(getSum(getnumb(num)))

function comparisonSum (num){
    let t = getSumm(getnumb(num))
    if(num == t){
        return true;
    }else{
        return false;
    }
}

function getPerfect (min,max){ //от 1 до 28 включительно
    let arr = [];
    for(let i = min;i<=max;i++){
       if(comparisonSum(i)){
           arr.push([i])
       }
}
return arr;
}
console.log(getPerfect(1,28));
console.log(getPerfect(1,10000));
	

