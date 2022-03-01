
const User = require("../models/user.model");

module.exports = async function(req, res, next) {
  const adminUser = await User.findById(req.user.id).lean();
  if(!adminUser || !adminUser.admin) {
    return res.status(301).send("You are not allowed access to this resource.");
  }

  next();
};