function biggestElemnt(num) {
  let biggestNum = -Infinity;
  const arrOfNum = num.toString().split("");
  arrOfNum.forEach((num) => {
    if (num > biggestNum) {
      biggestNum = num;
    }
  });
  return biggestNum;
}
console.log(biggestElemnt(235463));
