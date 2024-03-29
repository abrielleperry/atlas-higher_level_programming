#!/usr/bin/node
const movie_ID = process.argv[2];
const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + movie_ID;
