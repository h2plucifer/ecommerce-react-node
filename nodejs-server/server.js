import express from "express";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import dotenv from "dotenv";
const __filename = fileURLToPath(import.meta.url);
import userRoute from "./routes/users.js";
const router = express.Router();
dotenv.config({ path: path.join(dirname(__filename), "/config/.env") });

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DBURL)
  .then(() => console.log(">>> DB connection successful"))
  .catch((err) => console.log(">>>ERROR - DB Error :: ", err));

const app = express();
app.use((req, res, next) => {
  console.log(
    `${req.method} :: ${req.protocol}://${req.hostname}:${PORT}${req.originalUrl}`
  );
  next();
});
app.use("/api/users", userRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(">>> Server listening at port : ", PORT));
