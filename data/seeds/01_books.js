exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books')
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, user_id: 1, booktitle: 'Master Book', expectedlength: 100000 },
      ]);
    });
};
