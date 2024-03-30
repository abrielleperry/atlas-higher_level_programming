#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const fileName = process.argv[3];
request.get(url, function (error, response, body) { // starts get request to url
if (error) {
  console.error('error:', error);
  return; // stops execution of the function if error happens
}
  fs.writeFile(fileName, body, 'utf8', function (error) { // writes body to file w utf8 encoding
    if (error) {
      console.error('error:', error);
    }
  });
});
