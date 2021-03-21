exports.up = function (knex) {
    return knex.schema.createTable('words', words => {
        words.increments();
        words.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
        words.integer('book_id').unsigned().references('id').inTable('books').onDelete('CASCADE').onUpdate('CASCADE');

        words.integer('wordcount').notNullable();
        words.text('date').notNullable();
        
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('words');
};