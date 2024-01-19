const mongoose = require('mongoose')

const userModel =  new mongoose.Schema({
         firstName:{
            type:String,
            required:true
         },
         lastName:{
            type:String,
            required:true
         },
         email:{
            type:String,
            required:true
         },
         phoneNumber:{
                type:String,
                required:true
         },
         password:{
            type:String,
            required:true
         },
         confirmPassword:{
            type:String,
            required:true
         },
         logOut:{
            type:Boolean
         },
         task:[{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'task'
         }],
         status:[{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'status'
         }]
},{timestamps:true})

const User = mongoose.model('User', userModel)

module.exports = User 