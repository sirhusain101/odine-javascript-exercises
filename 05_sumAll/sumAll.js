const sumAll = function (a, b) {
  let sum = 0;

  if (
    a < 0 ||
    b < 0 ||
    !Number.isInteger(a) ||
    !Number.isInteger(b) ||
    typeof a === "string" ||
    typeof b === "string"
  ) {
    return "ERROR";
  } else if (a > b) {
    [a, b] = [b, a];
  }

  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;