const mongoose = require('mongoose');

let teamSchema = new mongoose.Schema({
    name: String,
    steps: Number,
    points: Number
});

module.exports = mongoose.model('Team', teamSchema);