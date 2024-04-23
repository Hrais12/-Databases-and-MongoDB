const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({

    name: String,
    inventury : Number

})

const Fruit = mongoose.model('fruits', fruitSchema)

module.exports = Fruit