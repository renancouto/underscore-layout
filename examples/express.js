// npm install express

var express = require('express'),
    ulayout = require('../'),
    app = express();

app.engine('html', ulayout.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index', { title: 'Title', text: 'Text' });
});

app.listen(3000);
console.log('Express server listening on port 3000');