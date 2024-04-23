const mongoose = require('mongoose')

const drinkSchema = new mongoose.Schema({

    title: String,
    body: String

})

const Drink = mongoose.model('drinks',drinkSchema)

module.exports = Drink