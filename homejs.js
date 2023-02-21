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

let arr = [2,4,5,3];
arr.sort((a,b)=>{
  return 1;
})
console.log(arr);