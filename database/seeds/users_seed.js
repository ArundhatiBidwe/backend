const bcrypt = require('bcryptjs');

exports.seed = async function (knex) {
  // Clear existing entries
  await knex('users').del();

  // Insert seed data
  await knex('users').insert([
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: await bcrypt.hash('admin123', 10), // Password hashed for security
      role: 'admin',
    },
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: await bcrypt.hash('password123', 10),
      role: 'user',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      password: await bcrypt.hash('mypassword', 10),
      role: 'user',
    },
  ]);
};