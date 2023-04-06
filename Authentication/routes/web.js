const express=require('express');
const RegisterController=require("../controller/auth/register");
const LoginController = require('../controller/auth/loginController');

let router=express.Router();

router.post('/register',RegisterController.register)
router.post('/login',LoginController.login)

module.exports=router;