import { Router } from "express";
import authControllers from "./auth.controllers";

const router = Router();
router.post("/register", authControllers.register);
router.post("/login", authControllers.login);
export default router;
