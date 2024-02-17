import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import globalErrorHandler from "./controllers/errorController.js";
import AppError from "./utils/AppError.js";
import { router as authRouter } from "./routes/authRoutes.js";

const app = express();
app.set("trust proxy", true);

// Set security HTTP headers
app.use(helmet());

// Api logging
app.use(morgan("dev"));

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "16kb" }));

// API Routes declaration
const baseRoute = "/api/v1";
app.use(`${baseRoute}/auth`, authRouter);

// invalid route handler
app.all("*", (req, _, next) => {
  next(new AppError(`The route ${req.originalUrl} does not exists`, 404));
});

// global error handler
app.use(globalErrorHandler);

export default app;
