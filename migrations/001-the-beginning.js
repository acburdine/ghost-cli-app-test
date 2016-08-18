exports.up = function (knex) {
    return knex.schema.createTable('clitest', function (table) {
        table.increments();
        table.string('joke_question');
        table.string('joke_answer');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('clitest');
};
