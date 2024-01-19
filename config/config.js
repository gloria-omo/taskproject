const mongoose = require('mongoose')
require('dotenv').config();

const DB = process.env.DB

mongoose.connect(DB).then(()=>{
    console.log('Database connection established')
}).catch((error)=>{
    console.log('Unable to connect database') 
})