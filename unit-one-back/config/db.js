const path = require('path');

module.exports = (env) => {
  const { DB_CLIENT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, NODE_ENV } = env;
  switch (NODE_ENV) {
  case 'development':
    return {
      client: DB_CLIENT,
      connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME
      },
      pool: { min: 2, max: 10 },
      migrations: {
        tableName: 'knex_migrations',
        directory: path.join(__dirname, '/../pg/migrations')
      },
      seeds: {
        directory: path.join(__dirname, '/../pg/seeds')
      }
    };
  default:
    throw new Error('NODE_ENV is not specified!!!');
  }
};
