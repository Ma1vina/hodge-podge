let person = {
    name: "Marina",
    growth: 157,
    year: 1997,
};
person.name = "Dima";// изменить имя

person.color - true;
person.color = "green"; // добавить поле объекта

console.log(person);
console.log(person.name);


let girl = {
    gender: "female",
    interest: "narure",
    ...person // соединить объекты
};
console.log(girl);


///////////////
let wOw = girl;
girl.name = "Bob";
console.log(wOw);




