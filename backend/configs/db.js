const mysql = require('mysql2');

const db = mysql.createConnection({
   host: 'database-1.c9meigac6f36.ap-south-1.rds.amazonaws.com',
   port: '3306',
   user: 'root',
   password: 'simon1234',
   database: 'react_node_app'
});

module.exports = db;
