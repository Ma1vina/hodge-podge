// 1
// Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5, 6, 7];
// for(let i = 0; i < arr.length; i++){

// let li = document.createElement('li');
// li.innerHTML = arr[i];
// li.addEventListener('click', func);

// parent.appendChild(li);
// }
// function func () {
// 	this.innerHTML =this.innerHTML + "!" ;
// 	this.removeEventListener("click",func);
// 	};


// 2
// В цикле создадим 9 новых абзацев, при этом сделаем так, чтобы любой абзац удалялся по клику на нем:

// let parent = document.querySelector('#parent');

// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = i;
	
// 	p.addEventListener('click', function() {
// 		this.remove();
// 	});
	
// 	parent.appendChild(p);
// }

// 3
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась 
// по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.

// let parent =document.querySelector("#parent");
// let btn = document.querySelector("#button");
// let liAll = document.querySelectorAll("li");
// let i = 4;

// btn.addEventListener('click', function(){
//     let li = document.createElement("li");
//     li.textContent = i;
//     i++;
//     parent.appendChild(li);
// });

// parent.addEventListener("click", function(event){
//     var li = event.target.closest("li");

// 	if (li) {
// 		li.remove(); 
// 	}
// });

// 4
//удаление ссылки
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');

// remove.addEventListener('click', function() {
// 	elem.remove();
// });

// 5
// cоздание ссылок на удаление
// let elems = document.querySelectorAll('#parent p');

// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }

// 6
// Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
// let liAll = document.querySelectorAll("#parent li");

// for(let li of liAll){
//     let remove = document.createElement("a");
//     remove.href = "";
//     remove.textContent = "удалить"
//     li.appendChild(remove);

//     remove.addEventListener("click", function(event){
//    li.remove();
//    event.preventDefault()
//     })
// }


// 7

// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.value = elem.textContent; // записываем в инпут текст абзаца

// input.addEventListener('keypress', function() {
// 	elem.textContent = this.value;
// });

// Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.



// // 8
// создание инпута по клику на абзац. затем по потери фокуса в инпуте меняетсяся текст абзаца

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		this.remove(); // удалим инпут
// 	});
	
// 	elem.parentElement.appendChild(input);
// });


// 9
// Давайте теперь сделаем так, чтобы при редактировании инпут появлялся в самом абзаце - вместо текста этого абзаца.
//  Пусть затем при окончании редактирования инпут будет убираться, а вместо него опять появляться текст абзаца.
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	elem.textContent = '';
// 	elem.appendChild(input);
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func); // повесим событие обратно
// 	});
	
// 	elem.removeEventListener('click', func);
// });

// 10
// Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно
//  будет поредатировать текст этой li.

// let elems = document.querySelectorAll('li');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }


// 11
// Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец
//  каждого абзаца ссылку на удаление.
// let parent = document.querySelector("#parent");
// let pAll = document.querySelectorAll("#parent p");
// let text = "";
// for(let p of pAll){
//     p.addEventListener("click", function func(){
//         text = "<span>" + p.innerHTML  + "</span>";
//         p.innerHTML = text;
        

//         let spans = document.querySelectorAll("span");
//          for(let span of spans){   
//         let input = document.createElement("input");
//         input.value = span.textContent;
//         span.innerHTML = "";
//         span.appendChild(input);

//         input.addEventListener("blur", function(){
//         span.textContent = this.value;
//         p.addEventListener("click", func);
//         });
//         p.removeEventListener('click', func);
//     };
//     });
// };


// 12
//обернуть каждый элемент строки в span,кроме пробелов
// let text = document.getElementsByTagName('div')[0].innerHTML;
// let newstroka = '';
// for (var i = 0; i < text.length; i++){
//     if (text[i]!=' '){
//     newstroka = newstroka +'<span data-charCode=' + text[i].charCodeAt(0) +'>' + text[i] + '</span>';   
//     }else newstroka = newstroka + ' '; 
// }
// document.getElementsByTagName('div')[0].innerHTML = newstroka;





