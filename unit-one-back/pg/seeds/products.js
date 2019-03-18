exports.seed = (knex) =>
  knex('products')
    .del()
    .then(() => knex('products').insert([
      {
      name: 'chair',
      company: 'saqqa',
      description: 'chair to set on',
      country: 'palestine'
    },
      {
      name: 'table',
      company: 'saqqa',
      description: 'table to put staff on it',
      country: 'egypt'
    },
      {
      name: 'chocklate',
      company: 'torku',
      description: 'delecious',
      country: 'turkey'
    }
  ]));
