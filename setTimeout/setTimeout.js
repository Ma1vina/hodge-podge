"use strict"

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	setTimeout(function() {
// 		alert('!');
// 	}, 3000);
// });

// 1
// Дан абзац. Напишите код, который выведет сообщение в этот абзац через 5 секунд после загрузки страницы.
// let p = document.querySelector("p");
// setTimeout(function(){
//     p.innerHTML = "hello!";
// },5000);

// 2
// Выведите в консоль число 0. Через секунду выведите число 1, через две секунды выведите число 2, через 3 секунды 
// выведите число 3. И так далее до бесконечности.
let i=0;
function timer(){
    setTimeout(function(){
        console.log(i++);
    },10000);
    timer();
}
timer();