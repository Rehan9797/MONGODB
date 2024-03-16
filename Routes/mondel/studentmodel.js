const mongoose = require('mongoose');


//schema
const studentschema = mongoose.Schema({
    name:String,
    age:Number,
    place:String
})
const studentmodele = mongoose.model('student',studentschema);
module.exports=studentmodele;