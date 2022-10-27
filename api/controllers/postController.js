import { db } from "../config/db.js";

export const getPosts = (req, res) => {
  const sql = req.query.cat ? "SELECT * FROM posts WHERE cat=?":"SELECT * FROM posts";

  db.query(sql, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  })
}

export const getPost = (req, res) => {
  const sql =
    "SELECT p.id, `username`, `title`, `post_desc`, p.img, u.img AS userImg, `cat`,p.`created_dt` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(sql, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
}

export const addPost = (req, res) => {
  res.json("from addPost");
}

export const deletePost = (req, res) => {
  res.json("from deletePost");
}

export const updatePost = (req, res) => {
  res.json("from updatePost");
}