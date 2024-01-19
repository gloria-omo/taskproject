const mongoose = require('mongoose')

const statusSchema = new mongoose.Schema({
    title:{
        type:String
    },
    // desc:{
    //     type:String
    // },

    task:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Task'
    }]
})

const status = mongoose.model('Status', statusSchema)

module.exports = status