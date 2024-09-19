const convertToCelsius = function (f) {
  c = ((f - 32) * 5) / 9;
  c = Math.round(c * 10) / 10;
  return c;
};

const convertToFahrenheit = function (c) {
  f = (c * 9) / 5 + 32;
  f = Math.round(f * 10) / 10;
  return f;
};

console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
