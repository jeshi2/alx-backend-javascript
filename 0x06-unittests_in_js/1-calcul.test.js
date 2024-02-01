const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return the rounded sum of two numbers for type SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return the rounded difference of two numbers for type SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return the rounded division result of two numbers for type DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" for type DIVIDE when the rounded divisor is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should throw an error for an invalid type', () => {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1.4, 4.5), {
      message: 'Invalid type. Use SUM, SUBTRACT, or DIVIDE.'
    });
  });
});
