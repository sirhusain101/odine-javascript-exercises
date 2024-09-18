const reverseString = function (str) {
  let strToArray = []; // empty array

  for (let i = 0; i < str.length; i++) {
    strToArray.push(str.at(i)); // converts each letter of the string into an array
  }

  strToArray.reverse(); // reverses letters in array
  return strToArray.join(""); // converts array into string
};

console.log(reverseString(" "));

// Do not edit below this line
module.exports = reverseString;
