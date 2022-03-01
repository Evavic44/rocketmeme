
// Auth route

const authService = require("../services/auth.service");

async function getDetails(req, res) {
  try {
    const details = await authService.getUser("kldjf");
    res.send({ details });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
}

async function loginGoogle(req, res) {
  res.send({ token: "Generated token from google login" });
}

async function registerGoogle(req, res) {
  res.send({ token: "Generated token from google registration" });
}

async function loginGithub(req, res) {
  res.send({ token: "Generated token from github login" });
}

async function registerGithub(req, res) {
  res.send({ token: "Generated token from github registration" });
}

module.exports = {
  getDetails,
  loginGoogle,
  registerGoogle,
  loginGithub,
  registerGithub
};