const mongoose = require("mongoose");

module.exports = async function(path) {
  mongoose.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("[DB] Connected to database"))
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });
};