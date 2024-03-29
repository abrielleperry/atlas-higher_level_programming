#!/usr/bin/node
const movie_ID = process.argv[2];
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + movie_ID;
request.get(url, function (error, response, body) { // body: the data from the request(api)
  if (error) {
    console.error('error:', error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
