// Auth Service

const User = require("../models/user.model");
const AppError = require("../utils/error.util");

async function getUser(id) {
  return (await User.findById(id));
}

async function registerUser(name, email, password) {
  return true;
}

async function loginUser(email, password) {
  return true;
}

module.exports = {
  getUser,
  registerUser,
  loginUser
};