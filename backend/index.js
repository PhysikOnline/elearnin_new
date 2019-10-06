const express = require('express')
var sql = require('./sql/db.js');
const app = express()
const port = 3000

// import routing
var user = require('./src/user');

sql.query('INSERT INTO `elearning`.`User` (`s-Nummer`) VALUES("s6032689");')

sql.query('SELECT * FROM User;', function (error, results, fields) {
    if (error) throw error;
    console.log('Inside the user table is:: ', results[0]);
});

app.use('/user', user);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))