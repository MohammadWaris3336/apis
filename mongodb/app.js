const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Userer = require('./users');


mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0.mkua9he.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

Userer.find({}, function(err, zes){
    if (err) console.warn(err);
    console.warn(zes);

});
