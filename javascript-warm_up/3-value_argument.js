#!/usr/bin/node
/* checks if undefined */
if (!process.argv[2]) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
