function howManyTimes(string) {
  let resultObject = {};
  const arrOfLetters = string.split("");
  arrOfLetters.forEach((letter) => {
    if (!resultObject[letter]) {
      resultObject[letter] = 1;
    } else {
      resultObject[letter] += 1;
    }
  });
  return resultObject;
}

console.log(howManyTimes("Hello there"));