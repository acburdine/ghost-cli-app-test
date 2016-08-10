/* jshint node:true */
var ignition = require('ghost-ignition'),
    express = require('express'),
    morgan = require('morgan'),
    chuckNorris = require('chuck-norris-api'),
    chalk = require('chalk'),
    pkg = require('./package'),
    app;

var app = express();

app.use(morgan('dev'));

app.get('/', function (req, res) {
    chuckNorris.getRandom().then(function (joke) {
        res.send(joke.value.joke);
    });
});

app.get('/about/', function (req, res) {
    res.send(pkg.version);
});

ignition.server.start(app);

console.log(chalk.green('Server started \n'));

function shutdown() {
    ignition.server.stop(function () {
        console.log(chalk.green('\nServer stopped \n'));
    });
}

process.removeAllListeners('SIGINT').on('SIGINT', shutdown)
    .removeAllListeners('SIGTERM').on('SIGTERM', shutdown);
