#!/usr/bin/node
const request = require('request');
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
request.get(apiUrl, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
});
