const express = require('express');
require('dotenv').config();
const app = express();

const route = require('./route/mainRoute');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',route);
app.all('*',(req,res)=>{
    res.status(404).send("Not Found");
})
module.exports= app;