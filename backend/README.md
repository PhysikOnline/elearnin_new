# Database Tutorial
The connetion of the database is specified inside `/sql/db.js`. The database initialisation script is located inside `/sql/init.sql`. To use the Database in you .js files, you simplly do: 
```js
var sql = require('./sql/db.js');
```
queries can the be executed with:
```js
sql.query("you querry", function (error, results, fields) {
    if (error) throw error;
})
```
Documentation for MariaDB(SQL) and the MySQL Connector can be found here:
- https://mariadb.com/kb/en/library/documentation/
- https://github.com/mysqljs/mysql

# Todo
- Figure out "close connection"
- Find out, why there are SQL disconnecs after a few minutes