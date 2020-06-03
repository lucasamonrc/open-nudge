exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('city').notNullable();
    table.string('state', 2).notNullable();
    table.string('url');
    table.boolean('org_flag').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};