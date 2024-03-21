#!/usr/bin/node
const str = 'C is fun';
const num = process.argv[2];
for (str.repeat(num)) {
  console.log(str)
}
