// module.exports = (req,res) =>{
//     res.send('hola mundo')
// }

// module.exports = (req, res) => {
//     const { name = 'World' } = req.query
//     res.status(200).send(`Hello ${name}!`)
//   }

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true,useUnifiedTopology:true});

app.get('*',(req,res) => {
   res.send('chanchito feliz');
})

module.exports = app;


// conexion con mongoDB
// NAME: 
// VALUE: mongodb+srv://aalvarezMdB:Nm74sc84Cs97lc.@cluster0.ztfck.mongodb.net/almuerzi-db?retryWrites=true&w=majority