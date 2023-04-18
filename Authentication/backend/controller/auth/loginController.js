// CHECKLIST
const User = require("../../models/user");
const bcrypt = require('bcrypt')
const JwtService = require('../../Services/jwtService');
class LoginController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json({ message: 'userName or password Not Match' });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ message: 'userName or password Not Match' });
      }
      // generate Token
      const token = JwtService.sign({ _id: user._id, role: user.role });

      res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httyOnly: true,
      });

      res.status(201).json({ user: user ,isAuth:true})

    } catch (error) {
      console.log(error);
    }
  }
  static logout(req, res) {
    //   res.cookie('token', null, {
    //     expires: new Date(Date.now()),
    //     httpOnly: true
    // })
    res.clearCookie('token');
    res.status(201).json({ user: null, isAuth:false })
  }
}
module.exports = LoginController;