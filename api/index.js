import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import routes from "./routes/web.js";

const app =express()

app.use(express.json())




//init all web routes
app.use("/api/posts", routes);

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listinign to port: ${port}`);
})