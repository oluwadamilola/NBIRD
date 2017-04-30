// Update with your config settings.
const path = require('path');

module.exports = {

  development: {
    client: 'sqlite3',
    debug: true,
    useNullAsDefault: true,
    connection: {
      filename: path.join(__dirname, 'dev.sqlite3')
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'test.sqlite3')
    },
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'prod.sqlite3')
    },
  }
};
