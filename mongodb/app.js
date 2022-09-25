const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Userer = require('./users');
var http = require('http').createServer(app);



mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0.mkua9he.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
var mangoClient = Userer.MongoClient;
const data = Userer.find({}, function(err, zes){
    if (err) console.warn(err);
    console.warn(zes);

});

app.get('/', (req, res)=>{
res.send(data);
});



http.listen(8080);