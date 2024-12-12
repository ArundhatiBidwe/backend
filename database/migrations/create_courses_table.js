exports.up = function (knex) {
    return knex.schema.createTable('courses', (table) => {
      table.increments('id').primary(); // Auto-incrementing primary key
      table.string('title').notNullable(); // Course title
      table.text('description'); // Course description
      table.string('content'); // URL or file path for course content
      table.float('price').notNullable(); // Course price
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('courses'); // Rollback: drop table
  };
  