"use strict";
exports.__esModule = true;
var knex = require("knex");
var knexfile = require('./knexfile');
var connection = knex(knexfile[process.env.NODE_ENV || 'development']);
connection.migrate.currentVersion()
    .then(function (value) {
    console.log('Current Migration Version:', value);
});
exports["default"] = connection;
//# sourceMappingURL=db.js.map