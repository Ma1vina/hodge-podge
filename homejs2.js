// console.log(null === null);// true

// var dog = {
//   breed: 'Beagles',
//   lovesToChase: 'rabbits'
// };

// function chase() {
//   console.log(this.breed + ' loves chasing ' + this.lovesToChase + '.');
// }

// dog.foo = chase;
// dog.foo(); // в консоль попадёт Beagles loves chasing rabbits.

// chase(); //так эту функцию лучше не вызывать

// // Функция-конструктор
// var Friend = function(name, password, interests, job){
//   this.fullName = name;
//   this.password = password;
//   this.interests = interests;
//   this.job = job;
// };

// function sayHello(){
//    // раскомментируйте следующую строчку, чтобы узнать, на что указывает this
//    // console.log(this);
//   return `Hi, my name is ${this.fullName} and I'm a ${this.job}. Let's be friends!`;
// }

// // Мы можем создать один или несколько экземпляров объекта типа Friend, используя ключевое слово new
// var john = new Friend('John Smith', 'badpassword', ['hiking', 'biking', 'skiing'], 'teacher');

// console.log(john);

// // Назначим функцию ключу greeting объекта john
// john.greeting = sayHello;

// // Вызовем новый метод объекта
// console.log( john.greeting() );

// // Помните о том, что sayHello() не стоит вызывать как обычную функцию
// console.log( sayHello() ) ;

// var objReg = {
//     hello: function() {
//       console.log(this);
//     }
//   };

//   var objArrow = {
//       hello: () => console.log(this) //==>почему {} ?
//   };

// //   objReg.hello(); // возвращает, как и ожидается, объект objReg
//   objArrow.hello(); // возвращает объект Window!

//   let x = () =>{
//     console.log(this);
//   }
//   x()
// ________________________________

// методы animal
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };

// // модифицирует rabbit.isSleeping
// rabbit.sleep();
// animal.sleep();

// console.log(rabbit.isSleeping); // true
// console.log(animal.isSleeping); // undefined (нет такого свойства в прототипе)

// _______________________________________

// let animal = {
//     eats: true
//   };

//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };

//   // Object.keys возвращает только собственные ключи
//   alert(Object.keys(rabbit)); // jumps

//   // for..in проходит и по своим, и по унаследованным ключам
//   for(let prop in rabbit) alert(prop); // jumps, затем eats
//   ___________________________________________

// ____________________________________

// let animal = {
//     jumps: null
//   };
//   let rabbit = {
//     __proto__: animal,
//     jumps: true
//   };

// console.log(rabbit.jumps ); // true

//   delete rabbit.jumps;
// console.log(rabbit.jumps ); // null

//   delete animal.jumps;
// console.log(rabbit.jumps ); // undefined
// _____________________________________________

// function Rabbit(name) {
//     this.name = name;
//   }
//   Rabbit.prototype.sayHi = function() {
//     alert( this.name );
//   }

//   let rabbit = new Rabbit("Rabbit");

//   rabbit.sayHi();                        // Rabbit
//   Rabbit.prototype.sayHi();              // undefined
//   Object.getPrototypeOf(rabbit).sayHi(); // undefined
//   rabbit.__proto__.sayHi();              // undefined

// ____________________________________________
// const f1 = () => { // стрелочная функция
//     console.log(this);
//   };

// //   f1(); // undefined

//   function f2() { // обычная функция
//     console.log(this);
//   }

//   f2();

//   // ____________________________________________

// ____________________________________________

// const company = {
//   f1: () => { // стрелочная функция
//     console.log(this);
//   },
//   f2() { // обычная функция
//     console.log(this);
//   },
// };

// company.f1(); // undefined
// company.f2(); // { f1: [Function: f1], f2: [Function: f2] }

// _________________________________
// function globalFunc() {
//   console.log(this);
// }
// const globalArrowFunc = () => {
//   console.log(this);
// }

// console.log(this); // ?
// globalFunc(); // ?
// globalArrowFunc(); // ?

// _________________________________
// const user = {
//   name: 'Bob',
//   userThis: this,
//   func() {
//     console.log(this);
//   },
//   arrowFunc: () => {
//     console.log(this);
//   }
// };

// console.log(user.userThis); // ?
// user.func(); // ?
// user.arrowFunc(); //  undefined
// _______________________________________
// let user = {
//   firstName: "Вася",
//   // sayHi() {
//   //   console.log(`Привет, ${this.firstName}!`);
//   // }
// };

// let  sayHi =() => {
//   console.log(`Привет, ${this.firstName}!`);
// }

// // let sayHi = user.sayHi.bind(user); // (*)

// user.y = sayHi.call(user);
// user.y(); // Привет, Вася!

// ____________________________________

// let user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   }}

// // let x = user.loginOk()

// console.log( user.loginOk.bind(user)());

// __________________________________
// let f = () => {
//   console.log( this ); // ?
// }

// f()
// _____________________________________

// let prom = new Promise((resolve, reject) => {
//   const value = { grid: 1 };
//   resolve(value);
// }).then((value) => {
//   console.log(value);
//   return "kek";
// })

// Promise.resolve('1')

// let res = fetch("http//ya.com")
// res.then(()=>{

// })

// let promise = new Promise((resolve, reject) =>{
//   setTimeout(() => reject(new Error("err")), 1000)
// })


// ________________________________________
// let promise = new Promise((resolve, reject) =>{
//  resolve(1)
// }).then((val) => console.log(val))
// _____________________________________

// let promise = new Promise((resolve, reject) =>{
//  resolve(1)
// })
// promise.then(
//   function(result) {console.log(result); },
//   function(error) { console.log("тут ошибка", error); }
// );
// то есть
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// // reject запустит вторую функцию, переданную в .then
// promise.then(
//   result => console.log(result), // не будет запущена
//   error => console.log(error) // выведет "Error: Whoops!" спустя одну секунду
// );

// _______________________________________________

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Ошибка!")), 1000);
// });

// // .catch(f) это то же самое, что promise.then(null, f)
// promise.then(null, (function(){console.log("err here")})); // выведет "Error: Ошибка!" спустя одну секунду


//ОТВЕТЫ
// ________________________________________________

// var animal = { jumps: null };
// var rabbit = { jumps: true };

//  rabbit.__proto__ = animal;
// console.log(rabbit.jumps); //true

//  delete rabbit.jumps;
//  console.log(rabbit.jumps);//null

//  delete animal.jumps;
//  console.log(rabbit.jumps);//undefined

// ____________________________________________________

// function foo(){
//     console.log(this.bar);
// }

// var bar = "global";

// var obj1 = {
//     bar: "obj1",
//     foo:  foo
// };

// var obj2 = {
//     bar: "obj2"
// };

// foo();// undefined
// obj1.foo(); //  "obj1"
// foo.call(obj2); //  "obj2"
// new foo(); // undefined
// __________________________

// Event Loop

// console.log(1);

// Promise.resolve()
// .then(() => console.log(2));

// setTimeout(() => console.log(3),0);

// Promise.resolve()
// .then(setTimeout(() => console.log(4), 0));

// console.log(5);

//1, 5, 2, 3, 4

// ___________________________________



// Promise.resolve()
// .then(() => console.log(1))
// .then(() => console.log(1));

// Promise.resolve()
// .then(() => console.log(2))12478=ж

// .then(() =>console.log(2));

// //1,2, 1,2   ???

// _____________________________

// setTimeout(() => console.log(1), 1500);
// setTimeout(() => console.log(2),0)

//2,1


console.log("rr"-150);
console.log("10" +150);