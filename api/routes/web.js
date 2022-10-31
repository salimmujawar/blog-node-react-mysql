import express, {Router} from "express"
import {register, login, logout} from "../controllers/authController.js";
import { getPosts, addPost, deletePost, getPost, updatePost } from "../controllers/postController.js";
import multer from "multer";

const router = express.Router()

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/auth/logout", logout);

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", addPost);
router.delete("/posts/:id", deletePost);
router.put("/posts/:id", updatePost);


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {    
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({storage});

router.post("/upload", upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename)

})

export default router;