
// Custom error class

class AppError extends Error {
  constructor(code, message) {
    super();
    this.code = code;
    this.message = message;
    console.log(2)
  }
}

module.exports = AppError;