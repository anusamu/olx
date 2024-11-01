const express=require('express');
const app=express();
const morgan=require('morgan')
app.use(morgan('dev'))
const mongoose = require('mongoose');
const cors=require('cors')
require('./dB/connection')
require('dotenv').config();

app.use(express.json()); 
app.use(cors())// Ensure dotenv is configured correctly

const PORT = process.env.PORT 
const productRoutes = require('./routes/productRoutes');

app.use('/app', productRoutes);



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});