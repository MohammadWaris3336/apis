const mongoose = require('mongoose');
let userschema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    description:String,
    category:String,
    price:Number
});
module.exports=mongoose.model('users',userschema);