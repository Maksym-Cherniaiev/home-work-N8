// -- NORMAL 
function powerCalc(num, pow) {
  let result = num;
  while (pow > 1) {
    result = result * num;
    pow--;
  }
  return result;
}

console.log(powerCalc(3, 4));

// -- RECURSION

function powerCalc(num, pow, res = num) {
  res = res * num;
  while (pow !== 2) {
    return powerCalc(num, pow - 1, res)
  }
  return res;
}

console.log(powerCalc(3, 3));
