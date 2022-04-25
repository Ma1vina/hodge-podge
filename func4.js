//Задача 12.Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные
//делители этих чисел (то есть исключая число 1 и само число). Некий программист уже написал решение задачи:
let numbs = [12, 24, 35, 14];

function SortDivisors (num){
    let arr =  [];
    for(let i =2; i < num; i++){
        if(i % 2 == 0){
          arr.push(i);
        }
    }
    return arr;
}

for (let num of numbs) {
	console.log(num + ': ' + SortDivisors(num).join(', '));
}
