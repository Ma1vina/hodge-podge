import React from 'react';
import uuid from 'react-uuid';
import { useState } from 'react';
import { func, node, number, object } from 'prop-types';
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





// Стейты


// 1
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


// function App() {
// 	let [name, setName] = useState('prod');
// 	let [cost, setCost] = useState('1000');
	
// 	function clickHandler1() {
// 		setName('xxxx');
// 	}
// 	function clickHandler2() {
// 		setCost('2000');
// 	}
	
// 	return <div>
// 		<span>{name}</span>
// 		<span>{cost}</span>
		
// 		<button onClick={clickHandler1}>btn1</button>
// 		<button onClick={clickHandler2}>btn2</button>
// 	</div>;
// }


// 2
// function App() {
// 	let [inCart, setInCart] = useState(false);
	
// 	return <div>
// 		<span>{inCart ? 'в корзине' : 'не в корзине'}</span>
// 	</div>;
// }


// function App() {
// 	let [inCart, setInCart] = useState(false);
	
// 	return <div>
// 		<span>{inCart ? 'в корзине' : 'не в корзине'}</span>
// 		<button onClick={() => setInCart(!inCart)}>btn</button>
// 	</div>;
// }

// 3 счетчик
// function App() {
// 	let [count, setCount] = useState(0);
	
// 	function clickHandler() {
// 		setCount(count + 1);
// 	}
	
// 	return <div>
// 		<span>{count}</span>
// 		<button onClick={clickHandler}>+</button>
// 	</div>;
// }


// 4 Пусть вы хотите отображать на экране данные юзера: его имя, фамилию, возраст. 
// Сделайте для этого соответствующие стейты с начальными значениями.

// const user = [
// 	{id:getId(), firstName: "Marina",lastName: "River", age: "25"}
// ];

// function getId(){
// 	return uuid();
// }


// function App(){

// 	const result = user.map(function(elem){
// 		return(
// 			<>
// 				<p key={elem.id}> Пользователь: {elem.firstName} {elem.lastName}<br/> Возраст:  {elem.age}</p>
// 			</>
// 		)
// 	})
// 	return (
// 		<div>{result}</div>
// 	)
// }


// Сделайте кнопки для изменения имени и фамилии.
// function App() {
// 	let [firstName, setName1] = useState('Marina');
// 	let [lastName, setName2] = useState('River');
	
// 	function clickHandler1() {
// 		setName1('Jake');
// 	}
// 	function clickHandler2() {
// 		setName2('Dog');
// 	}
	
// 	return <div>
// 		<span>{firstName}</span>
// 	    <br/>
// 		<span>{lastName}</span>
// 		<br/>
// 		<button onClick={clickHandler1}>Change Name1</button>
// 		<br/>
// 		<button onClick={clickHandler2}>Change Name2 </button>
// 	</div>;
// }


// Добавьте еще один стейт, который будет показывать, забанен пользователь или нет.
//  Выведите информацию об этом в каком-нибудь теге.
// function App() {
// 	let [firstName, setName1] = useState('Marina');
// 	let [lastName, setName2] = useState('River');
// 	let [isBlocked, setBlock] = useState(false);
	
// 	function clickHandler1() {
// 		setName1('Jake');
// 	}
// 	function clickHandler2() {
// 		setName2('Dog');
// 	}
	
// 	return <div>
// 		<span>{firstName}</span>
// 	    <br/>
// 		<span>{lastName}</span>
// 		<br/>
// 		<button onClick={clickHandler1}>Change Name1</button>
// 		<br/>
// 		<button onClick={clickHandler2}>Change Name2 </button>
// 		<p>{isBlocked? "blocked" : "not blocked"}</p>
// 	</div>;
// }

// Сделайте кнопку, нажатие на которую будет банить пользователя и кнопку, 
// нажатие на которую будет разбанивать пользователя.

// function App() {
// 	let [firstName, setName1] = useState('Marina');
// 	let [lastName, setName2] = useState('River');
// 	let [isBlocked, setBlock] = useState(false);
	
// 	function clickHandler1() {
// 		setName1('Jake');
// 	}
// 	function clickHandler2() {
// 		setName2('Dog');
// 	}

	
// 	return <div>
// 		<span>{firstName}</span>
// 	    <br/>
// 		<span>{lastName}</span>
// 		<br/>
// 		<button onClick={clickHandler1}>Change Name1</button>
// 		<br/>
// 		<button onClick={clickHandler2}>Change Name2 </button>
		
// 		<p>{ isBlocked? "blocked" : "not blocked"}</p>

// 		<button onClick={() => setBlock(true)}>BLOCK</button>
// 		<button onClick={() => setBlock(false)}>not BLOCK</button>
// 	</div>;
// }

//ИНПУТЫ
//1  
// function App() {
// 	const [value, setValue] = useState('');
	
// 	function handleChange(event) {
// 		setValue(event.target.value);
// 	}
	
// 	return <div>
// 		<input value={value} onChange={handleChange} />
// 		<p>text: {value}</p>
// 	</div>;
// }


// 2
// Сделайте два инпута. Пусть текст первого инпута выводится в первый абзац, а текст второго инпута - во второй абзац.
// function App(){
// 	const[value1, setValue1] = useState("")
// 	const[value2, setValue2] = useState("")

// 	return (
// 		<div>
// 		<input value={value1} onChange={event => setValue1(event.target.value)}></input>
// 		<p>текст: {value1}</p>
// 		<input value={value2} onChange={event => setValue2(event.target.value)}></input>
// 		<p>текст: {value2}</p>
// 		</div>
// 	)
// }

// 3
// Дан инпут. Дан абзац. Сделайте так, чтобы при вводе текста в инпут, в 
// абзаце выводилось количество введенных в инпут символов.

// function App(){
// 		const[value, setValue] = useState("")
// 		return (
// 			<div>
// 			<input value={value} onChange={event => setValue(event.target.value)}></input>
// 			<p>текст: {value.length}</p>
// 			</div>
// 		)
// 	}


// 4
// Дан инпут и абзац. В инпут вводится возраст пользователя. Сделайте так, чтобы при наборе текста, в
//  абзаце автоматически появлялся год рождения пользователя.

// function App(){
// 		const[value, setValue] = useState("")

//         function getYear(){
// 			let date = new Date();
// 			let x = date.getFullYear();
// 			return x;
// 		}

// 		return (
// 			<div>
// 			<input value={value} onChange={event => setValue(event.target.value)}></input>
// 			<p>Год рождения: {getYear() - Number(value)}</p>
// 			</div>
// 		)
// 	}


// 5 вывод по кнопке
// function App() {
// 	const [value1, setValue1] = useState(0);
// 	const [value2, setValue2] = useState(0);
// 	const [result, setResult] = useState(0);
	
// 	function handleChange1(event) {
// 		setValue1(event.target.value);
// 	}
	
// 	function handleChange2(event) {
// 		setValue2(event.target.value);
// 	}
	
// 	function handleClick() {
// 		setResult(Number(value1) + Number(value2));
// 	}
	
// 	return <div>
// 		<input value={value1} onChange={handleChange1} />
// 		<input value={value2} onChange={handleChange2} />
		
// 		<button onClick={handleClick}>btn</button>
// 		<p>result: {result}</p>
// 	</div>;
// }

// 6Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате 2025-12-31.
//  По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.
// function App() {
// 	const [value1, setValue1] = useState(0);
// 	const [value2, setValue2] = useState(0);
// 	const [result, setResult] = useState(0);
	
// 	function handleChange1(event) {
// 		setValue1(event.target.value);
// 	}
	
// 	function handleChange2(event) {
// 		setValue2(event.target.value);
// 	}
	
// 	function handleClick() {
//          let str1 = value1.split("-").join(",")
// 		 let str2 = value2.split("-").join(",")
// 		 let date1 = new Date(str1);
// 		 let date2 = new Date(str2);
//          let v1 = date1.getFullYear()+ date1.getMonth()  + date1.getDate()
// 		 let v2 = date2.getFullYear()+ date2.getMonth()  + date2.getDate()
// 		setResult((v1) - (v2));
// 	}
	
// 	return <div>
// 		<input value={value1} onChange={handleChange1} />
// 		<input value={value2} onChange={handleChange2} />
		
// 		<button onClick={handleClick}>btn</button>
// 		<p>Прошло дней: {result}</p>
// 	</div>;
// }

// 7
// Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац сумму цифр введенного числа.

//  function App() {
// 	const [value, setState] = useState("")
//     const [result, setResult] = useState(0);

//    function handleChange(event){
//        setState(event.target.value)
//     }

//    function handleBlur(){
// 		let sum=0;
//       let arr = value.split("");
// 	  for(let elem of arr){
// 		sum = sum +Number(elem)
// 	  }
// 	  return setResult(sum);
//     }
//     return <div>
// 		<input onBlur={handleBlur} onChange={handleChange} value={value} />
//      <p> {result}</p>
// 	 </div>
// }


// TEXTAREA
// function App() {
// 	const [value, setValue] = useState('');
	
// 	function handleChange(event) {
// 		setValue(event.target.value);
// 	}
	
// 	return <div>
// 		<textarea value={value} onChange={handleChange} />
// 		<p>{value}</p>
// 	</div>;
// }


// ЧЕКБОКСЫ
// 1
// function App() {
// 	const [checked, setChecked] = useState(true);
	
// 	function handleChange() {
// 		setChecked(!checked); // инвертируем 
// 	}
	
// 	return <div>
// 		<input type="checkbox" checked={checked} onChange={handleChange} />
// 	</div>;
// }

//2 function App() {
// 	const [checked, setChecked] = useState(true);
	
// 	return <div>
// 		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
// 		<p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
// 	</div>;
// }

// 3
// function App() {
// 	const [checked, setChecked] = useState(true);
	
// 	let message;
// 	if (checked) {
// 		message = <p>сообщение 1</p>;
// 	} else {
// 		message = <p>сообщение 2</p>;
// 	}
	
// 	return <div>
// 		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
// 		<div>{message}</div>
// 	</div>;
// }

// 4
// СЕЛЕКТЫ
// function App() {
// 	const [value, setValue] = useState('');
	
// 	function handleChange(event) {
// 		setValue(event.target.value);
// 	}
	
// 	return <div>
// 		<select value={value} onChange={handleChange}>
// 			<option>text1</option>
// 			<option>text2</option>
// 			<option>text3</option>
// 			<option>text4</option>
// 		</select>
// 		<p>
// 			ваш выбор: {value}
// 		</p>
// 	</div>;
// }

// из массива
// 1
// function App() {
// 	const texts = ['я', 'ты', 'мы', 'они'];
// 	const [value, setValue] = useState('');
	
// 	const options = texts.map((text, index) => {
// 		return <option key={index}>{text}</option>;
// 	});
	
// 	return <div>
// 		<select value={value} onChange={(event) => setValue(event.target.value)}>
// 			{options}
// 		</select>
// 		<p>
// 			ваш выбор: {value}
// 		</p>
// 	</div>;
// }


// 2
// function App() {
// 	const [value, setValue] = useState('');
	
// 	return <div>
// 		<select value={value} onChange={event => setValue(event.target.value)}>
// 			<option value="1">text1</option>
// 			<option value="2">text2</option>
// 			<option value="3">text3</option>
// 		</select>
// 		<p>
// 			{value === '1' && 'вы выбрали первый пункт'}
// 			{value === '2' && 'вы выбрали второй пункт'}
// 			{value === '3' && 'вы выбрали третий пункт'}
// 		</p>
// 	</div>;
// }


// 3
// function App() {
// 	const texts = ['textq', 'textw', 'textr', 'textt'];
// 	const [value, setValue] = useState('');
	
// 	const options = texts.map((text, index) => {
// 		return <option key={index} value={index}>{text}</option>;
// 	});
	
// 	return <div>
// 		<select value={value} onChange={event => setValue(event.target.value)}>
// 			{options}
// 		</select>
// 		<p>
// 			ваш выбор: {texts[value]}
// 		</p>
// 	</div>;
// }

// РАДИОКНОПОЧКИ
// function App() {
// 	const [value, setValue] = useState(1);
	
// 	function changeHandler(event) {
// 		setValue(event.target.value);
// 	}
	
// 	return <div>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="1"
// 			checked={value === '1' ? true : false}
// 			onChange={changeHandler}
// 		/>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="2"
// 			checked={value === '2' ? true : false}
// 			onChange={changeHandler}
// 		/>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="3"
// 			checked={value === '3' ? true : false}
// 			onChange={changeHandler}
// 		/>
// 	</div>
// }

// ЗАНЧЕНИЕ ПО УМОЛЧАНИЮ  В ИНПУТЕ И ЧЕКБОКСЕ!
// 1. ИНП
// function App() {
// 	const [value, setValue] = useState('text');
	
// 	return <div>
// 		<input defaultValue={value} />
// 	</div>;
// }


// 2. ЧЕКБОКС
// function App() {
// 	const [checked, setChecked] = useState(true);
	
// 	return <div>
// 		<input type="checkbox" defaultChecked={checked} />
// 	</div>;
// }


// 3. ПО УМОЛЧАНИЮ ТЕКУЩАЯ ДАТА
// function App() {
// 	const [value, setValue] = useState("");

// 	let data = new Date();
// 	let x = addZero(data.getFullYear()) + "-" + addZero(data.getMonth()+1) + "-" + addZero(data.getDate());

// 	function addZero(num) {
// 			if (num >= 0 && num <= 9) {
// 				return '0' + num;
// 			} else {
// 				return num;
// 			}
// 		}
// 	return <div>
// 		<input defaultValue={x} />
// 	</div>;
// }

// МАССИВЫ
//добавить элем по клику
// function App() {
// 	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

//     function func(){
// 	// const copy = Object.assign([],notes)
//     // copy.push(6);
//     // setNotes(copy)
//     // или:
//     setNotes([...notes, 6]);
//     }


// 	const result = notes.map((note, index) => {
// 		return <p key={index}>{note}</p>;
// 	});
	
// 	return <div>
// 		{result}
//         <button onClick={func}>click</button>
// 	</div>;
// }

// 2
// Сделайте кнопку, по нажатию на которую будет происходить удаление элемента из массива. 
// Пусть номер элемента для удаления хранится в переменной.
// function App() {
//     	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    
//         function func(){
//         let index = 0;
//     	const copy = Object.assign([],notes)
//         copy.splice(index, 1);
//         setNotes(copy);
//         }
    
    
//     	const result = notes.map((note, index) => {
//     		return <p key={index}>{note}</p>;
//     	});
        
//     	return <div>
//     		{result}
//             <button onClick={func}>click</button>
//     	</div>;
//     }


// 3
// Сделайте кнопку, по нажатию на которую будет происходить удаление элемента из массива.
//  Пусть номер элемента для удаления хранится в переменной.
    // function App() {
    // 	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    
    //     function func(){
    //     let index = 0;
    // 	const copy = Object.assign([],notes)
    //     copy[index] = "!";
    //     setNotes(copy);
    //     }
    
    // 	const result = notes.map((note, index) => {
    // 		return <p key={index}>{note}</p>;
    // 	});
        
    // 	return <div>
    // 		{result}
    //         <button onClick={func}>click</button>
    // 	</div>;
    // }
    

    // добавление абзаца из инпута по клику
    // function App() {
    //     const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    //     const [value, setValue] = useState('');
        
    //     const result = notes.map((note, index) => {
    //         return <p key={index}>{note}</p>;
    //     });
        
    //     function addItem() {
    //         setNotes([...notes, value]);
    //     }
        
    //     function changeInput(event) {
    //         setValue(event.target.value);
    //     }
        
    //     return <div>
    //         {result}
            
    //         <input value={value} onChange={changeInput} />
    //         <button onClick={addItem}>add</button>
    //     </div>;
    // }


    //удаление абзца по клику
    // function App() {
    //     const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
        
    //     const result = notes.map((note, index) => {
    //         return <p key={index} onClick={() => remItem(index)}>
    //             {note}
    //         </p>;
    //     });
        
    //     function remItem(index) {
    //         setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
    //     }
        
    //     return <div>
    //         {result}
    //     </div>;
    // }


// 1
    // const notes = ['a', 'b', 'c', 'd', 'e'];
// Выведите элементы этого массива в виде списка ul. Сделайте так, чтобы в конце каждой li стояла кнопка для ее удаления.
// function App(){
//     const[notes, setNotes] = useState([1,2,3]);

//     function removeLi(index){
//         setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
//     }

//     let result = notes.map((note, index) =>{
//     return <ul>
//     <li key={index}>{note}</li>
//     <button onClick={() =>removeLi(index)}>clear</button>
//     </ul>

// })
// return <div>
// {result}
// </div>;
// }

// summ
// function getSum(arr) {
// 	let sum = 0;
	
// 	for (const elem of arr) {
// 		sum += +elem;
// 	}
	
// 	return sum;
// }


// function App() {
// 	const [notes, setNotes] = useState([1, 2, 3]);
	
// 	return <div>
// 		<input value={notes[0]} />
// 		<input value={notes[1]} />
// 		<input value={notes[2]} />
		
// 		{getSum(notes)}
// 	</div>;
// }

//////////////////////////////////
// function App() {
// 	const [notes, setNotes] = useState([1, 2, 3]);
	
// 	function changeHandler(index, event) {
// 		setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
// 	}
	
// 	return <div>
// 		<input value={notes[0]} onChange={event => changeHandler(0, event)} />
// 		<input value={notes[1]} onChange={event => changeHandler(1, event)} />
// 		<input value={notes[2]} onChange={event => changeHandler(2, event)} />
		
// 		{getSum(notes)}
// 	</div>;
// }

// или:
//сумма значений в инпутах
// function App() {
// 	const [notes, setNotes] = useState([1, 2, 3]);
	
// 	const result = notes.map((note, index) => {
// 		return <input
// 			key={index}
// 			value={note}
// 			onChange={event => changeHandler(index, event)}
// 		/>;

        
// 	function changeHandler(index, event) {
// 		setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
// 	}
// 	});
	
// 	return <div>
// 		{result}
// 		{getSum(notes)}
// 	</div>;
// }

//2
//  const notes = ['a', 'b', 'c', 'd', 'e'];
// Выведите элементы этого массива в виде списка ul. Сделайте так,
//  чтобы в конце каждой li стояла кнопка для ее удаления.
function App(){
    const[notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);

    function removeLi(index){
        setNotes([...notes.slice(0,index), ...notes.slice(index+1)])
    }

    const result = notes.map((note,index) => {
    return <ul>
    <li key={index}> {note}
        </li>
        <button onClick={event =>removeLi(index,event)} >click</button>
        </ul>
    })

    return <div>
        {result}
    </div>
}