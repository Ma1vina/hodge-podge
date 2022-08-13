let elem = document.getElementById('elem');

function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

let newFunc = func.bind(elem);
newFunc("12","13")

newFunc('John', 'Smit'); // тут должно вывести 'hello, John Smit'
newFunc('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'