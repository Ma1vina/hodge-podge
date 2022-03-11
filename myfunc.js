const user = { firstname: 'Петр', lastname: 'Петров'}

  function showUser(user) {
  user.firstname = 'Александр';
  }
  // вызываем функцию
  showUser(user);
  // выводим значение свойства firstname в консоль
  console.log(user.firstname); // Александр




  //продолж. ДАЛЕЕ УСЛОЖНИМ этот же пример_____________________
  const user1 = { firstname: "МАРИНА", lastname: "ЧЕКМЕНЕВА"}

  function showUser(user1) {
  user1.firstname + user1.lastname;
  }
  // вызываем функцию
  showUser(user1);
  
  console.log(user1.firstname, user1.lastname); 