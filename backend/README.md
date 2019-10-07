# Database Tutorial

The connetion of the database is specified inside `/sql/db.js`. The database initialisation script is located inside `/sql/init.sql`. To use the Database in you .js files, you simplly do:

```js
var sql = require("./sql/db.js");
```

queries can the be executed with:

```js
sql.query("you querry", function(error, results, fields) {
  if (error) throw error;
});
```

Documentation for MariaDB(SQL) and the MySQL Connector can be found here:

- https://mariadb.com/kb/en/library/documentation/
- https://github.com/mysqljs/mysql

# API Documentation:
## /user
### POST /user/login

| Attribute | Type   | Required | Describtion                           |
| --------- | ------ | -------- | ------------------------------------- |
| username  | string | yes      | Username you want to log in with      |
| password  | string | yes      | Password assiciated with the Username |

| Response                      | Describtion                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------------- |
| ERROR: User already logged in | there is a user already logged in please log out before, or delete the session coockie              |
| ERROR: Incorrect credentials  | the username or the passowrd provided, do not match the username or password stored in the database |
| Login sucsessfull             | sucsesfully logged in, the username will be assiciated with the current session cockie              |

# Todo

- Figure out "close connection"
- Find out, why there are SQL disconnecs after a few minutes
