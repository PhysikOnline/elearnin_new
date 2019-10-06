'user strict';

var mysql = require('mysql');
var fs = require('fs');

var connection = mysql.createConnection({
    host: '141.2.246.162',
    user: 'elearning',
    port: '3306',
    password: 'elearningpw',
    database: 'keiwan',
    multipleStatements: true
});

connection.connect();

// Execute the database initialisation
connection.query(fs.readFileSync('sql/init.sql').toString(), function (error, results, fields) {
    if (error) throw error;
    connection.query(fs.readFileSync('sql/testdata.sql').toString(), function (error, results, fields) {
        if (error) throw error;
    });
});


module.exports = connection;