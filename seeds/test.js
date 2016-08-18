// Jokes taken from here: http://www.rinkworks.com/jokes/random.cgi

exports.seed = function(knex, Promise) {
    return knex('clitest').del().then(function () {
        return Promise.all([
            knex('clitest').insert({
                joke_question: 'Why did the chicken cross the road?',
                joke_answer: 'To get to the other side.'
            }),
            knex('clitest').insert({
                joke_question: 'What\'s the difference between bird flu and swine flu?',
                joke_answer: 'If you have bird flu, you need tweetment, if you have swine flu, you need oink-ment.'
            }),
            knex('clitest').insert({
                joke_question: 'Did you hear about the fish that went deaf?',
                joke_answer: 'He had to buy a herring-aid.'
            }),
            knex('clitest').insert({
                joke_question: 'What did the tie say to the neck?',
                joke_answer: 'I think I\'ll just hang around.'
            })
        ]);
    });
};
