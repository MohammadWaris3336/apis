const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, required: true}
});

module.exports = mongoose.model("movies", movieSchema);

