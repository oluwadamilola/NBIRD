
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('births', (table) => {
      table.increments();
      table.timestamps();
      table.string('firstName');
      table.string('otherName');
      table.timestamp('dob');
      table.string('placeOfBirth');
      table.string('gender');
      table.string('address');
      table.string('localGovt');
      table.string('fatherName');
      table.string('fatherEmail');
      table.string('fatherState');
      table.string('fatherNationality');
      table.string('motherName');
      table.string('motherEmail');
      table.string('motherState');
      table.string('motherNationality');
    }),
    knex.schema.createTableIfNotExists('births', (table) => {
      table.increments();
      table.timestamps();
      table.string('firstName');
      table.string('otherName');
      table.string('address');
      table.timestamp('dob');
      table.string('gender');
      table.string('maritalStatus');
      table.string('placeOfDeath');
      table.string('hospitalNumber');
      table.string('localGovt');
      table.string('stateOfOrigin');
      table.string('causeOfDeath');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('births'),
    knex.schema.dropTable('deaths')
  ]);
};
