require('dotenv').config({ path: '../.env' });

const { DB_CONFIG: dbConfig } = require('../config');
module.exports = dbConfig;
