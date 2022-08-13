//Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться
// из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.

let elem = document.querySelector('#elem');
let p =document.querySelector("p")
let param1 = "john";
let param2 = "smit"
function func(param1, param2) {
	console.log(this.value +", " + param1 + " " + param2);
}
(func.call(elem, param1, param2));
 