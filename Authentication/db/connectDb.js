const mongoose=require('mongoose')

 async function ConnectDB(url){
         try {
          await mongoose.connect(url,{dbName:'authentication'})
            console.log('Database connected')
         } catch (error) {
            console.log(error)
         }
}
module.exports=ConnectDB;