const mongoose=require("mongoose")
async function ConnectDb (url){
    try {
      await mongoose.connect(url,{dbName:'class'})
        console.log("Database connected")
    } catch (error) {
        console.log("Database Error :"+ error)
    }

    
}
module.exports=ConnectDb;

