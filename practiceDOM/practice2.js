
// 1
// Дан массив. Выведите его элементы в виде списка ul.

// let arr = [1,2,3,4];

// for(var i = 0; i < arr.length; i++){
//     var ul = document.createElement('ul');
//     var parent = document.querySelector("div");
//     var li = document.createElement("li");
//     li.innerHTML = arr[i];
//     parent.appendChild(ul);
//     ul.appendChild(li);
// };

// 2
// Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого
//  ее можно будет поредактировать.

// let arr = [1,2,3,4];

// for(var i = 0; i < arr.length; i++){
//     var ul = document.createElement('ul');
//     var parent = document.querySelector("#div");
//     var li = document.createElement("li");
//     li.innerHTML = arr[i];
//     parent.appendChild(ul);
//     ul.appendChild(li);

//     let elems = document.querySelectorAll('li');

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
// };
// };

// 3
// Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый
//  элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.

let arr = [1,2,3,4];

for(var i = 0; i < arr.length; i++){
    var ul = document.createElement('ul');
    var parent = document.querySelector("#div");
    var li = document.createElement("li");
    li.innerHTML = arr[i];
    parent.appendChild(ul);
    ul.appendChild(li);

    var elems = document.querySelectorAll('li');
// function edit(event){
for (let elem of elems) {
    // var elem = event.target.closest('li');
    // if (elem) {
	elem.addEventListener('click', function func() {
		var input = document.createElement('input');
		input.value = elem.textContent;
		
		elem.textContent = '';
		elem.appendChild(input);
		
		input.addEventListener('blur', function() {
			elem.textContent = this.value;
			elem.addEventListener('click', func);
		});
		elem.removeEventListener('click', func);
	});
};
};
// };
let btn =document.querySelector("button");
// function func1(){
    btn.addEventListener("click", function(){
        var newInp = document.createElement("input");
        ul.appendChild(newInp);
        newInp.addEventListener("blur",function(){
            var newli = document.createElement("li");
            newli.textContent = this.value;
            newInp.remove();
            ul.appendChild(newli)
          newli.addEventListener("click", edit);
        });
    })

 function edit(event){
        var elem = event.target.closest('li');
        if (elem) {
        elem.addEventListener('click', function func() {
            var input = document.createElement('input');
            input.value = this.textContent;
            
            elem.textContent = '';
            elem.appendChild(input);
            
            input.addEventListener('blur', function() {
                elem.textContent = this.value;
                elem.addEventListener('click', func);
            });
            elem.removeEventListener('click', func);
        });
    };
    };


