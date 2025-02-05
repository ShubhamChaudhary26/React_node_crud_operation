import express from "express"
import mongoose, { connect } from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import cors from "cors"
import route from "./routes/userRoutes.js";

const app = express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

const PORT = process.env.PORT || 7000
const URL = process.env.MongoURL

// console.log("MongoDB URL:", process.env.MongoURL);


mongoose.connect(URL).then(() => {
    console.log('Connected Succesfully');
  
app.listen(PORT,()=>{
    console.log(`Your server is running on Port http://localhost:${PORT}`);
})

}).catch(error => console.log(error)
)

app.use('/api',route)
