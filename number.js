console.log (0.4 + 0.2);
console.log(+(0.4 + 0.2). toFixed(1));// выводится только как строка, а не как число
console.log(parseFloat((0.4 + 0.2).toFixed(1)));// как число

//Example. вывести рандомное число в диапазоне 1-30
function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandom (1,30));
