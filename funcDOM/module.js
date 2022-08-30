// ;(function() {
// 	let elem = document.querySelector('#div1'); // первый див
	
// 	function func(num) {
// 		return num * num; // возведем в квадрат
// 	}
	
// 	elem.addEventListener('click', function() {
// 		this.textContent = func(elem.textContent);
// 	});
// })();

// ;(function() {
// 	let elem = document.querySelector('#div2'); // второй див
	
// 	function func(num) {
// 		return num * num * num; // возведем в куб
// 	}
	
// 	elem.addEventListener('click', function() {
// 		this.textContent = func(elem.textContent);
// 	});
// })();


// 2
// //
// ;(function(selector1, selector2) {
// 	let div = document.querySelector(selector1);
// 	let btn = document.querySelector(selector2);
	
// 	function func(num) {
// 		return num * num;
// 	}
	
// 	btn.addEventListener('click', function() {
// 		div.textContent = func(div.textContent);
// 	});
// })('#div', '#btn');


//экспорт из модуля
// 3
// ;(function() {
// 	let str = 'переменная модуля';
	
// 	function func() {
// 		alert('функция модуля');
// 	}
	
// 	window.func = func;
//     window.str = str;
// })();

// func(); 
// console.log(str);

// 4 Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными.
// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
	
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
// 	function func4() {
// 		alert('функция модуля');
// 	}
// 	function func5() {
// 		alert('функция модуля');
// 	}
//     window.module1 = {func1,func2,func3,func4,func5};
//     window.elem = {str1,str2,str3};
// })();

// console.log(module1);
// console.log(elem);
// console.log(elem.str1);

// 5

;(function() {
function avg1(arr) {
	return sum(arr, 1) / arr.length;
}

function avg2(arr) {
	return sum(arr, 2) / arr.length;
}

function avg3(arr) {
	return sum(arr, 3) / arr.length;
}

// вспомогательная функция
function sum(arr, pow) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem ** pow;
	}
	
	return res;
}
window.module1 = {avg1,avg2,avg3}
})();
//Оформите этот код в виде модуля. Эспортируйте наружу все функции, кроме вспомогательной.

alert(module1.avg1([1, 2, 3]) + module1.avg2([2,2]));