exports.up = function (knex) {
    return knex.schema.createTable('notes', (table) => {
      table.increments('id').primary(); // Auto-incrementing primary key
      table.integer('user_id').unsigned().notNullable(); // User ID (foreign key)
      table.integer('course_id').unsigned().notNullable(); // Course ID (foreign key)
      table.text('content').notNullable(); // Note content
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Timestamp
  
      // Foreign key constraints
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.foreign('course_id').references('id').inTable('courses').onDelete('CASCADE');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('notes'); // Rollback: drop table
  };
  