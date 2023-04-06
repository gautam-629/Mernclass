class Demo{
  static set_cookie(req,res){
     //set cookie
     res.cookie("username","Binod");
     res.cookie("cart",5);
     res.send("Cookie set")
  }
  static get_cookie(req,res){
     console.log(req.cookies);
     
     res.send("Cookie get")
  }
  static delete_cookie = (req, res) =>{
    res.clearCookie("username")
    res.clearCookie("cart");
    res.send("Cookie Deleted...")
  }
}

module.exports=Demo;