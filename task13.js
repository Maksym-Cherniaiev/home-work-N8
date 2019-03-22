function getMedian(...nums) {  // rest makes it easier, no need for pseudo array
    const sortedArr = nums.sort((a, b) => a - b);
    const getMiddle = sortedArr.length / 2;
    if (getMiddle % 1 !== 0) {
      const indexOfMedian = Math.floor(getMiddle);
      const median = sortedArr[indexOfMedian];
      return median;
    } else {
      const leftHalf = sortedArr[getMiddle - 1];
      const rigthHalf = sortedArr[getMiddle];
      const median = (leftHalf + rigthHalf) / 2;
      return median;
    }
  }
  
  console.log(getMedian(1, 2, 3, 4));
  console.log(getMedian(1, 2, 3, 4, 5));

  
function getMedian() {
	let arrOfNums = [];
	Array.prototype.forEach.call(arguments, value => arrOfNums.push(value));
  const sortedArr = arrOfNums.sort((a, b) => a - b);
  const getMiddle = sortedArr.length / 2;
  if (getMiddle % 1 !== 0) {
    const indexOfMedian = Math.floor(getMiddle);
    const median = sortedArr[indexOfMedian];
    return median;
  } else {
    const leftHalf = sortedArr[getMiddle - 1];
    const rigthHalf = sortedArr[getMiddle];
    const median = (leftHalf + rigthHalf) / 2;
    return median;
  }
}

console.log(getMedian(1, 2, 3, 4));
console.log(getMedian(1, 2, 3, 4, 5));