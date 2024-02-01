const express = require('express');
const app = express();
const port = 1245;

app.get('/', (_req, res) => {
  res.send('Hello Holberton School!\n');
});

app.listen(port);

module.exports = app;
