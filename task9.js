function capitalize(name) {
  const capitalLetter = name.charAt(0).toUpperCase();
  let allToLowerCase = name.slice(1, name.length).toLowerCase();
  return capitalLetter + allToLowerCase;
}
console.log(capitalize("vlaDySlAv"));
