const mongoose = require('mongoose')

const taskModel = new mongoose.Schema( {
    title:{
    type:String,
   
 },
 desc:{
    type:String,
  
 },
 subTask:[{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'subTask'
 }],
 status:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Status'
 }

})

 const task = mongoose.model('Task', taskModel)
 module.exports = task