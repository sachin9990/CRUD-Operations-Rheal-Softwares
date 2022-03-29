// We define schema from Mongoose
// Therefore the first step is to import mongoose

const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookDetailsSchema = new mongoose.Schema({
  Bookname: String,
  // Remember String is a shorthand for {type:String}
  // MongoDB's collection name in ref. The ref option tells Mongoose which model to use during population.
  Category: { type: Schema.Types.ObjectId, ref: "categorydetailslkp" },
  Publisher: { type: Schema.Types.ObjectId, ref: "publisherdetailslkp" },
  quantity: Number,
  BDID: Number,
  IsActive: { type: Boolean, default: true },
});


// To use our SCHEMA we need to convert our schema into a model.
// To do so, we pass it into mongoose.model(modelName, schema)
// module.exports is a Node.js syntax
module.exports = mongoose.model('bookdetails', bookDetailsSchema)
