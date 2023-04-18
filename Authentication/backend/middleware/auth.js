const JwtService =require('../Services/jwtService')
async function auth(req,res,next){
       try {
        const {token}=req.cookies;
        if(!token){
            return res.status(401).json({message:'unauthorized'})
        }
        const {_id,role}= await JwtService.verify(token);
       const user={
        _id,
        role
       }
       req.user=user;
        next();
       } catch (error) {
        console.log(error)
       }
}

module.exports=auth;