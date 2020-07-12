var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToEndOfArray(array, element) {
  return[element,...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function accessElementInArray() {
  var bio = "The best candy";
  console.log(chocolateBars[4] + bio)
}
