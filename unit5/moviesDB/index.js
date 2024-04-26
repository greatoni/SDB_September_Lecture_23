require('dotenv').config();

const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const MONGO = process.env.MONGODB
const PORT = process.env.PORT; // Points to our env and puts the value of that PORT variable into this variable.
const userController = require(`./controllers/user.controller`)
const movieController = require(`./controllers/movie.controller`)
const validateSession = require(`./middleware/validate-session`)
const cors = require('cors')


mongoose.connect(`${MONGO}/movies`)

// Connection middleware, establishes a route and defines the collection being targeted.

const db = mongoose.connection; // event listener to check if connected.

db.once('open', () => console.log(`Connected: ${MONGO}/movies`))
app.use(express.json());

app.use(cors());

app.use('/user', userController);
app.use(validateSession);
app.use('/movies', movieController);

app.listen(PORT, () => console.log(`Movies: ${PORT}`));