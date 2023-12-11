
const convertToCelsius = function(tempF) {
  // formula of temp from Fahrenheit to Celsius
  let tempC = (tempF - 32) * 5/9;
  // round to 1 decimal place for easier reading
  let tempCrounded = Math.round(tempC * 10) / 10;
  return tempCrounded;
};

const convertToFahrenheit = function(tempC) {
  // formula of temp from Celsius to Fahrenheit
  let tempF = tempC * 9/5 + 32;
  // round to 1 decimal place for easier reading
  let tempFrounded = Math.round(tempF * 10) / 10;
  return tempFrounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
