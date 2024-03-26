#!/usr/bin/node
exports.converter = function (base) {
  return function (number) {
    return number.toString(base);
  };
};
// returns func that takes number as arg
// then converts number from base 10 to base specified
// by calling tostring method on number and passing base as argument
// tostring converts number to string in base specified
