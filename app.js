const express = require("express");
const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const resultantDate = addDays(new Date(), 100);
  response.send(
    `${resultantDate.getDate()}/${
      resultantDate.getMonth() + 1
    }/${resultantDate.getFullYear()}`
  );
});

module.exports = app;
