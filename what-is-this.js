/*
  Arrow Function Gotcha!
  Arrow functions behave just the same as normal function syntax...
  EXCEPT that it handles the `this` context differently.

  Lesson: don't use arrow functions when defining prototype methods
*/
function Calculator() {
  this.value = 1;
  this.multiplyNum = num => this.value *= num;
}

Calculator.prototype.addNum = function(num) {
  console.log('addNum:', this);
  this.value += num;
}

Calculator.prototype.subtractNum = num => {
  console.log('subtractNum:', this);
  this.value -= num;
}

















// Make a new calculator
let calc = new Calculator();

Calculator.prototype.subtractNum.bind(calc);

console.log('calc.value:', calc.value);

// Add 5 (using standard function syntax)
calc.addNum(5);
console.log('calc.value:', calc.value);

// Subtract 4 (using arrow function syntax)
calc.subtractNum(4);
console.log('calc.value:', calc.value);

// Subtract 4 (using arrow function syntax)
calc.multiplyNum(4);
console.log('calc.value:', calc.value);

console.log('Calculator.prototype:', Calculator.prototype);

console.log('~~~~~~~~~\n\n~~~~~~~~~');
