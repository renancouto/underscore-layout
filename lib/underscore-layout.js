// Required
var fs = require('fs'),
  path = require('path'),
  _ = require('underscore'),
  cache = {};

// Exports
module.exports = {
  __express: __express
};

function getFileContent (file) {
  var result = {
    content: cache[file],
    cached: true
  };

  if (!result.content) {
    result.content = loadFile(file);
    result.cached = false;
  }

  return result;
}

function loadFile (file) {
  var content = fs.readFileSync(path.normalize(file), 'utf8');

  if (content) {
    cache[file] = content;
    return content;
  }
}

// Render using 'it' as context by default. It makes easier to work with templates inside templates
function render (file, data, context) {
  file = getFileContent(file).content;
  return _.template(file, data || null, context || { variable: 'it' });
}

function __express (path, options, callback) {
  callback(null, render(path, options.data || options, options.context));
}

// Exposing methods to Underscore
_.mixin({ render: render });