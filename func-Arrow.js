//Задача 1/ Дана следующая функция с коллбэком: Упростите коллбэк через стрелочную функцию.
// let result = every([1, 2, 3, 4, 5], function(elem) { if (elem > 0) { return true; } else { return false; } });

// let result = every([1, 2, 3, 4, 5], elem => elem > 0);


//Задача 2.
// let result = every([1, 2, 3, 4, 5], function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });


//let result = every([1,2,3,4,5], (elem,index) => elem * index > 10);