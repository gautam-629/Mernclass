const User=require('../models/user')
async function admin(req,res,next){
    try {
        const user= await User.findOne({_id:req.user._id});
        if(user.role==='admin'){
            next()
        }
        else{
            return res.status(401).json({message:'Unauthorzed'})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports=admin;