const express = require('express');
const connectDB = require('./config/config')
const dotenv = require('dotenv');
const morgan = require('morgan');
require('colors');

//config dotenv
dotenv.config()

connectDB()
const app = express()
//middlewares
app.use(express.json())
app.use(morgan('dev'));

//routea
app.use('/api/pizzas',require('./routes/pizzaRoute'));
app.use('/api/users',require("./routes/userRoutes"));
app.use('/api/orders', require("./routes/orderRoute"));

app.get('/',(req,res)=>{
  res.send('<h1>Hello from Node Server</h1>')
})
const port = process.env.PORT||8080
app.listen(8080,()=>{
    console.log(`Server Running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta);
})
