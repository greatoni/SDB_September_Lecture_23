Database:
- Types: 
  - Relational 
    - SQL, PostgreSql, MySQL
  - Non-Relational
    - MongoDB, Apache Cassandra, Couchbase
- Collection of tables or documents
- Tables:
  - Primary Keys (ID)
  - Records: Data within rows of table
- Mongo
  - Database = Database
  - Collections = Tables
  - Documents = Records
    - stored as JSON
  - Is a **Document Data Store**

# MERN
 - Mongo
    - Database
 - Express
    - Server
 - React
    - Frontend/Client
 - Node
    - Everything Else

# Express
- Need a `package.json` file
  - run `npm init` or `npm init -y`
- Install Dependencies:
  - Express: `npm i express`
  - Mongoose: `npm i mongoose`
    - package that connects to MongoDB
  - dotenv: `npm i dotenv`
  - **NOTE**:
    - We can install multiple dependencies at once
    - ex: `npm i express mongoose dotenv`
- Entry point within `package.json`
  - `index.js` or `app.js`
- `.gitignore`
  - ignore files/folders that shouldn't be in a repo.

# .env
- Contains constants that are specific for our environment
- Stores items that we don't want published
  - passwords, port numbers / deployment routes, keys
- Should be added to `.gitignore`
- Should have a sample version to communicate with team.
  - `example.env`

  ## Bcrypt
`npm i bcrypt`
- dependency that handles encryption of data
  - mostly commonly for passwords (but not limited)

## Encryption
- Plain text passwords are not secure when stored within the database.
  - Allows another lever of security for both user and application
    - If the database never knows it, less desired to "hack".

## JWT
- JSON Web Token
- `npm i jsonwebtoken`
- A way for our server to authenticate the user.

example code:
```js
const token = jwt.sign({id: user._id}, "secret message", {expiresIn: 60 * 60 * 24});
```
- `sign(payload, message, options)` 
  - 3 arguments:
    - payload
      - In the sample we are using an object that details the id of the user.
    - encrypt/decrypt message
      - passed in as a string in the sample
      - Typically stored as a `.env` variable.
    - Options sets (expiration)
      -  represents seconds or a string time span
         -  ex: `"2 days"` or `"10h"`