const mongoose=require("mongoose")
async function ConnectDb (url){
    try {
      await mongoose.connect(url,{dbName:'class'})
        console.log("DataBase Connected")
    } catch (error) {
        console.log('error')
    }
}
module.exports=ConnectDb;