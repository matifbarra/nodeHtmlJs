// VALUE: mongodb+srv://aalvarezMdB:Nm74sc84Cs97lc.@cluster0.ztfck.mongodb.net/almuerzi-db?retryWrites=true&w=majority
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const meals = mongoose.model('meal',new Schema({
    name: String,
    desc: String,
}));

module.exports = meals;