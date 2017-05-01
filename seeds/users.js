exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users')
        .insert({
          id: 1,
          email: 'admin@nbird.ng',
          username: 'admin',
          passHash: '$2a$10$TAn.noFot2UiGw9OwH1HQulgpeaPeSabWMWE5TymD99k0A/6Gqimq',
          created_at: new Date(Date.now()),
          updated_at: new Date(Date.now()),
        });
    });
};
