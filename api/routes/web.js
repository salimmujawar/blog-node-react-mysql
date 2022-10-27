import express, {Router} from "express"
import {register, login, logout} from "../controllers/authController.js";
import { getPosts, addPost, deletePost, getPost, updatePost } from "../controllers/postController.js";

const router = express.Router()

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/auth/logout", logout);

router.get("/posts", getPosts);
router.get("/posts:id", getPost);
router.post("/posts", addPost);
router.delete("/posts:id", deletePost);
router.put("/posts:id", updatePost);


export default router;