// Importing the Mongoose ODM (Mongoose is an Object Data Modelling library for MongoDB and Node.js)
const mongoose = require("mongoose");
// Importing express
const express = require("express");
// Calling the express
const cors = require('cors')
const app = express();
// incoming JSON data is put in the req.body
app.use(express.json());

app.use(cors())

// Defining a backend port
const port = 8080;
// Listening to the port
app.listen(port, () => {console.log(`The backEnd at Port: ${port} is now working`)});

// When you use 'once' it signifies that the event will be called just once i.e., the first time the event occured.
const db = mongoose.connection;
db.once('open', () => console.log('Mongoose is connected'));


// Connecting the mongoDB to a Port and creating a DataBase named "library management"
mongoose.connect("mongodb://localhost:/libraryManagement");


// Creating Routes
// Find what are Routes?
// sending app as a parameter to the mentioned path.
require('./routes/index')(app)