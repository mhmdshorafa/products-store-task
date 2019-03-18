exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments('id');
    table.string('name');
    table.string('company');
    table.string('country');;
    table.text('description');
  });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('products');
};
