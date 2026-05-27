import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    id: Number, 
    description:String,             
    date: Date,               
    taskTypeId:Number,      
    color: String,       
    userId:String                 
});

export default mongoose.model("Task", taskSchema, "Tasks");