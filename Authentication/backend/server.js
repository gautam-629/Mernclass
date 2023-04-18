const express=require("express");
const router=require('./routes/web');
const ConnectDb=require("./db/connectdb");
const parser=require('cookie-parser');
const cors=require('cors')
let app=express()

//databse
ConnectDb('mongodb://localhost:27017');

//set cors
app.use(cors())
//set cookie
app.use(parser())

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
//load routes
app.use('/api',router)

app.listen(5000,()=>{
    console.log(`ServerRunning at port 5000`)
})