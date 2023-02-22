import express, { response } from "express";
import "express-async-errors";
import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/appError";
import { userRoutes } from "./routes/user/user.routes";

var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});
export default app;
