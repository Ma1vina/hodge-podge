
// function sortirovka(a, b) {
//   return a - b;
// }

// // let arr = [4, 2, 5, 1, 3];
// // arr.sort(function(a, b) {
// //   return a - b;
// // });
// // console.log(arr); // [1, 2, 3, 4, 5]


// let arr = [4, 2, 5, 1, 3];
// arr.sort(function(a,b){
//     return b - a;
// });
// console.log(arr); //[5,4,3,2,1]


//вариант 2

let arr = [13, 62, 12];
for (let i = 0; i < arr.length; i++) {
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      let c;
      c = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = c;
    }
  }
}
console.log(arr);

