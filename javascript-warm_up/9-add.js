#!/usr/bin/node
const a = process.argv[2];
const b = process.argv[3];

function add (a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log('NaN');
  } else {
    console.log((a) + (b));
  }
}
add(a, b);
