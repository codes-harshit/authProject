import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
