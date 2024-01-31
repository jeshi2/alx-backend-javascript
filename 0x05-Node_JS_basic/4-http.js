const http = require('http');

const app = http.createServer((_req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
});

app.listen(1245);

module.exports = app;
