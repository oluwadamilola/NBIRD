
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('birth', (table) => {
      table.increments();
      table.timestamps();
      table.string('first_name');
      table.string('other_name');
      table.string('date_of_birth');
      table.string('place_of_birth');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('birth'),
  ]);
};
