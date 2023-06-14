class ProductController{
  static  createProduct(req,res){
       return res.status(201).json({message:"All ok"})
    }
}
module.exports=ProductController;