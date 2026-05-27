import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose"; 
import userrouter from "./routes/usersRoute.js";
import tasksRouter from "./routes/tasksRoute.js";
import typeTasksRouter from "./routes/taskTypesRoute.js";
dotenv.config();

console.log("hellow!!!!!!!!!!!!!");
console.log("hellow!!!!!!!!!!!!!");
console.log("hellow!!!!!!!!!!!!!");
console.log("hellow!!!!!!!!!!!!!");

const app = express(); 
app.use(cors()); 
app.use(bodyParser.json()); 
app.use("/users", userrouter);
app.use("/tasks", tasksRouter);
app.use("/typeTasks", typeTasksRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected successfully to MongoDB!"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(process.env.PORT,()=>{
    console.log("server is running on port " + process.env.PORT);
});