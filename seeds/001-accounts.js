exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('accounts').truncate()
    .then(function () {
      // add data into insert
      return knex('accounts').insert([
        { name: 'Brandi', email: 'brandi.danielle.ball@gmail.com', password:'love' },
        { name: 'Ell', email: 'dehilton13@gmail.com', password: 'royal' },
      ]);
    });
};