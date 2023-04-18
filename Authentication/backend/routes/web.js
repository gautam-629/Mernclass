const express=require('express');
const RegisterController=require("../controller/auth/RegisterController");
const LoginController = require('../controller/auth/loginController');
const ProductController = require('../controller/product/productController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
let router=express.Router();

router.post('/register',RegisterController.register)
router.post('/login',LoginController.login)
router.get('/logout',LoginController.logout)


module.exports=router;