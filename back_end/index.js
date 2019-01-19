// index.js
//  - server entry point
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// creating the app
const app = express();

app.use(cors());
app.use(bodyParser.json());

// importing custom libraries
require('./models/url.model');
require('./routes/url.routes')(app);

// global variables
const PORT = process.env.PORT;
const mongoURI = process.env.DB_URI;
const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
};

mongoose.Promise = global.Promise;

// connecting to MongoDB via Mongoose
mongoose.connect(
  mongoURI,
  connectOptions,
  (err, db) => {
    if (err) console.log(`Error`, er);

    console.log(`Connected to MongoDB`);
  }
);

// starting the app on the given port
app.listen(PORT, () => {
  console.log(`Server started on port `, PORT);
});
