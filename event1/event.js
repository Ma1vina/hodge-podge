// 1
let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
	if(event.type == "click"){
        elem.classList.add("color1");
    }else{
        elem.classList.add("color2");

    }
}


// 2  Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент
// введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
let inp = document.querySelector("input");
let p = document.querySelector("p");

inp.addEventListener("keypress", func);
function func(event){
    if(event.keyCode == 13){
        p.innerHTML=inp.value;
        inp.value="";
    }
};

// 3
// По клику на кнопку будем выводить сообщение о том, была ли нажата одна из клавиш Ctrl, Alt и Shift:
let elem1 = document.querySelector('#elem');

elem1.addEventListener('click', function(event) {
	if (event.ctrlKey) {
		console.log('нажат Ctrl');
	}
	
	if (event.altKey) {
		console.log('нажат Alt');
	}
	
	if (event.shiftKey) {
		console.log('нажат Shift');
	}
});