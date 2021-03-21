const db = require('../../data/db-config');

module.exports = {
    add,
    find,
    findByUserId,
    findByBookId,
    update
};

async function find() {
    return await db('books').select('id', 'user_id', 'booktitle', 'expectedlength', 'expectedcompletiondate');
}

async function add(books) {
    return await db('books').insert(books)
}

async function update(id, book) {
    return await db('books').where({id}).update(book)
}


async function findByUserId(id) {
    return await db('books').where({user_id: id})
}

async function findByBookId(id) {
    return await db('books').where({user_id: id})
}