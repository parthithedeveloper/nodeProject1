const User = require("../modal/User");
jwt = require("jsonwebtoken");

exports.userCheck = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.json("No Token Provided").status(401);
  try {
    let tokenData = await jwt.verify(token, process.env.JWT_SECRET);
    let user =await User.findByPk(tokenData.id);
    req.user = user;
    next();
  } catch (err) {
    res.json(err);
  }
};

