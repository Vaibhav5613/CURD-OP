import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(express.json());

const port = process.env.PORT || 6000;

import userRoutes  from"./routes/userRoutes.js"

app.use("/api/user", userRoutes);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started at port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error :", error);
  });
