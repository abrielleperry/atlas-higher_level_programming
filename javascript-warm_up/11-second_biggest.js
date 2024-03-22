#!/usr/bin/node
function secondBiggestNum (array) {
  if (array.length <= 1) {
    return 0;
  }
  array.sort(function (a, b) { return a - b; });
  return array[array.length - 2];
}
console.log(secondBiggestNum(process.argv.slice(2).map(Number)));
// convert arguments to ints
