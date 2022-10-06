// const a = {};
// function clear(obj){
//     obj.x= 40;
//     obj = null;
// }
// clear(a);
// console.log(a);



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


var x = 10;
 function bar (funArg) {
   var x = 30;
funArg();
}

 function foo() { 
     console.log(x);
}
foo.x = 20;
bar.x = 40;

bar(foo);