# Requirements
- [Node.js](https://nodejs.org/en) (v18.17.1 LTS)
- [Visual Studio Code](https://code.visualstudio.com/download) (1.82.0 system setup)
- [Postman](https://www.postman.com/downloads/) (10.18.4)
- [PostgreSQL](https://www.postgresql.org/download/) (16)

# Installation
1. `npm i` to install all dependencies
2. `npx sequelize-cli db:create` to create the database
3. `npx sequelize-cli db:migrate` to create table
4. `npx sequelize-cli db:seed:all` to seed dummy data
5. `npm run start` to start the server

# Default ROOT Account
Email: root@gmail.com
Password: root

# Documentation
**Open API**
1. Start NodeJS server with `npm run start`
2. Go to this link [Open API with Swagger](http://localhost/api-docs/)
\**You can access Open API file with YAML format from [here](./DOCS/openapi.yml)