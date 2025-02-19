import express from "express";
const router = express.Router();

import { login } from "../controllers/main.js";
import { dashboard } from "../controllers/main.js";
import authenticationMiddleware from "../middleware/auth.js";

router.route("/dashboard").get(authenticationMiddleware, dashboard);
router.route("/login").post(login);

export default router;
