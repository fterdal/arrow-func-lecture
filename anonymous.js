/* eslint no-multiple-empty-lines:0 */

/*
  We've already used anonymous functions before. But arrow
  functions make our lives a lot easier...

  Let's consider the map array method:
*/

let arr = [1,2,3,4];














// Old way. Using a named function
function doubleOld(num) {
  return num * 2;
}
console.log('doubleOld:', arr.map(doubleOld));














// Use an anonymous (unnamed) function. But the old function syntax
// Old way. Using a named function
console.log('doubleNewer:', arr.map(function(num) {
  return num * 2;
}));














// Use an anonymous function. This time, use an arrow function.
console.log('doubleNewest:', arr.map(num => num * 2));














console.log('~~~~~~~~~\n\n~~~~~~~~~');
