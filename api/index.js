import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";

const app =express()

app.use(express.json())

let port = process.env.PORT || 8080;



app.listen(port, () => {
  console.log(`Listinign to port: ${port}`);
})