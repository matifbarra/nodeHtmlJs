const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const users = mongoose.model('user',new Schema({
    nombre: String,
    direccion: String,
    email: String,
    password: String,
    salt: String,
    role: { type:String, default:'user'},
}));

module.exports = users;