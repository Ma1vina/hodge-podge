let str = '';
for (let i = 0; i < 5; i++) {
	str += 'x';
	document.write(str + '<br>');
} // выведет
///x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
	document.write('<br>'); //выводит '111', потом '222', потом '333 и тд
}

for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= i; j++) {
		document.write(i);
	}
	
	document.write('<br>');//
}//выведет
//1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (let i = 1; i <= 9; i+=2) {
	let str = ''; // каждый раз зачищаем строку
	
	for (let j = 1; j <= i; j++) {
		str += i;
	}
	document.write(str + '<br>');
}
//выведет 
//1
// 333
// 55555
// 7777777
// 999999999