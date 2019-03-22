function getModa(...numbers) {
    let result = {};
    numbers.forEach((number) => {
      if (!result[number]) {
        result[number] = 1;
      } else {
        result[number] += 1;
      }
    });
    let max = -Infinity;
    let moda = "";
    for (let key in result) {
      if (result[key] > max) {
        max = result[key];
        moda = key;
      }
    }
    return moda;
  }
  
  console.log(getModa(1, 3, 4, 4, 4, 4, 3, 3, 6, 5, 5, 4, 4, 2, 2, 1));