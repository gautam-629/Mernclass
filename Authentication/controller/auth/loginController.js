
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const JwtService = require('../../services/JWTService');
class LoginController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(401).json({ message: 'userName or password Not Match' });
      }
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(401).json({ message: 'userName or password Not Match' });
      }
      const token = JwtService.sign({ _id: user._id, role: user.role })
      // cookie
      res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httyOnly: true,
      });
      res.send("Token sate");
      // res.status(201).json({message:'All Right'});
    } catch (error) {
      console.log(error)
    }
  }
}
module.exports = LoginController;