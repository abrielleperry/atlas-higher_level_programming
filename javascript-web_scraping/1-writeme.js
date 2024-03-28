#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2]; // in this file
const string = process.argv[3]; // put this string in this^ file
fs.writeFile(filePath, string, 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
});
