const db = require('../../data/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('users').select('id', 'username', 'pword');
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    return await db('users').insert(user)
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}