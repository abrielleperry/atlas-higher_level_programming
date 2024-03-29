#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
request.get(apiUrl, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  } else {
    let counter = 0;
    const films = JSON.parse(body).results; // turn json string into javascript objects (array)
    for (const film of films) {
      if (film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
        counter++;
      }
    }
    console.log(counter);
  }
});
