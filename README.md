# Instructions to run this Project:

- We are working with Postgres Database , all the required data needed for connection with database is in the `.env` file
```
  POSTGRES_HOST = localhost
  POSTGRES_DB = fantasy_worlds
  POSTGRES_DB_TEST = fantasy_worlds_test
  POSTGRES_USER = milad
  POSTGRES_PASSWORD = 123456
  ENV = dev
  BCRYPT_PASSWORD = your-secret-password
  SALT_ROUNDS = 10
  TOKEN_SECRET = token-secret
  POSTGRES_PORT = 5432
```
## to setup and connect to the database :

```
CREATE USER milad WITH PASSWORD '123456';
CREATE DATABASE fantasy_worlds;
CREATE DATABASE fantasy_worlds_test;
GRANT ALL PRIVILEGES ON DATABASE fantasy_worlds TO milad;
GRANT ALL PRIVILEGES ON DATABASE fantasy_worlds_test TO milad;
```

### you now have created the needed setup to connect to the database

- to run the up migrations here write in the command : npm run db-migrate:up
- to run the down migrations here write in the command : npm run db-migrate:down

## Port Numbers:

- the Backend Port is 3000 , database Port is 5432

## to install all the Packages used :

npm install

## to start the server and running the project :

- production: `npm run start`
- development: `npm run watch`

## to run all the tests we made :
you need to `database.json`
```json
{
  "dev": {
    "driver": "pg",
    "host": "127.0.0.1",
    "database": "fantasy_worlds",
    "user": "milad",
    "password": "123456"
  },
  "test": {
    "driver": "pg",
    "host": "127.0.0.1",
    "database": "fantasy_worlds_test",
    "user": "milad",
    "password": "123456"
  }
}
```
`npm run test`

this script will build all tables for you on the testing database we created above and run all the tests then drop all the tables at the end

