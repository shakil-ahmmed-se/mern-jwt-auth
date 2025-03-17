import "dotenv/config";
import express, { Request, Response, urlencoded } from "express";
import connectToDatabase from "./config/db";
import { APP_ORIGIN } from "./constants/env";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";
import catchErrors from "./utils/catchErrrors";
import { OK } from "./constants/http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.get(
  "/", (req, res, next) => {
    res.status(OK).json({
      status: "healthy",
    });
  })


app.use('/auth', authRoutes);

// error handler middleware
app.use(errorHandler);

app.listen(4004, async () => {
  console.log(`Listening port 4004`);
  await connectToDatabase();
});
