import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConfig.js";
import path from "path";
import authRoute from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  connectDB();
  console.log(`Server is listening on port ${port}`);
});
