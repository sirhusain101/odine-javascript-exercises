const repeatString = function (string, num) {
  let i = 0;
  if (num < 0) {
    string = "ERROR";
  } else {
    while (i <= num) {
      return string.repeat(num);
    }
  }
  return string;
};

console.log(repeatString(" ", 10));

// Do not edit below this line
module.exports = repeatString;
