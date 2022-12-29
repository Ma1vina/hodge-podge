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
    let str = "мадам"
    function getPalind(str){
            let arr = str.split('');
            let arr2 = str.split('').reverse();

    	for(let i = 0; i < arr.length; i++) {
    		if(arr[i]!== arr2[i]) { 
    			return false;
    		}else{
                return true;
            }
      	}
    }
    console.log(getPalind(str));
