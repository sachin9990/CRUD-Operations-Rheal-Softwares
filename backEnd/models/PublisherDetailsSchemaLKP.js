const mongoose = require("mongoose");

const publisherDetailSchema = new mongoose.Schema({
    // The keys seems to be indepndent of the casing.
  Name: String,
  PublisherID: Number,
});
// 'publisherdetailsLKP is the '
module.exports = mongoose.model("publisherdetailslkp", publisherDetailSchema);
