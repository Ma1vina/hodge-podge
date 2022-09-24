import React from 'react';
import uuid from 'react-uuid';
import { useState } from 'react';
export default App;


//1
// Сделайте так, чтобы результатом рендеринга был тег ul, в тегах li которого будут стоять элементы массива.
// function App() {
// 	const arr = [1, 2, 3, 4, 5];
// 	return (
// <ul>
// 	<li>{arr[0]}</li>
// </ul>
// 	);
// }

//2
// Сделайте так, чтобы результатом рендеринга был следующий код:
// <p>
// 	name:    <span>john</span>, <br>
// 	surname: <span>smit</span>,
// </p>
// Для значений имени и фамилии используйте значения элементов объекта.
// function App() {
// 	const obj = {name: 'john', surname: 'smit'};
// 	return (
// <p>
// 	name:    <span>john</span>
// 	 <br/>
// 	surname: <span>smit</span>
// </p>
// 	);
// }

// 3
// function App() {
// 	const li1 = <li>text1</li>;
// 	const li2 = <li>text2</li>;
// 	const li3 = <li>text3</li>;

// 	return (
// 		<ul>
// 			{li1}{li2}{li3}  
// 		</ul>
// 	)
// }
// Сделайте так, чтобы результатом рендеринга было следующее:
// <ul>
// 	<li>text1</li>
// 	<li>text2</li>
// 	<li>text3</li>
// </ul>

// 4
// function App() {
// 	const items = <><li>text11</li><li>text2222</li><li>text333</li></>;
	
// 	return <ul>
// 		{items}
// 	</ul>
// }

// 5
// function App() {
// 	const str1 = 'label';
// 	const str2 = 'block';
// 	const str3 = 'elem';
	
// 	return (
// 	<div>
// 		<label id={str1} for={str2} className={str3}>text</label> <br/>
// 		<input id={str2}/>
// 	</div>
// 	)
// }


// 6
// в зависимости от содержимого константы show на экран вывелся или один, или другой текст
// function App() {
// 	let text;
// 	const show = true;
	
// 	if (show) {
// 		text = <p>text1</p>;
// 	} else {
// 		text = <p>text2</p>;
// 	}
	
// 	return <div>
// 		{text}
// 	</div>;
// }

// 7
// Если в age записано больше 18 лет, то в тексте тега div покажите пользователю абзац с одним текстом,
//  а если меньше - то с другим.
// function App() {
// 	const age = 19;
	
// 	return (<div>
// 		{age<18 ? <div>text1</div> : <div>text2</div>}
// 	</div>
// 	);
// }


// 8
// если в show будет true, то вставиться абзац с текстом, а если будет false, то ничего не вставится:

// function App() {
// 	const show = true;
	
// 	return <div>
// 		{show && <p>text</p>}
// 	</div>;
// }

// 9
// не истинно
// function App() {
// 	const hide = false;
	
// 	return <div>
// 		{!hide && <p>text</p>}
// 	</div>;
// }

// 10
// function App(num1, num2) {
// 	num1 =1;
// 	num2 =2;
// 	function square(num1) {
// 		return num1 ** 2;
// 	}
	
// 	function cube(num2) {
// 		return num2 ** 3;
// 	}
	
// 	const sum = square(num1) + cube(num2);
	
// 	return <div>
// 		{sum}
// 	</div>
// }

//11 Сделайте функцию getDigitsSum, которая будет находить сумму цифр переданного числа. С ее помощью
//  выведите на экран сумму цифр числа 123.
// function App(str) {
//   str = "12";
// 	function getArr(str) {
// 		let arr = str.split("")
// 		return arr;
// 	}
	
// 	function getSum(arr) {
// 		let summ = 0;{
//   for(let i=0;i<arr.length; i++){
//     summ = summ + arr[i];
//   }
//   return summ;
// 	}	
// 	const summX = getArr(getSum(123));
// 	return <div>
// 		{summX}
// 	</div>
// }
// }
// ???????????? не получаются вложенные


// !!!!!!!!!!!!!!!!!!!!
// function App(numb) {
//   numb = 53;
// let str = "" + numb
// 	let summ = 0;
//   for(let i=0;i<str.length; i++){
//     summ = summ +  +str[i];
//   }
// 	return (
// 	<div>
// 		{summ}
// 	</div>
// 	)
// }

// 12
// function App() {
// 	function showMess() {
// 		alert('hello');
// 	}
	
// 	return <div>
// 		<button onClick={showMess}>show</button>
// 	</div>;
// }


// 13
// Сделайте так, чтобы по клику на первую кнопку срабатывала первая функция, а по клику на вторую кнопку -
//  вторая функция.
// function App() {
// 	function show1() {
// 		alert("hello");
// 	}
	
// 	function show2() {
// 		alert("buy");
// 	}
	
// 	return <div>
// 		<button onClick={show1}>act1</button>
// 		<button onClick={show2}>act2</button>
// 	</div>;
// }


// 14
// function App() {
// 	function showMess(name) {
// 		alert('hello, ' + name);
// 	}
	
// 	return <div>
// 		<button onClick={() => showMess('Marina')}>show</button>
// 	</div>;
// }

// 15
// Сделайте так, чтобы по клику на первую кнопку алертом выводилось число 1, по клику на вторую кнопку - число 2,
//  а по клику на третью - число 3.

// function App() {
//   function showM(text){
// 	alert(text)
//   }

// 	return <div>
// 		<button onClick={() => showM("1")}>act1</button>
// 		<button onClick={() => showM("2")}>act2</button>
// 		<button onClick={() => showM("3")}>act3</button>
// 	</div>;
// }


// 16
// function App() {
// 	function func(event) {
// 		console.log(event); // объект с событием
// 	}
	
// 	return <div>
// 		<button onClick={func}>act</button>
// 	</div>;
// }

// 17
// Дана кнопка. По клику на нее получите выведите в консоль event.target клика.

// function App() {
// 	function func(event) {
// 		console.log(event.target); // объект с событием
// 	}
	
// 	return <div>
// 		<button onClick={func}>act</button>
// 	</div>;
// }

// 18 Получить не только наш параметр, но и объект event
// function App() {
// 	function func(arg, event) {
// 		console.log(arg, event);
// 	}
	
// 	return <div>
// 		<button onClick={func.bind('eee', event)}>act</button>
// 	</div>;
// }


// 19
// Модифицируйте предыдущую задачу так, чтобы объект с событием передавался вторым параметром функции, 
// находясь между первым и третьим параметрами.
// function App() {
// 	function func(arg, event, wec) {
// 		console.log(arg, event, wec);
// 	}
	
// 	return <div>
// 		<button onClick={(event) => func('eee', event, "123")}>act</button>
// 	</div>;
// }

// 20
// function App() {
// 	const arr = [1, 2, 3, 4, 5];
	
// 	const res = arr.map(function(item, index) {
// 		return <p key={index}>{item}</p>;
// 	});
	
// 	return <div>
// 		{res}
// 	</div>;
// }

// 21 объекты

// const prods = [
// 	{id: 1, name: 'product1', cost: 100},
// 	{id: 2, name: 'product2', cost: 200},
// 	{id: 3, name: 'product3', cost: 300},
// ];

// function App() {
// 	const res = prods.map(function(item) {
// 		return <p key={item.id}>
// 			<span>{item.name}</span>:
// 			<span>{item.cost}</span>
// 		</p>;
// 	});
	
// 	return <div>
// 		{res}
// 	</div>;
// }

// 22
// тпблицы

// const prods = [
// 	{id: 1, name: 'product1', cost: 100},
// 	{id: 2, name: 'product2', cost: 200},
// 	{id: 3, name: 'product3', cost: 300},
// ];

// function App() {
// 	const rows = prods.map(function(item) {
// 		return <tr key={item.id}>
// 			<td>{item.name}</td>
// 			<td>{item.cost}</td>
// 		</tr>;
// 	});
	
// 	return <table>
// 		<tbody>
// 			{rows}
// 		</tbody>
// 	</table>;
// }


// function App() {
// 	const rows = prods.map(function(item) {
// 		return <tr key={item.id}>
// 			<td>{item.name}</td>
// 			<td>{item.cost}</td>
// 		</tr>;
// 	});
	
// 	return <table>
// 		<thead>
// 			<tr>
// 				<td>название</td>
// 				<td>стоимость</td>
// 			</tr>
// 		</thead>
// 		<tbody>
// 			{rows}
// 		</tbody>
// 	</table>;
// }

// 23
// генерация id
// function id(){
//     return uuid()
// }

// const prods = [
// 	{id: id(), name: 'product1', cost: 100},
// 	{id: id(), name: 'product2', cost: 200},
// 	{id: id(), name: 'product3', cost: 300},
// ];


// function App() {
// 	const res = prods.map(function(item) {
// 		return <p key={item.id}>
// 			<span>{item.name}</span>:
// 			<span>{item.cost}</span>
// 		</p>;
// 	});
	
// 	return <div>
// 		{res}
// 	</div>;
// }
//получилось:)))))



// const array = ['one', 'two', 'three'];
// function App() {
//     	const res = array.map(function(item) {
//     		return <p key={uuid()}>{item}</p>;
//     	});
        
//     	return <div>
//     		{res}
//     	</div>;
//     } // генерировать id в атрибуте неправильно!


// 24
// Стейты



// function App() {
// 	const [name, setName] = useState('prod');
	
// 	return <div>
// 		<span>{name}</span> // изначальное значение
// 	</div>;
// }


// function App() {
// 	let [name, setName] = useState('prod');
	
// 	function clickHandler() {
// 		setName('xxxx');
// 	}
	
// 	return <div>
// 		<span>{name}</span>
// 		<button onClick={clickHandler}>btn</button>
// 	</div>;
// }


function App() {
	let [name, setName] = useState('prod');
	let [cost, setCost] = useState('1000');
	
	function clickHandler1() {
		setName('xxxx');
	}
	function clickHandler2() {
		setCost('2000');
	}
	
	return <div>
		<span>{name}</span>
		<span>{cost}</span>
		
		<button onClick={clickHandler1}>btn1</button>
		<button onClick={clickHandler2}>btn2</button>
	</div>;
}