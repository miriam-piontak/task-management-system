import mongoose from "mongoose";

const taskTypesSchema = new mongoose.Schema({
    code: Number, 
    typeName:String,             
    color: String,                        
});

export default mongoose.model("TaskType", taskTypesSchema, "TaskTypes");