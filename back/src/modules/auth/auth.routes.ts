import { Router } from "express";
import authControllers from "./auth.controllers";

const router = Router();
// router.post("/register", authControllers.register);
// router.post("/login", authControllers.login);
export default router;

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     summary: Регистрация нового пользователя
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "user123"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: Успешная регистрация
 */
router.post("/register", authControllers.register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Логин пользователя
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "user123"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Успешный вход
 */
router.post("/login", authControllers.login);
