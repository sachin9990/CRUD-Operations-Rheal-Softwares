const mongoose = require('mongoose')

const categoryDetailsSchemaLKP = new mongoose.Schema({
    Name: String,
    CategoryID: Number
})

module.exports = mongoose.model('categorydetailslkp', categoryDetailsSchemaLKP)