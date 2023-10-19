import express from "express";
import { AuthController } from "../controllers/index.js";

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);

export default router