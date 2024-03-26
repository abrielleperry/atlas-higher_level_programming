#!/usr/bin/node
exports.esrever = function (list) {
  return list.reduce((newList, item) => [item].concat(newList), []);
};

// reduce func processes the array from left to right
// newList is the accumulator and item is the current value
// concat function is used to add current item to newList array
// the initial value of newList is an empty array
