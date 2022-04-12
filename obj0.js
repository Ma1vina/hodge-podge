//Задача 1
//Дан следующий объект с работниками и их зарплатами.Увеличьте зарплату каждого работника на 10%.
let obj = {
	employee1: 10000,
	employee2: 20000,
	employee3: 30000,
	employee4: 40000,
	employee5: 50000,
	employee6: 60000,
	employee7: 70000,
};
for(let key in obj){

    let y = obj[key];
    y = 10 * (y/100) 
    obj[key] = obj[key] +y;
}
console.log(obj);