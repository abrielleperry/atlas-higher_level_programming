#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
request.get(url, function (error, response) {
  if (error) {
    console.error('error:', error);
  } else {
    console.log('code:', response.statusCode);
  }
});

// 4- get request to url given in the command line
