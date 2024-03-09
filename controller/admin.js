const User = require('../modal/User');

exports.getAllUser = async (req,res)=>{
    let user =await User.findAll({attributes: ['username', 'mobile','email']});
    return res.json(user);
}