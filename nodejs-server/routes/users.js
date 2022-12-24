import express from "express";
import { getUsers } from "../controller/users.js";
const router = express.Router();

router.route("/").get(getUsers);

export default router;
