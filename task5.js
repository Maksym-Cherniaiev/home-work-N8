function algebraicSum(num, pow, result = 0) {
  result += Math.pow(num, pow);
  while (num > 0) {
    return algebraicSum(num - 1, pow, result);
  }
  return result
}
console.log(algebraicSum(3, 2));