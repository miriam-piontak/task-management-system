//בשביל לייצר ראוטר
import express from "express";
//ייבוא קונטרולר לר לשכוח להוסיף בסוף js
import tasksController from "../controllers/tasksController.js";
//יצירת  הראוטר
const tasksRouter=express.Router();

//יצירת ניתובים עבור כל פונקציה שיצרנו בקונטרולר
tasksRouter.get("/getAllTasks",tasksController.get);
tasksRouter.get("/getTaskById/:id",tasksController.getById);
tasksRouter.delete("/deleteTask/:id",tasksController.dell);
tasksRouter.post("/addTask",tasksController.add);
tasksRouter.get("/getTaskByUserId/:userId",tasksController.getByTz);

//לבסוף כמובן נייצא  את הראוטר
export default tasksRouter;

