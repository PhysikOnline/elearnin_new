# Requirements:
- Docker
- Docker-Compose
## Recommendet Requirements
- vscode (Extensions: Docker, Prettier)
- MySQL Workbench
- Postman
  
# Start Project
This project is docker based, that means, that you dont have to give a fuck about dependencies exept docker (see requirements) xD To start the project, simply go in to the project root folder and type:
```
docker-compose up
```
this will start MariaDB (which is our database) in a container. Additionaly the Backend and Frontend will be compiled and started. Everery thing will be connected correctly, so you don't have to worry about shit. 

The Services is reachable with:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`
- MariaDB: `http://localhost:3002`

