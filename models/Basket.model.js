const mongoose = require('mongoose')

const basketSchema = mongoose.Schema({
    medicineId : [{
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Medicine'
    }],
    userId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'User'
    }
})

const Basket = mongoose.model('Basket', basketSchema)

module.exports = Basket