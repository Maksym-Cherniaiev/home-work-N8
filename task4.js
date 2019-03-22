function comparer(firstNum, secondNum) {
  if (firstNum > secondNum) {
    return ("is bigger");
  } else if (firstNum < secondNum) {
    return ("is smaller");
  } else if (firstNum === secondNum) {
    return ("they are even");
  } else {
    return ("enter only numbers");
  }
}

console.log(comparer(22, 34));
