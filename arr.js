let y = 0;
let arr = [3, 2, 1];

for (let i = 0;  i < arr.length; i++){
 if (y > arr[i]){
    } else { 
        arr[0]= arr[i];
    }
}
console.log(arr[0]);
//
let r = arr[0]; 
for (let s = r; s < arr.length; s++){
    if (r > arr[s]){
    } else { 
            arr[1] = arr[s];
        }
}
console.log(arr[1]);