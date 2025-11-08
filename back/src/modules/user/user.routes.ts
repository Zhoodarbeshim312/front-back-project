import { Router } from "express";
import userControllers from "./user.controllers";

const router = Router();
router.get("/getUsers", userControllers.getAllUsers);
export default router;
