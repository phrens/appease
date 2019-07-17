const expect = require('chai').expect
const server = require('../server');

describe('test', () => {
  it('should return a string', () => {
    expect('Appease start dev').to.equal('Appease start dev');
  });
});
