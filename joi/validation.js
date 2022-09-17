const joi = require('joi');
const schema = joi.object()
    .keys({
        name: joi.string()
            .min(1)
            .max(10)
            .required(),
        age:joi.number()
            .integer()
            .max(10)

    })


    const data={
        name: "umer",
        age:11
    }

    const result = schema.validate(data);
    console.log(result); 