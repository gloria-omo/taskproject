const mongoose = require('mongoose')

const subModel = new mongoose.Schema({
    subTask:{
        type:Array,
        required:true
    },
    task:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'task'
     }]
})

const sub = mongoose.model('subTask', subModel)

module.exports = sub