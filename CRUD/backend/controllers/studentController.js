import StudentModel from '../models/Student.js'

class StudentController {
  static createDoc = async (req, res) =>{
    try {
      
      const {name, age, fees}= req.body;
      console.log(name,age,fees);
      const doc = new StudentModel({
        name:name,
        age:age,
        fees:fees
      })
      const result = await doc.save()
      res.status(201).json({student:result})
    } catch (error) {
      console.log(error)
    }
  }

  static getAllDoc = async (req, res) =>{
    try {
      const result = await StudentModel.find()
      res.status(201).json({student:result})
    } catch (error) {
      console.log(error)
    }
  }

  static getSingleDocById = async (req, res) =>{
    try {
      const result = await StudentModel.findById(req.params.id)
      res.status(201).json({student:result})
    } catch (error) {
      console.log(error)
    }
  }

  static updateDocById = async (req, res) =>{
   try {
     const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
     res.status(201).json({student:result})
   } catch (error) {
     console.log(error)
   }
  }

  static deleteDocById = async (req, res) =>{
    try {
      console.log(req.params.id)
      const result = await StudentModel.findByIdAndDelete(req.params.id)
      // res.status(204).json({student:result})
      res.status(200).json({ message: 'Document deleted successfully' });
    } catch (error) {
      console.log(error)
    }
  }
}

export default StudentController