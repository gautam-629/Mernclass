import express from 'express';
const router = express.Router();
import StudentController from '../controllers/studentController.js';

router.get('/getalldoc', StudentController.getAllDoc)
router.post('/createdoc', StudentController.createDoc)
router.get('/getsingledoc/:id', StudentController.getSingleDocById)
router.put('/updatedoc/:id', StudentController.updateDocById)
router.delete('/deletedoc/:id', StudentController.deleteDocById)

export default router