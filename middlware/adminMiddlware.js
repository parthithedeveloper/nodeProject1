const jwt = require('jsonwebtoken');
const User = require("../modal/User");

exports.adminCheck = async (req,res,next)=>{
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.json("No Token Provided").status(401);
    try {
      let tokenData = await jwt.verify(token, process.env.JWT_SECRET);
      let user =await User.findByPk(tokenData.id);
      if(user.roleId != 1){
        return res.json('un Autharizeed');
      }
      req.user = user;
      next();
    } catch (err) {
      res.json(err);
    }
}