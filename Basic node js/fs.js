const fs= require('fs')
const path=require('path')
//make dri
fs.mkdir(path.join(__dirname,'test'),(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Folder created');
})

//create file
fs.writeFile(path.join(__dirname,'test','test.txt'),'Hello Node',(err)=>{
    if(err){
        throw err;
    }
    console.log("file created")
})

// Read a file
fs.readFile(path.join(__dirname,'test','test.txt'),(err,data)=>{
    if(err){
        throw err;
    }
    const content= Buffer.from(data);
    console.log(content.toString())
})
