const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  port: '3000',
  user: 'root',
  password: 'Root12345.',
  database: 'diRead',
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;