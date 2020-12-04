var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var api = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/api', api);

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

module.exports = app;
