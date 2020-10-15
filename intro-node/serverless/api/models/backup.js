const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const back_orders = mongoose.model('back_order',new Schema({
    meal_id: { type: Schema.Types.ObjectId, ref: 'meal' },
    meal_name: String,
    user_id: String,
}));

module.exports = back_orders;