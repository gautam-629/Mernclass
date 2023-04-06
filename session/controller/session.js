class Example{
    static example(req,res){
        if(req.session.count){
            req.session.count++;
        }
        else{
            req.session.count=1;
        }
        res.send(`Count:${req.session.count}`)

        //
        // res.session.login=true;
        // if(!req.session.login){
        //     redirect("/login")
        // }
    }
}
module.exports=Example;