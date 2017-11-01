/*
  Arrow Function Gotcha!
  Arrow functions behave just the same as normal function syntax...
  EXCEPT that it handles the `this` context differently.

  Lesson: don't use arrow functions when defining prototype methods
*/
function Calculator() {
  this.value = 0;
}

Calculator.prototype.addNum = function(num) {
  console.log('addNum this', this);
  this.value += num;
}

let stuff = 'im just some stuff';
weirdHuh = 'what the heck am i?';
Calculator.prototype.subtractNum = (num) => {
  let thing = 'im a thing';
  console.log('subtractNum this', this);
  this.value -= num;
}


// Make a new calculator
let calc = new Calculator();
console.log('calc.value:', calc.value);

// Add 5 (using standard function syntax)
calc.addNum(5);
console.log('calc.value:', calc.value);

// Subtract 4 (using arrow function syntax)
calc.subtractNum(4);
console.log('calc.value:', calc.value);

console.log('~~~~~~~~~\n\n~~~~~~~~~');
