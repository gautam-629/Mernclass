const express=require('express');
const Example = require('../controller/session');
// const Example=require("../controller/session")
const router=express.Router();

router.get('/example',Example.example);

module.exports=router;