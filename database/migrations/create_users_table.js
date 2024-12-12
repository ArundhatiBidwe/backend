exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary(); // Auto-incrementing primary key
      table.string('name').notNullable(); // User's name
      table.string('email').unique().notNullable(); // User's email
      table.string('password').notNullable(); // Hashed password
      table.string('role').defaultTo('user'); // User role: 'user' or 'admin'
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users'); // Rollback: drop table
  };
  