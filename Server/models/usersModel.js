import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    id: Number, 
    firstName:String,             
    lastName: String,               
    password:String,      
    email: String,           
});

export default mongoose.model("User", usersSchema, "Users");