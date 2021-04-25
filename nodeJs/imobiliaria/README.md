# imobiliaria-backend

## Steps to run

- Create a new file named ".env" in this folder and set environment, like .env.example.

DB_USER=postgres
DB_HOST=localhost
DB_NAME=postgres
DB_PASSWORD=1
DB_PORT=5432

- run postgres database

- run  "npm ci && npm run clean-database && npm run dev" (**this step will delete all your tables in the configured database**)

- the requests examples are in "./requests", first get the user token in "/api/users/authenticate" and set authorization header to make another requests
