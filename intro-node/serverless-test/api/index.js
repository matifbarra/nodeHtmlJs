
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const meals = require('./routes/meals.js');
const orders = require('./routes/orders.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MondoDB Connection
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});


// using express(via app) to pass requests (that contains 'api/meals' 'api/orders') 
//to directories containing the respectives js files.   
app.use('/api/meals', meals);
app.use('/api/orders', orders);

// exporting app to others modules
module.exports = app;


