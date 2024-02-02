const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('Index page', () => {
  // Ensure server is running before the tests
  before(() => {
    // Increase the timeout for starting the server
    this.timeout(5000);
    // Start the server
    server;
  });

  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', (done) => {
    // Additional test if needed
    // ...
    done();
  });

  // Ensure the server is closed after the tests
  after(() => {
    server.close();
  });
});