const express=require('express');
const RegisterController=require("../controller/auth/RegisterController");
const LoginController = require('../controller/auth/loginController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const ProductController = require('../controller/product/ProductController');
let router=express.Router();

router.post('/register',RegisterController.register)
router.post('/login',LoginController.login)
router.get('/logout',LoginController.logout)

router.get('/product',admin,ProductController.createProduct)

module.exports=router;