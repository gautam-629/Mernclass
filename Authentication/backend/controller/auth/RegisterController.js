// [ ] validate the request
// [ ] authorise the request
// [ ] check if user is in the database already
// [ ] prepare model
// [ ] store in database
// [ ] generate jwt token
// [ ] send response
const bcrypt = require('bcrypt');
const User=require('../../models/user');
const JwtService = require('../../Services/jwtService');
class RegisterController {
  static async register(req, res) {
        const { name, email, password } = req.body;
        try {
            const exist = await User.exists({ email: req.body.email });
            if (exist) {
              return  res.status(401).json({ message: 'This email is already taken' });
            }
            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            // prepare the model
            const user = new User({
                name,
                email,
                password: hashedPassword
            });
          const result= await user.save()
          // generate Token
          const token=JwtService.sign({_id:result._id,role:result.role});
        
          // cookie
          res.cookie("token", token, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httyOnly: true,
          });
          
          res.status(201).json({user:result,isAuth:true})
    
        } catch (error) {
           res.status(500).json({message:error});
        }
    }
}
module.exports=RegisterController;