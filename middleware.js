const express = require('express');
const app= express();
const router = express.Router();


const check = require('./middlewaretwo');


// app.use(check);

app.get('/', (req, res) => {
res.send("This is Home Page");
});


app.get('/about', check, (req, res) => {
    res.send("This is About page");
    });
router.get('/login', check, (req, res) => {
    res.send("This is Login page");
    });

    app.use('/', router);



app.listen(4500);