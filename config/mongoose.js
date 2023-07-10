const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://salmanaligola1998:yvo6VsA0yXZVdihr@cluster0.lr6ae6y.mongodb.net/?retryWrites=true&w=majority');
    
const connectParams={
     useNewUrlParser:true,
     useUnifiedTopology:true 
 }
 

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});

 
module.exports = db;  