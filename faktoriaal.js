function factori (n) {
    let x = 1;
    for (x; n > 1; n--) {
x = x*n;
    }
    console.log (x);
return x;
}
factori(4); // не совсем правильный вариант, здесь консоль.лог нужно вывести из тела функции



function factorial(r){
    let x = 1;
    if (r == 0 || r == 1){
      return x;
    }else{
      for(let i = r; i >= 1; i--){
        x = x * i;
      }
      return x;
    }  
  }
  let r = 4;
  x = factorial(r)
  console.log(x);