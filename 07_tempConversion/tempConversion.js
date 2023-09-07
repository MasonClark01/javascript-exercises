const convertToCelsius = function(fahr) {
  let convCels = (fahr-32)*(5/9);
  return Number(convCels.toFixed(1))
};

const convertToFahrenheit = function(cels) {
  let convFahr = cels*(9/5)+32;
  return Number(convFahr.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
