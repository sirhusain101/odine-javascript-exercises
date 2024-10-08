const palindromes = function (str) {
  alphaNumericStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  reverseStr = alphaNumericStr.split("").reverse().join("");

  return reverseStr === alphaNumericStr ? true : false;
};
// Do not edit below this line
module.exports = palindromes;
