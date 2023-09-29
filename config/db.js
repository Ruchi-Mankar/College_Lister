const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',
  user: 'ruchi',   // Change this to your actual user name
  password: '',   // Change this to your actual password
  database: 'IT_colleges', // Change this to your actual database name
};

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise();
