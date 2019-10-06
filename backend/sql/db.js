'user strict';

var mysql = require('mysql');
var fs = require('fs');

var connection = mysql.createConnection({
    host: 'database',
    user: 'elearning',
    password: 'elearningpw',
    database: 'elearning',
    multipleStatements: true
});

connection.connect();

// Execute the database initialisation
var file = fs.readFileSync('sql/init.sql').toString();
connection.query(file, function (error, results, fields) {
    if (error) throw error;
});

module.exports = connection;