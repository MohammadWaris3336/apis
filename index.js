const express = require("express");
const Joi = require("joi");
const app = express();

app.use(express.json());

const signup = Joi.object({
 email: Joi.string().email().required(),
 password: Joi.string().min(2).max(10).required(),
});

app.post("/signup", (req, res) =>{
  const {error, value} = signup.validate(req.body);


if (error){
  console.log(error);
  return res.send(error.details);
}
res.send("Successfully Login");
});

app.listen(3000, () => {
  console.log("Server Started");
});