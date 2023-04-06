const express=require('express')
const Demo=require("../controller/Cookie")
let router=express.Router();

router.get('/setcookie',Demo.set_cookie)
router.get('/getcookie',Demo.get_cookie)

module.exports=router;