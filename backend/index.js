const express = require('express')
const app = express()
const port = 3000

// import routing
var user = require('./src/user');

app.use('/user', user);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
