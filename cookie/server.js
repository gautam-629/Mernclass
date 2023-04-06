const express= require("express")
const routes=require('./routes/web')
const cookieParser=require("cookie-parser");
let app=express();

// cookie
app.use(cookieParser())
// routes
app.use('/api',routes)

app.listen(5000,()=>{
    console.log("ServerRunning at port 5000")
})

/*
get
post 
delete
put
*/
/*
mc
*/


