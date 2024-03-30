#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
request.get(url, function (error, response, body) {
}
