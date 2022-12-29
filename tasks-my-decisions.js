// function flatten(array) {
//     const res = []
  
//     for (let i = 0; i < array.length; i++) {
//       if (Array.isArray(array[i])) {
//         const flat = flatten(array[i])
//         for (let j = 0; j < flat.length; j++) {
//           res.push(flat[j])
//         }
//       } else {
//         res.push(array[i])
//       }
//     }
  
//     return res
//   }

//   console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]


//   console.log(2 && 1 && null && 0 && undefined);

//   console.log(null + {0:1}[0] + [,[1],][1][0]);

//   console.log(  4 - "5" + 0xf - "1e1");

// for(var i=0; i<10; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 100);
//   }

//   console.log(0 || "" || 2 || undefined || true || falsе);


// console.log(20e-1['toString'](2));


// function User() { }
// User.prototype = { admin: false };

// let user = new User();

// User.prototype = { admin: true };

// console.log(user.admin);
//

// function MyArray() { }
// MyArray.prototype = [];

// let arr = new MyArray();
// arr.push(1, 2, 3);
// console.log(arr.length);

// [].push(1,2).unshift(3).join()



   //палиндром       
    // let str = "мадам"
    // function getPalind(str){
    //         let arr = str.split('');
    //         let arr2 = str.split('').reverse();

    // 	for(let i = 0; i < arr.length; i++) {
    // 		if(arr[i]!== arr2[i]) { 
    // 			return false;
    // 		}else{
    //             return true;
    //         }
    //   	}
    // }
    // console.log(getPalind(str));

    // function numberToString(num) {
    //     return String(num);
    //   }
    //   console.log(numberToString(123));
    //   console.log(123);

    // сумма положительнвх
    // function positiveSum(arr) {
    //     let summ = 0;
    //     for(let i = 0; i<arr.length;i++){
    //       if(arr[i]>=0){
    //         if(arr[i] !== undefined){
    //         summ = summ +arr[i]
    //       }}
    //     }
    //     return summ;
    //   }
    //   console.log(positiveSum([1,2,-3]));


    //найти максимальное и минимальное, двумя функциями
//     let arr = [20, 3, 4, 5, -50, 100, 19, 200, 5000, 599];
// let max = arr[0];

// arr.forEach(function (elem, index) {

//     if(index > 0 ){
//         if(max < elem){
//             max = elem;
//         }

//     }
// });

// console.log(max);


// let arr = [20, 3, 4, 5, -50, 100, 19]
// let min = arr[0];

// arr.forEach(function (elem, index) {

//     if(index > 0 ){
//         if(min > elem){
//             min = elem;
//         }

//     }
// });

// console.log(min);

// function min(list){
//     let min = list[0] 
//     list.forEach(function(elem,index){
//       if(index>0){
//        if(min>elem){
//         min = elem
//       }}
//     })
//      console.log("min =" + min)
//  }

// min([1,2,30,4,5,7,-111]);



//рассчитать ИМТ
function bmi(weight, height) {
    let e = weight/(height/100)**2
    let x = e.toFixed(1);
    if(x<= 18.5){
       return "недост"
    } if(x>18.5 && x<=25.0){
        return "норма"
    }if(x>25.5 && x<=30.0){
        return "избыт"
  }if(x>30.0){
    return 'ожирение'
  }}

  console.log(bmi(45,158));



  function bmi(weight, height) {
    let e = weight/(height)**2
    let x = e.toFixed(1);
    if(x<= 18.5){
       return "недост"
    } if(x>18.5 && x<=25.0){
        return "норма"
    }if(x>25.5 && x<=30.0){
        return "избыт"
  }if(x>30.0){
    return 'ожирение'
  }}
   console.log(bmi(45,1.58));