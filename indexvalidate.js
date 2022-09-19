const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

const valid = Joi.object({
    name: Joi.string().min(2).required(),
    age: Joi.number().required()

});

app.post('/valid', (req, res) => {
    const { error, value } = valid.validate(req.body);

    if (error){
        console.log(error);
        return res.send(error.details);
    }
    res.send("successfully login");
});

app.listen(4000);