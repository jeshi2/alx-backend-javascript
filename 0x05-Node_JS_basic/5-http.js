const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
  } else if (parsedUrl.pathname === '/students') {
    const databasePath = parsedUrl.query.database;

    if (!databasePath) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Bad Request: Database path is missing\n');
      return;
    }

    countStudents(databasePath)
      .then(() => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the list of our students\n');
      })
      .catch(error => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Internal Server Error: ${error.message}\n`);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;