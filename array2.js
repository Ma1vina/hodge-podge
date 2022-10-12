//Добавление в новый массив элементов

// let arr = []; // создаем пустой массив

// arr[0] = 'a'; // в ключ 0 добавим элемент 'a'
// arr[1] = 'b'; // в ключ 1 добавим элемент 'b'
// arr[2] = 'c'; // в ключ 2 добавим элемент 'c'

// console.log(arr); // выведет ['a', 'b', 'c']




// let count = 0;
// let sum = 0;

// function countPositivesSumNegatives(input) {
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(input[i]>0){
//       count++;
//     }
//     if(input[i]<0)
//       sum = sum + input[i];
//     }
 
// newArr.push(count);
// newArr.push(sum);
// return newArr;

// }
// let arr = [1,2,3,-1,-2];
// console.log(countPositivesSumNegatives(arr));


let count = 0;
let sum = 0;
let x= [];
let y= [];

function v(arr){
[...arr].forEach((elem) =>{
if(elem>0){
    count++;
}
if(elem<0){
    sum = sum + elem
}
if(elem == null || elem == undefined){
 return y;
}

})
 x.push(count);
 x.push(sum); 
return x;
}
console.log(v([10, -65, 18, -115]));