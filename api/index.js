import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import routes from "./routes/web.js";
import cookieParser from "cookie-parser";

const app =express()

app.use(express.json())
app.use(cookieParser())

//init all web routes
app.use("/api", routes);

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listinign to port: ${port}`);
})