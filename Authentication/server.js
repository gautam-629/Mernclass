const express=require("express");
const connectDb=require('./db/connectDb');
const router=require('./routes/web')
const parser=require('cookie-parser');
let app=express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

//databse
connectDb("mongodb://localhost:27017");

//set cookie
app.use(parser())

//routes
app.use('/api',router);

app.listen(5000,()=>{
    console.log('ServerRunning at port 5000');
})