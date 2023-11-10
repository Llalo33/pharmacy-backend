const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    userMedicineId : [{
        type : mongoose.SchemaTypes.Array,
        ref : 'Medicine'
    }],
    check : Number,
    isAdmin : {
        type : Boolean,
        default : false
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User