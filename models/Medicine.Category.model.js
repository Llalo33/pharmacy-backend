const mongoose = require('mongoose')

const medicineCategorySchema = mongoose.Schema({
    name : String,
    description : String
})

const Category = mongoose.model('Category', medicineCategorySchema)

module.exports = Category