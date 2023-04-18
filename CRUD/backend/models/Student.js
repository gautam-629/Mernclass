import mongoose from "mongoose";

// Defining Schema
const studentSchema = new mongoose.Schema({
  name:{type:String, required:true, trim:true},
  age:{type:Number, required:true},
  fees:{type:Number, required:true }
})

// Model 
const StudentModel = mongoose.model("student", studentSchema)

export default StudentModel
