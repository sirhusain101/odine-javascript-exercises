const fibonacci = function (num) {
  num = parseInt(num);

  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else if (num < 0) {
    return "OOPS";
  }

  let a = 0;
  let b = 1;
  let member;

  for (let i = 2; i <= num; i++) {
    member = a + b;
    a = b;
    b = member;
  }
  return member;
};

// Do not edit below this line
module.exports = fibonacci;
