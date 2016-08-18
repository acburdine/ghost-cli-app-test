/* jshint node:true */
var ignition = require('ghost-ignition'),
    express = require('express'),
    morgan = require('morgan'),
    knex = require('knex'),
    chuckNorris = require('chuck-norris-api'),
    chalk = require('chalk'),
    pkg = require('./package'),
    db;

db = knex({
    client: 'sqlite3',
    connection: {
        filename: ignition.config.get('db')
    }
});

return db.migrate.latest().then(function () {
    return db.seed.run();
}).then(function () {
    console.log(chalk.green('Migrations run.'));

    var app = express();

    app.use(morgan('dev'));

    app.get('/', function (req, res) {
        chuckNorris.getRandom().then(function (joke) {
            res.send(joke.value.joke);
        });
    });

    app.get('/bad/', function (req, res) {
        return db('clitest').select().then(function (jokes) {
            var index = Math.floor(Math.random() * jokes.length);
            var joke = jokes[index];

            res.send('Q: ' + joke.joke_question + '<br><br>A: ' + joke.joke_answer);
        });
    });

    app.get('/about/', function (req, res) {
        res.send(pkg.version);
    });

    ignition.server.start(app);

    console.log(chalk.green('Server started \n'));
});
