/* jshint node:true */
var ignition = require('ghost-ignition'),
    express = require('express'),
    morgan = require('morgan'),
    chuckNorris = require('chuck-norris-api'),
    app;

var app = express();

app.use(morgan('dev'));

app.get('/', function (req, res) {
    chuckNorris.getRandom().then(function (joke) {
        res.send(joke.value.joke);
    });
});

ignition.server.start(app);
