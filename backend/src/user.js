var express = require('express');
var router = express.Router();
var sql = require('../sql/db')

// middleware that is specific to this router
router.use(function (req, res, next) {
    next();
});

router.get('/login', function (req, res) {
    sql.query("SELECT * FROM `User` WHERE `s-Nummer` = ? AND password = PASSWORD(?)", [req.query.username, req.query.password], function (error, results, fields) {
        if (error) throw error;
        if (results.length === 1) {
            res.send('Login found!');
        } else {
            res.send('Login not found!');
        }
    })
});
module.exports = router;