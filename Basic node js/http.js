const http=require('http');

let app= http.createServer((req,res)=>{
       res.end("<h1>Welcome</h1>");
});

app.listen(5000,()=>{
    console.log('ServerRunning at port 5000');
});