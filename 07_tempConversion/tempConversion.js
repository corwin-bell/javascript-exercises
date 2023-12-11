// formula of temp from Fahrenheit to Celsius
// tempC = (tempF - 32) * 5/9
// round to 1 decimal place
const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * 5/9;
  let tempCrounded = Math.round(tempC * 10) / 10;
  return tempCrounded;
};

// formula of temp from Celsius to Fahrenheit
// tempF = 9/5 * tempC + 32 
const convertToFahrenheit = function(tempC) {
  let tempF = tempC * 9/5 + 32;
  let tempFrounded = Math.round(tempF * 10) / 10;
  return tempFrounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
