const db = require('../../data/db-config');

module.exports = {
    add,
    find,
    findByUserId,
    findByBookId,
    update
};

async function find() {
    return await db('words').select('id', 'wordcount', 'date', 'user_id', 'book_id');
}

async function add(words) {
    return await db('words').insert(words)
}

async function update(id, words) {
    return await db('words').where({id: id}).update({wordcount: words})
}


async function findByUserId(id) {
    return await db('words').where({user_id: id})
}

async function findByBookId(id) {
    return await db('words').where({user_id: id})
}