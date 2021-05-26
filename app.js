const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middleware , executes b4 every API call
app.use(bodyParser.json());

//add routers
const postRouter = require('./Routers/post-route');

//Specify routes
app.get('/',(req,res) => {
 
    res.send("Hello home route!")

})

//User router
app.use('/test-route', postRouter);

//Connect DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true},() => {
    console.log('Connected to DB!!')
})

//Start listening
app.listen(3000);