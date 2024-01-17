const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/AppError");

const app = express();
app.set("trust proxy", true);

// Set security HTTP headers
app.use(helmet());

// Api logging
app.use(morgan("dev"));

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// API Routes declaration
const baseRoute = "/api/v1";

// invalid route handler
app.all("*", (req, _, next) => {
  next(new AppError(`The route ${req.originalUrl} does not exists`, 404));
});

// global error handler
app.use(globalErrorHandler);

module.exports = app;
