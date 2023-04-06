const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
},{timestamps:true})

// table/collection
const User=mongoose.model("users",userSchema);
module.exports=User;


