import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./route/user.route.js"
import bookRoute from "./route/book.route.js";

dotenv.config();

const app = express()
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4001;
const URI = process.env.MONGODBURI;

//connnect to mongoDb
try {
    mongoose.connect(URI);
    console.log("Connected!!!!!")
} catch (error) {
    console.log("error",error)
}

//defining routes
app.use("/book",bookRoute); 
app.use("/user",userRoute);

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
})