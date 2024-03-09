const User = require('../modal/User');
const jwt = require('jsonwebtoken');

exports.register = async (req,res)=>{
    try{
        let user =await new User();
        user.username = req.body.username;
        user.email = req.body.email;
        user.mobile= req.body.phone;
        user.password = req.body.password;
        user.roleId = 2;
        await user.save();
        return res.json(user);
    }catch(err){
        return res.json(err);
    }
}


exports.login = async (req,res)=>{
    try{
        if(req.body.email && req.body.password){
            let user =await  User.findOne({where:{email:req.body.email}})
            if(!user) return res.status(401).send({error:"Email not found."});
        
            if (!(await user.checkPassword(req.body.password))) {
                return res.status(401).send({error:'Password does not match.'})
            }
            let token = jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'1d'});
            return res.json({message:'login successfully',token:token,user:user});
        }
    }catch(err){
        return res.json(err);
    }
}