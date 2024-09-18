const removeFromArray = function (arr, ...items) {
  return arr.filter(function (i) {
    return !items.includes(i);
  });
};

console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
