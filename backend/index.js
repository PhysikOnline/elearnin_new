const express = require('express')
var sql = require('./sql/db.js');
const app = express()
const port = 3000

sql.query('SELECT * FROM User;', function (error, results, fields) {
    if (error) throw error;
    console.log('Inside the user table is:: ', results[0]);
});

app.get('/', (req, res) => res.send('Hello Woorld!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))