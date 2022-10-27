import {db} from "../config/db.js"
import bcrypt from "bcrypt"

export const register = (req, res) => {
  //CHECK USER EXIST
  const sql = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(sql, [req.body.email, req.body.username], (err, data) => {
      if(err) {
        return res.json(err);
      }
      if(data.length){
        return res.status(409).json("User already exist!");
      }
      //Hash the password and create the users
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const insertSql = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
      const values = [
        req.body.username,
        req.body.email,
        hash
      ]
      db.query(insertSql, [values], (err, data) => {
        if(err) {
          return res.json(err);
        }else {
          return res.status(200).json("User has been created!!!")
        }
      });
  });
}

export const login = (req, res) => {
  //CHECK USER EXIST
  const sql = "SELECT * FROM users WHERE username = ?";

  db.query(sql, [req.body.username], (err, data) => {
    if(err) {
      return res.json(err);
    }
    if(data.length){
      return res.status(404).json("User not found!");
    }
    //Check for password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
    if(isPasswordCorrect){
      return res.status(404).json("Wrong password!");
    }
  })
}

export const logout = (req, res) => {
  
}