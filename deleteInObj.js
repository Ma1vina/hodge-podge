let obj = {a: 1, b: 2, c: 3};
//удалим один из элементов:
delete obj.b;
console.log(obj); // выведет {a: 1, c: 3}

let arr = ['a', 'b', 'c'];
//удалим один из элементов массива:
delete arr[1];
//В результате элемент удалится, но массив станет разреженным:
console.log(arr); // выведет ['a',, 'c']


//задачка:
let arr2 = ['a', 'b', 'c', 'd', 'e'];
delete arr2[0];
delete arr2[1];
console.log(arr2.length); //5

