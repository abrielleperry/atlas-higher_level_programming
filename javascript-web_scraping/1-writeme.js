#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2];
const string = process.argv[3];
fs.write(filePath, 'utf8', (err, data) => {
  if (err) {
  console.log(err)
  } else {
    console.log(data)
  }
});
