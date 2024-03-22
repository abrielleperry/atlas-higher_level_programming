#!/usr/bin/node
function secondBiggest (array) {
  if (array.length <= 1) {
    return 0;
  }
  array.sort(function (a, b) { return a - b; });
  return array[array.length - 2];
}
console.log(secondBiggest(process.argv.slice(2).map(Number)));
