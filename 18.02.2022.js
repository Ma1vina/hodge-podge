function calculateСalories(gender, height) {
    let result = gender === 'man' ? (height - 100) * 20 : (height - 105) * 19;
    if (typeof arguments[2] === 'number') {
      result *= arguments[2];
    }
    return result.toFixed(0);
  }
  
  console.log(`Оптимальное кол-во ккал: ${calculateСalories('man', 185)}`);