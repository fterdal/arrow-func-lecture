/* eslint no-multiple-empty-lines:0 */



// We're all familiar with this:
function addThreeNums1(first, second, third) {
  return first + second + third;
}
console.log('addThreeNums1:', addThreeNums1(1, 2, 3));





















// Here's the very same with an arrow function
let addThreeNums2 = (first, second, third) => {
  return first + second + third;
}
// console.log('addThreeNums2:', addThreeNums2(1, 2, 3));





















// We can omit the curly braces if we're just returning an expression
let addThreeNums3 = (first, second, third) => first + second + third;
// console.log('addThreeNums3:', addThreeNums3(1, 2, 3));





















// If there's only one parameter, we can omit the parentheses
// SUPER SHORT!
let addFiveToNum = num => num + 5;
// console.log('addFiveToNum:', addFiveToNum(3));





















// We can use empty parentheses for functions with no arguments
let gimmeAnArray = () => [1,2,3]
// console.log('gimmeAnArray:', gimmeAnArray());





















// We can also return object literals. What might be a problem with this?
let gimmeAnObject = () => ({name: 'Batman', money: 10445218765})
// console.log('gimmeAnObject:', gimmeAnObject());









console.log('~~~~~~~~~\n\n~~~~~~~~~');
