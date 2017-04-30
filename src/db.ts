import * as knex from 'knex';
import * as path from 'path';

const knexfile = require('./knexfile');

const connection = knex(knexfile[process.env.NODE_ENV || 'development']);

connection.migrate.currentVersion()
  .then((value) => {
    console.log('Current Migration Version:', value);
  });

export default connection;
