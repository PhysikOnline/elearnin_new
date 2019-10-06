'user strict';
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'database',
    user: 'elearning',
    password: 'elearningpw'
});

connection.connect();

connection.query('USE elearning;');

module.exports = connection;