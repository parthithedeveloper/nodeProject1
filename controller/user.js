const User = require('../modal/User');

exports.getUser = async (req,res)=>{
    let user =await User.findByPk(req.user.id);
    return res.json(user);
}
