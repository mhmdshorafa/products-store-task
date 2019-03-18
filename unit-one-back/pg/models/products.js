const knex= require('../knex');

const create = (data) =>
  knex('products')
    .returning('*')
    .insert(data);


const get = (page) =>
  knex('products')
    .select('*')
    .limit(5)
    .offset(page*5)


const del = (id) =>
  knex('products')
    .del()
    .where({ id });


const update = (id, data) =>
  knex('products')
    .update(data)
    .where({ id });

    module.exports = {
      create,
      get,
      del,
      update
    }

