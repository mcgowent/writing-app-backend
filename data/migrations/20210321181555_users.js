exports.up = function (knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
        users.text('username', 128).notNullable().unique();
        users.text('pword', 128).notNullable();
        users.text('fname', 128).notNullable();
        users.text('lname', 128).notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};