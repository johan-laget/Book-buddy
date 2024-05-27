
const User = require("../models/user.model");
const UserModel = require("../models/user.model");

module.exports.getUser= async (req, res)=> {
  const user = new User(req.body)
  await user.save()
  res.status(200).json(user)
}