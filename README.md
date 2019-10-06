# Requirements:
- Docker
- Docker-Compose
## Recommendet Requirements
- vscode (Extensions: Docker, Prettier)
- MySQL Workbench
- Postman

# Before you start
Make shure, that you inserted your firstname in "database" under `./backend/sql/db.js`. So when you firstname is Albert, it should look like this:
```js
var connection = mysql.createConnection({
    host: '141.2.246.162',
    user: 'elearning',
    port: '3306',
    password: 'elearningpw',
    database: 'albert',
    multipleStatements: true
});
```
__Caution:__ remember that we have to create a database for you, so if you want to develop on this project, send a mail to elearning@itp.uni-frankfurt.de
# Start Project
This project is docker based, that means, that you dont have to give a fuck about dependencies exept docker (see requirements) xD To start the project, simply go in to the project root folder and type:
```
docker-compose up
```
this will start MariaDB (which is our database) in a container. Additionaly the Backend and Frontend will be compiled and started. Everery thing will be connected correctly, so you don't have to worry about shit. 

The Services is reachable with:
- Frontend: `http://localhost:3000` (use Chrome or Chromium, Firefox throws some errors, and I don't know where they are coming form xD)
- Backend: `http://localhost:3001` (trust me, you want to use Postman!!!)
- MariaDB: `141.2.246.162:3306` (accessable with MySQL-Workbench or whatever the fuck you wnat to use)

