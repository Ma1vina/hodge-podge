// class User {
// go(){
//     return "привет"
// }
// }

// let user = new User;

// user.name = 'john';
// user.surn = 'smit';

// console.log(user);
// console.log(user.name);
// console.log(user.surn);
// console.log(user.go());

// 2
//параметры
// class User {
// 	show(name, surn) {
// 		return name + ' ' + surn;
// 	}
// }

// let user = new User;

// console.log(user.show("mary", "reniws"));


// class User {
// 	show() {
// 		console.log(this.name);
// 	}
// }

// 3

// class User {
// 	show() {
// 		console.log(this.name);
// 	}
// }

// let user = new User;
// user.name = 'john';

// user.show(); 

// 4
// class User {
// 	show() {
// 		return this.cape(this.name);
// 	}
	
// 	cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }

// let user = new User;

// user.name = "mary"

// console.log(user.show())


// 5
// constructor
// class User {
// 	constructor() {
// 		console.log('+++');
// 	}
// }

// new User; // '+++'

// 6
// class User {
// 	constructor(name, surn) {
// 		console.log(name + ' ' + surn);
// 	}
// }

// new User('mary', 'j');

// 7
// class User {
// 	constructor(name, surn) {
// 		this.name = name;
// 		this.surn = surn;
// 	}
	
// 	show() {
// 		return this.name + ' ' + this.surn;
// 	}
// }
// let user = new User('john', 'smit');

// console.log(user.show());


// 8
// приватные свойства
// class User {
// 	#name;
	
// 	constructor(name) {
// 		this.#name = name;
// 	}
// 	show() {
// 		return this.#name;
// 	}
// }

// let user = new User('john');

// // console.log(user.#name); // ошибка
// console.log(user.show()); // 'john'


// 9
// приватные методы
// class User {
// 	#name;
// 	constructor(name) {
// 		this.#name = name;
// 	}
	
// 	show() {
// 		return this.#cape(this.#name);
// 	}
	
// 	#cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// let user = new User('john');

// console.log(user.show());


// 10
// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	getSalary() {
// 		return this.#addSign(this.salary);
// 	}
	
// 	#addSign(num) {
// 		return num + '$';
// 	}
// }

// let emp = new Employee("mary", '1000');
// console.log(emp.getSalary());



// 11
// class Employee {
// 		constructor(name, salary) {
// 			this.name = name;
// 			this.salary = salary;
// 		}
	
// 	getSalary() {
// 		return this._addSign(this.salary);
// 	}
	
// 	_addSign(num) {
// 		return num + '$';
// 	}
// }

// let emp = new Employee("mary","10");
// console.log(emp.getSalary());


// 12
// class User {
// 	constructor(name) {
// 		this._name = name;
// 	}
	
// 	show() {
// 		return this._name;
// 	}
// }


// let user = new User('john', 'smit');
// console.log(user.show());


// console.log(user._name); // ошибки нет


// 13/ Get
// class User {
// 	#name;
// 	#surn;
	
// 	constructor(name, surn) {
// 		this.#name = name;
// 		this.#surn = surn;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
	
// 	getSurn() {
// 		return this.#surn;
// 	}
// }

// let user = new User('john', 'smit');
// console.log(user.getName());
// console.log(user.getSurn());

// 14 get set
// class User {
// 	#name;
// 	#surn;
	
// 	setName(name) {
// 		if (name.length > 0) {
// 			this.#name = name;
// 		} else {
// 			throw new Error('name is incorrect');
// 		}
// 	}
// 	setSurn(surn) {
// 		if (surn.length > 0) {
// 			this.#surn = surn;
// 		} else {
// 			throw new Error('surn is incorrect');
// 		}
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSurn() {
// 		return this.#surn;
// 	}
// }
// let user = new User;
// user.setName('john');
// user.setName(''); // ошибка

// 15
// class User {
// 	#name;
// 	#surn;

// 	setName(name) {
// 		this.#name = name;
// 		return this;
// 	}
// 	setSurn(surn) {
// 		this.#surn = surn;
// 		return this;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSurn() {
// 		return this.#surn;
// 	}
// }

// let user = new User;

// user.setName('john').setSurn('smit');//цепочка

// console.log(user.getName());
// console.log(user.getSurn());

// 16
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let emp1 = new Employee('john');
// let emp2 = emp1;

// console.log(emp1 === emp2);


// 17
// class Employee {
	
// }

// let employee = new Employee;
// console.log(employee instanceof Employee);


class Student {
	constructor(name) {
		this.name = name;
	}
}
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let users = [
	new Student('user1'),
	new Employee('user2'),
	new Student('user3'),
	new Employee('user4'),
	new Student('user5'),
	new Employee('user6'),
	new Student('user7'),
];
for(let elem of users){
	console.log(elem.name);
}
// Переберите циклом массив объектов и выведите в консоль только имена работников.

