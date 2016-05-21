require('babel-core/register');
var chai = require('chai');
var expect = chai.expect;
var MessageParser = require('../src/MessageParser.js');

describe('MessageParser', function() {
  it('MessageParser.parse test', () => {
    console.log(MessageParser.parse("2016/05/03,14:00-22:00,1\n2016/05/04,10:00-22:00,-1.0"))
  });
});