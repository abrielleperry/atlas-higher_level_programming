#!/usr/bin/node
function add(a, b) {
  return a + b;
}
// makes func add available to other files using require func
module.exports = { add };
