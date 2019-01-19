// /models/url.model.js
//  - URL model definition for the database
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
const mongoose = require('mongoose');

const { Schema } = mongoose;

// creating the schema
const urlSchema = new Schema({
  urlCode: String,
  shortUrl: String,
  originalUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// applying the schema to the model
mongoose.model('Url', urlSchema);