const { DB_CONFIG: dbConfig } = require('../config');

module.exports = require('knex')(dbConfig);
