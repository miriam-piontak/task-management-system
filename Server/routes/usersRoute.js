import express from "express";
import userscontroller from "../controllers/usersController.js";
const userrouter=express.Router();
userrouter.get("/getAllusers",userscontroller.get);
userrouter.get("/getUserById/:id",userscontroller.getById);
userrouter.delete("/deleteUser/:id",userscontroller.dell);
userrouter.post("/addUser",userscontroller.add);
userrouter.post("/logInUser",userscontroller.logIn);

export default userrouter;