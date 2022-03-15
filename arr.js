
function sortirovka(a, b) {
  return a - b;
}

let arr = [4, 2, 5, 1, 3];
arr.sort(function(a, b) {
  return a - b;
});
console.log(arr); // [1, 2, 3, 4, 5]
