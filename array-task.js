// Составьте массив промежуточных сумм целых чисел в массиве.
//  Пример: если изначальный массив - [2, 8, 1, 4],
//   то результат будет [2, 10, 11, 15]
// let arr = [2, 8, 1, 4];

//1.
// function getSums(arr) {
//     let result = [];
//     if (!arr.length) return result;
//     let totalSum = arr.reduce(function(acc, v) { // acc(0), v(значения каждого), index, arr(который используем)
//         result.push(acc);
//       return acc + v;
//     });
//     result.push(totalSum);
//     return result;
//   }
//   console.log(getSums(arr));

// 2.
//   const getSums = (arr) => {
//     return arr.reduce((acc, v, index, arr) => {
//     if (index === 0) {
//     acc.push(v);
//     } else {
//     acc.push(v + acc[index - 1]);
//     }

//     return acc;
//     }, []);
//     }
// console.log(getSums(arr));

// 3
// const arrSum = [];
// arr.reduce((acc, value, index) => {
// return arrSum[index] = acc + value;
// },0);
// console.log(arrSum);

// 4
// let arr = [2, 8, 1, 4];

// let res = arr.reduce((acc, v, i, arr) => {
//   let sum = 0;
//   if (i === 0) {
//     acc.push(v);
//   }else{
//     sum += v + acc[i - 1];
//     acc.push(sum);
//   }
//   return acc;
// }, []);
// console.log(res);

// Найдите первое попавшееся число, которое встречается два раза в массиве целых чисел.
//  Если такого числа нет - вернуть false. Пример: если изначальный массив - [2, 8, 1, 4, 8, 9, 2],
//  то ответ будет - 8. Пример2: если изначальный массив - [4, 7, 1, 15], то ответ будет - false.

// let arr = [2, 8, 1, 8, 2, 4, 8, 9, 2];
// let newarr = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] == arr[j + 1] && arr[j + 1] !== undefined) {
//       newarr.push(arr[i]);
//     }
//   }
// }
// if (newarr.length > 0) {
//   console.log(newarr[0]);
// } else {
//   console.log(false);
// }

// То же самое, что и в предыдущей задачке, но теперь мы возвращаем массив из чисел,
//  которые попались в массиве 2 или более раза. Пример: если изначальный массив - [2, 8, 1, 4, 8, 9, 2],
//  то ответ будет - [8, 2].
//  Пример2: если изначальный массив - [4, 7, 1, 15], то ответ будет - [].

let arr = [2, 8, 1, 8, 2, 4,1, 8, 9, 2];
let newarr = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] == arr[j + 1] && arr[j + 1] !== undefined) {
      newarr.push(arr[i]);
    }
  }
}

let filteredArray = newarr.filter(function(v, i){
    return newarr.indexOf(v) == i;
  });

  console.log(filteredArray);

// let arr = [2, 8, 1, 8, 2, 4, 1, 8, 9, 2];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let result = getNumb(newArr, arr[i]);
//   if (result) {
//     continue;
//   }
//   let res = ElemIndex(arr, i)
//   if(res){
//     newArr.push(arr[i])
//   }
// }
//  console.log(newArr);


// function getNumb(arr, numb) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == numb) {
//       return true;
//     }
//   }
//   return false;
// }

// function ElemIndex(arr, index) {
//   for (let i = index + 1; i < arr.length; i++) {
//     if (arr[index] == arr[i]) {
//       return true;
//     }
//   }
//   return false;
// }
