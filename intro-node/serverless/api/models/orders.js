// VALUE: mongodb+srv://aalvarezMdB:Nm74sc84Cs97lc.@cluster0.ztfck.mongodb.net/almuerzi-db?retryWrites=true&w=majority
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const orders = mongoose.model('order',new schema({
    meal_id: {type: schema.Types.ObjectId, ref: 'meal'},
    user_id: String,
}));

module.exports = orders;

