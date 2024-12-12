const knex = require('knex');
const knexConfig = require('./knexfile'); // Correctly import knexfile.js

const db = knex(knexConfig.development); // Use the 'development' environment

module.exports = db; // Export the database instance
