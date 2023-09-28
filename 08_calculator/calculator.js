const add = function(a, b) {
	return(a + b)
};

const subtract = function(a, b) {
	return(a - b)
};

const sum = function(array) {
	return(array.reduce((tot, plus) => tot + plus, 0))
};

const multiply = function(array) {
  return(array.reduce((tot, mult) => tot * mult))
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
	if (num === 0){
    return 1
  }
  else{
    let out = 1
    for(let i = num; i > 0; i--){
      out *= i
    }
    return out
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
