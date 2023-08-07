const add = function(a, b) {
	return (a + b)
};

const subtract = function(a, b) {
	return(a - b)
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0)
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(input) {
	
  if (input === 0) {
    return 1;
  } else {
  
  let array = [input];
  for (let i = input; i > 1; i--) {
    let addition = (i - 1);
    
    array.push(addition);
  };

  return array.reduce((product, current) => product * current, 1)  
}};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
