
// [ ] check if user is in the database already
// [ ] prepare model
// [ ] store in database
// [ ] generate jwt token
// [ ] send response
const User=require('../../models/user')
const bcrypt=require('bcrypt');
const JwtService = require('../../services/JWTService');
class RegisterController{
     static async register(req,res){
            const {name,email,password}=req.body;
            try {
                // check user
                const exist = await User.exists({ email:email });
            if (exist) {
              return res.status(401).json({ message: 'This email is already taken' });
            }
            // hash password
            const hashPassword= await bcrypt.hash(password,10);

            //store into database
            const user= new User({
                name,
                email,
                password:hashPassword
            })
            const result= await user.save();

            const token=JwtService.sign({_id:result._id,role:result.role})
             
         // cookie
         res.cookie("token", token, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httyOnly: true,
          });
          
          res.send("Token sate");

            // res.status(201).json({user:result})
            } catch (error) {
                console.log(error);
            }
        }
}

module.exports=RegisterController;
