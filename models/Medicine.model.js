const mongoose = require('mongoose')

const medicineSchema = mongoose.Schema({
    name : String,
    description : String,
    price : Number,
    categoryId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Category'
    },
    recipe : {
        type : Boolean,
        default : false
    },
})

const Medicine = mongoose.model('Medicine', medicineSchema)

module.exports = Medicine