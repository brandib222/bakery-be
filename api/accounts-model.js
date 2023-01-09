const db = require('../../data/db-config');

module.exports = {
  find,
  //findById,
  insert,
  //update,
  remove,
};

function find() {
  return db('accounts');
}

function findByEmail(email) {
  return db('accounts').where({ email: 'email' }).first()
}

function insert(account) {
  return db('accounts')
    .insert(account)
    .then(emails => ({ email: 'email' }));
}

// function update(email, ) {
//   return db('posts')
//     .where('id', Number(id))
//     .update(post);
// }

function remove(email) {
  return db('accounts')
    .where('email', email)
    .del();
}

