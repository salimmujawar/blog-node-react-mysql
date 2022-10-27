import express, {Router} from "express"
import {register, login, logout} from "../controllers/authController.js";

const router = express.Router()

router.post("/auth/register", register);
router.post("/login", login);
router.post("/logout", logout);


export default router;