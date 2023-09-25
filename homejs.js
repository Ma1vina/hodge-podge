// let x =Array.from({ length: 5 }, (value="1", index) => index);
// console.log(x);

// let names= [ 'Lawrence', 'Jonah', 'Victor', 'Alex', 'Polya', 'Ugochi' ]
// names.splice(1, 1)
// console.log(names)

// class HashTable {
//     constructor(size) {
//       this.data = new Array(size);
//     }

//     hashFunction(value) {
//       let hash = 0;
//       for (let i = 0; i < value.length; i++) {
//         hash = (hash + value.charCodeAt(i) * i) % this.data.length;
//         // console.log(hash);
//       }
//       return hash;
//     }
//   }

//   let x = new HashTable(5);
//   console.log(x.hashFunction("hey"));

// let arr = [2,4,5,3];
// arr.sort((a,b)=>{
//   return -1;
// })
// console.log(arr);

// let a = 10;

function func () {
console.log(a);
}

function wrap () {
let a = 20;
func();
}
a = 30;
wrap();
a = 40;

//незавиcимые счетчки
// 1
// const getCounter = () => {
//   let currentValue = 0;

//   const innerFunc = () => {
//     currentValue++;
//     console.log(currentValue);
//   };
//   return innerFunc;
// };
// const counter1 = getCounter();
// const counter2 = getCounter();
// counter1();
// counter1();

// 2
// function makeCounter() {
//     let currentCount = 0;

//     return function() {
//       return currentCount++;
//     };
//   }

//   let counter = makeCounter();
//  console.log(counter())
// console.log(counter());

// let counter2 = makeCounter();
//   console.log(counter2() );


// нахождение суммы из остаточных параметров\\корирование
// const sum = (num) => {
//   let currentSum = num;

//   const innerFunc = (a) => {
//     if (a === undefined) return currentSum;
//     currentSum += a;
//     return innerFunc;
//   };
//   return innerFunc(0);
// };
// console.log(sum(2)(2)(2)());



// let arr =[1, [2, 22, [222, [ 2222]]], 3, 4, 5, 6, [66, [666,,,,,[6666]]], 7, 8]
// var counter =0;
// function getG (arr){
// for(let i=0; i<arr.length; i++){
//      counter++
//     if(Array.isArray(arr[i])){
//       return getG(arr[i])   
//     }
// }
// return counter;
// }

// console.log(getG(arr))

// function glubinaMassiva (arr){ 
//     for(counter=-1, s=[...JSON.stringify(arr)].filter(i=>(i=="[" || i=="]")).join(""); s.length != 0; counter++){
//        s = s.replace(/\[\]/g, ""); 
//     } 
//     return counter; 
//  }

//  console.log(glubinaMassiva([[[[[[[[[]]]]]]]],[[[[[[[]]]]]]]]));



// Object.defineProperty
// let user = { };

// Object.defineProperty(user, "name", {
//   value: "John",
//   // для нового свойства необходимо явно указывать все флаги, для которых значение true
//   enumerable: true,
//   configurable: true
// });

// alert(user.name); // John
// user.name = "Pete"; // Ошибка

// let a = 10;

// function func (){
//     console.log(a);
// }
//     function wrap (){
//         let a = 20;

//         func();
    
// }

// console.log(wrap());

//  a=30

//  console.log(wrap());

// let arr = [20,13,14,34,55,66,3333]

// let max = (arr[0]);
// let min = (arr[0]);

//     for(let i = 1; i<arr.length; i++){
 
//       if(arr[i] > max) max = arr[i];
//       if(arr[i] < min) min = arr[i];
//     }
//     console.log(max,min);
    



// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// // promise1.then(res => {
// //   console.log(res)
// // })

// console.log('end');



// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//       console.log("timerStart");
//       resolve("success");
//       console.log("timerEnd");
//     }, 0);
//     console.log(2);
//   });
  
// //   promise.then((res) => {
// //     console.log(res);
// //   });
  
//   console.log(4);



// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('end');

//



/// 'TEST A1', err
// TEST A5', 10
// 'TEST A4', 10


let a; 

let p4 = new Promise(function (resolve) {
// console.log('TEST A1', a);1
a = 25;
setTimeout(() => {
// console.log('TEST A2', a);3
// resolve(a);
}, 100);
});


setTimeout(function timeout() {
a = 10;
// console.log('TEST A3', a);5
}, 100);


p4.then(function (b) {
// console.log('TEST A4', a);4
});

// console.log('TEST A5', a);2


// function changeStuff(a, b, c)
// {
//   a = a * 10;
//   b.item = "changed";
//   c = {item: "changed"};
// }

// var num = 10;
// var obj1 = {item: "unchanged"};
// var obj2 = {item: "unchanged"};

// changeStuff(num, obj1, obj2);

// console.log(num);
// console.log(obj1.item);
// console.log(obj2.item);




// let arr= [1,2,3,4,4,567,5];
// let ars = [1,6,5,7]

// // function uniq(array,arr){ 
// //     let slim = array.concat(arr)
// //     return [...new Set(slim)];
// // }

// // console.log(uniq(arr,ars));



// function getMax(arr){
//     let max = arr[0];
//     for(let i=0; i<arr.length;i++){
//      if(max < arr[i]){
//         max = arr[i]
//      }
//     }
//     return max;
// }

// console.log(getMax(arr));


// var f = function() {
//   console.log(1);

// }

// var execute = function(f) {
//   setTimeout(f, 1000);
// }

// execute(f); // что выведет в консоль и почему

// f = function() {
//   console.log(2);

// }

console.log(new Date(0) + 0);
