import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConfig.js";
import authRoute from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  connectDB();
  console.log(`Server is listening on port ${port}`);
});
