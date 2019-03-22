// -- NORMAL 

function randomNumsArray(start, end) {
    let array = [];
    while (start <= end) {
      array.push(Math.ceil(Math.random() * end));
      start++;
    }
    return array;
  }
  
  console.log(randomNumsArray(1, 10));

  // -- RECURSION

let array = [];

function randomNumsArray(start, end) {
  array.push(Math.ceil(Math.random() * end));
  while (start < end) {
    return randomNumsArray(start + 1, end)
  }
  return array;
}

console.log(randomNumsArray(1, 10));