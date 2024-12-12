const knex = require('knex');
const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

(async () => {
  try {
    const users = await db('users').select('*');
    console.log('Users:', users);
  } catch (error) {
    console.error('Database error:', error);
  } finally {
    db.destroy(); // Close the connection
  }
})();
