require('dotenv').config();
const express=require('express');
const app=express();
const routes=require('./routes/app');
const cors=require('cors');

// json urlencoded
app.use(express.json());
app.use(express.urlencoded());

app.use(cors());
app.options('*', cors());

// routes
app.use('/api/v1', routes);

module.exports=app;