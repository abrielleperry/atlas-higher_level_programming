#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2];
fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

//readFile(path, options, callback)
// path- if both file and program are insame folder then simply give name of text file
// options- optional param that specifies the data is to be read from file
// callback- further 2 args error and data. if it fails to get data, the error shows whats at fault
// and data arg will contain data from the file
