require('babel-core/register');
var chai = require('chai');
var expect = chai.expect;
var CsvParser = require('../src/CsvParser.js');

describe('CsvParser', function() {
  it('CsvParser.parse test', () => {
    console.log(CsvParser.parse("2016/05/03,14:00-22:00,1"))
  });
});