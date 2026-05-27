//בשביל לייצר ראוטר
import express from "express";
//ייבוא קונטרולר לר לשכוח להוסיף בסוף js
import typeTasksController from "../controllers/taskTypesController.js";
//יצירת  הראוטר
const typeTasksRouter=express.Router();

//יצירת ניתובים עבור כל פונקציה שיצרנו בקונטרולר
typeTasksRouter.get("/getAllTypeTasks",typeTasksController.get);
typeTasksRouter.get("/getTypeTaskById/:id",typeTasksController.getById);
typeTasksRouter.delete("/deleteTypeTask/:id",typeTasksController.dell);
typeTasksRouter.post("/addTypeTask",typeTasksController.add);

//לבסוף כמובן נייצא  את הראוטר
export default typeTasksRouter;