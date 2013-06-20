var should = require('chai').should();

describe('Underscore Layout:', function() {
  var ulayout, file, data;

  before(function() {
    ulayout = require('../lib/underscore-layout.js');
    file = './examples/views/simple.html';
    data = { text: 'ok' };
  });

  // Private methods
  /*
  it('Load file content', function() {
    var result = ulayout.fileLoad(file);
    result.should.be.a('string');
  });

  it('Get file content', function() {
    var result = ulayout.fileContent(file);
    result.cached.should.equal(true);
  });

  it('Read file content', function() {
    var result = ulayout.fileContent(file);
    result.should.be.a('object');
    result.content.should.be.a('string');
  });
  */

  it('Render file', function() {
    var result = ulayout.render(file, data);
    result.should.equal(data.text);
  });
});