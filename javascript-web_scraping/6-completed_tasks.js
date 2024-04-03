#!/usr/bin/node
const request = require("request");
const apiUrl = "https://jsonplaceholder.typicode.com/todos";
request.get(apiUrl, function (error, response, body) {
  if (error) {
    console.error("error:", error);
    return;
  }

  const tasks = JSON.parse(body);
  const completedTasks = {};

  for (const task of tasks) {
    if (task.completed) {
      completedTasks[task.userId]++;
    } else {

      }
    }
  }
});
