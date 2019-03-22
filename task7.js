// -- NORMAL
function moduloFive(num, divider) {
  let result = "",
      counter = 1;
  while (counter < num) {
    if (counter % divider === 0) {
      result += `${counter}, `;
    }
    counter++;
  }
  return result;
}
console.log(moduloFive(55, 5));


// -- RECURSIVE
let result = "";
function moduloFive(num, divider, counter = 1) {
  if (counter % divider === 0) {
    result += `${counter}, `;
  }
  while (counter < num) {
    return moduloFive(num, divider, counter + 1);
  }
  return result;
}
console.log(moduloFive(55, 5));