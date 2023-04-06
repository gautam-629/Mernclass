const express=require('express')
const session=require('express-session')
const route=require("./routes/web")
let app=express();

//session
app.use(session({
    name:"gaurab",
    secret:'I love You',
    resave:false,
    saveUninitialized:true
}));

// routes
app.use('/api',route)

app.listen(8000,()=>{
    console.log('ServerRunnin at port 8000');
})