var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToEndOfArray(array, element) {
  return[element,...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function addElementToBeginningOfArray(array, element) {
  return(array,...element)
}
