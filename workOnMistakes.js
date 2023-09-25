const a = {};
function clear(obj){
    obj.x= 40;
    obj = null;
}
clear(a);
console.log(a);

// class GODListener {
//  constructor() {
//  this.counter = 0;
//  }

//  handleClick() {
// this.counter += 1;

//     console.log(this.counter);

//     }
//  }

// const element = document.getElementById('testBtn');
//  const listener = new GODListener();
// element.addEventListener('click', listener.handleClick); //1,2,3

// for (var i = 0; i < 10; i++) { setTimeout(function f() {
//     console.log(i); });
// }//10 раз 10

// var a = 'hello';

// function b() {
//     if (false) {
// var a = 'world';
// } else {
//      var b= 'man';
// }

// console.log(b);
// console.log(a);
// }

// b() //man underfined



// let obj = {
//  "0": 1,
// 0: 2
// };
// console.log(obj["0"] + obj[0] ); //4

// const a = 10;
// const b = 20;

// function bar () {
//   const a = 30;

//   return a + b;
// }

// console.log(bar());

// var x = 10;
//  function bar (funArg) {
//    var x = 30;
// funArg();
// }

//  function foo() {
//      console.log(x);
// }
// foo.x = 20;
// bar.x = 40;

// bar(foo);

// var l = 25;
// var x = 11;

// function bar(foo) {
//   var x = 30;
//   foo();
// }

// function foo() {
//   console.log("x", x);
// };

// foo.x = 20;
// bar.x = 40;

// bar(foo); //11

// l.x = 100;

// console.log("foo.x", foo.x); //20

// const func = (x,y,z) => x+y+z;

// // const curry = (fn) => (x) => (y) => (z) => fn(x,y,z);

// console.log(curry(func)(3)(1)(2))

// function curry (fn) {
//   return function(x){
//      return function(y){
//       return function(z){
//         return fn(x,y,z)
//       }
//      }
//   }
// }

// let arr = [2, 6, 20, 4, 11, 30, 5];
// let sum = 9;

// function findTwoNumbers(arr, sum) {
//   for (let i = 0; i < arr.length; i++) {
//   	let n = arr[i];
//     if (arr.includes(sum - n)) {
//       return [sum - n, n];
//     }
//   }
// }

// console.log(findTwoNumbers(arr, sum))
// ===========================

// function findTwoNumbers(arr, sum){
//   for (var i = 0; i < arr.length; i++) {
//       for(var j = i + 1; j < arr.length; j++){
//           if(arr[i] + arr[j] === sum){
//               return [arr[i] , arr[j]];
//           }
//       }
//   }

//   return [];
// }

// let arr = [
//   [2,4],
//   [3,5],
//   [6,3]
// ];

// let res = arr.reduce((acc, el, i, arr) => {
// acc.first = el[0] + acc.first
// acc.second = el[1] + acc.second
// return acc;
// },{first: 0 , second: 0 })

// console.log(res.first > res.second ? res.first : res.second)




// var globalVar = "global";
// var outerVar = "outer";

// function outerFunc(outerParam) {
//   function innerFunc(innerParam) {
//     console.log(globalVar, outerParam, innerParam);
//   }
//   return innerFunc;
// }

// const x = outerFunc(outerVar);
// outerVar = "outer-2";
// globalVar = "guess";
// x("inner");


// (function (){

// console.log('this is the start'); //1 +

// Promise.resolve(console.log('promise 1')) //2 +

// setTimeout(function cbl() { 
//    console.log('timeout 0');
// }, 2000); //8 +

// setTimeout(function cb() { //6+
//   console.log('timeout 1'); 
// });

// console.log('this is just a message'); //3 +

// setTimeout(function cb1() { //7 +
// console.log('timeout 2');
// },0);

// new Promise((res, rj) => res('promise 2')).then(console.log); //5 +

// console.log('thes is the end?'); //4 +


// })();


//


// const controller = new AbortController()

// const timeoutId = setTimeout(() => controller.abort(), 5000)

// fetch(url, { signal: controller.signal }).then(res => {

// })