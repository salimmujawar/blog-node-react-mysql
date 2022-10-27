import {db} from "../config/db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
    if (data.length === 0){
      return res.status(404).json("User not found!");
    }
    
    //Check for password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
    if(!isPasswordCorrect){
      return res.status(404).json("Wrong password!");
    }

    //send json token to identify us
    const token = jwt.sign({id:data[0].id}, "jwtkey")
    const {password, ...other} = data[0]

    res.cookie("access_token", token, {
      httpOnly:true
    })
    .status(200)
    .json(other);

  })
}

export const logout = (req, res) => {
  
}