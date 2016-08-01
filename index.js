/* jshint node:true */
var nconf = require('nconf'),
    express = require('express'),
    morgan = require('morgan'),
    chuckNorris = require('chuck-norris-api'),
    app;

nconf.file({file: __dirname + '/config.json'});

var app = express();

app.use(morgan('dev'));

app.get('/', function (req, res) {
    chuckNorris.getRandom().then(function (joke) {
        res.write(joke.value.joke);
    });
});

app.listen(nconf.get('port') || 2368, nconf.get('host') || '127.0.0.1');
