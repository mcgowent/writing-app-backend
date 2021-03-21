exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('words')
    .then(function () {
      // Inserts seed entries
      return knex('words').insert([
        {id: 1, user_id: 1, book_id: 1, wordcount: 5243, date: "01012000", },
      ]);
    });
};
