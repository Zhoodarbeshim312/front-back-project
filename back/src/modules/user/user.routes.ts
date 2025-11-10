import { Router } from "express";
import userControllers from "./user.controllers";

const router = Router();
// router.get("/getUsers", userControllers.getAllUsers);
export default router;
/**
 * @openapi
 * /api/users/getUsers:
 *   get:
 *     summary: Получить всех пользователей
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Список всех пользователей
 */
router.get("/getUsers", userControllers.getAllUsers);
