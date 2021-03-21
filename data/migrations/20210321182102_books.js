exports.up = function (knex) {
    return knex.schema.createTable('books', books => {
        books.increments();
        books.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
        books.text('booktitle').notNullable();
        books.integer('expectedlength');
        books.date('expectedcompletiondate');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('books');
};