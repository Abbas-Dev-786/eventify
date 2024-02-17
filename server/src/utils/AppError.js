class AppError extends Error {
  constructor(message, statusCode, errorObj = {}) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "error" : "fail";
    this.isOperational = true;
    this.errors = errorObj;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
