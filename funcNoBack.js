function sayWelcome (userFirstName, userLastName) {
    console.log("Добро пожаловать, " + userLastName + " " + userFirstName);
  }
  // попробуем получить результат у функции, которая ничего не возвращает
  console.log(sayWelcome ("Иван", "Иванов"));


  //возвращает строчку-приветствие такого формата: Hi, ${name}!..
  function greeter(name) {
    return `Hi, ${name}!`;
  }
  console.log( greeter('Ваня') );
  //_______________________________

  function greeter(name) {
    return `Hi, ${name}`;
  }
  
  console.log(greeter('Марина'));
  console.log(greeter('Дима'));