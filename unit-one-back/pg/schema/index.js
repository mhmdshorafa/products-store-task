
const knex = require('../knex');

module.exports = {
  initDb: async () => {
    await knex.migrate.latest();
  }
};
