var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToEndOfArray(array, element) {
  return[array, ...element];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function addElementToBeginningOfArray(array, element) {
  return(array,...element)
}
function addEle
