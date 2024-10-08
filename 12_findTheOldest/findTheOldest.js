const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear();

  return array
    .sort((a, b) => {
      if (a.yearOfDeath === undefined || b.yearOfDeath === undefined) {
        return currentYear - b.yearOfBirth - (currentYear - a.yearOfBirth);
      } else {
        return b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth);
      }
    })
    .filter((person, index) => index === 0)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
