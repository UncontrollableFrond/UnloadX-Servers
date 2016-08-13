'use strict';

const express = require('express');
const app = express();

var requestNum = 0;

app.listen(80, () => {
  console.log('listening on 80');
});

const requestHandler = (req, res) => {
  console.log(requestNum);
  requestNum++;
  res.sendStatus(200);
}

app.get('/', requestHandler);
