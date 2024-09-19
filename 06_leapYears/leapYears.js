const leapYears = function (year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false; // Not divisible by 4, it's not a leap year
  }
};

console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
