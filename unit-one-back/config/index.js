const dotenv = require('dotenv');

const db = require('./db');

dotenv.config({ path: `${__dirname}/../.env` });

module.exports = {
    DB_CONFIG: db(process.env)
};
