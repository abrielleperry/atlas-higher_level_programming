#!/usr/bin/node
exports.logMe = function (item) {
  let counter = 0;
  counter += item.length;
  console.log('{counter}:  + {item[item.length]}');
}
