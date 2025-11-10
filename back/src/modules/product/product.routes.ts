// import { Router } from "express";
// import productControllers from "./product.controllers";

// const router = Router();
// router.post("/addProduct", productControllers.addProduct);
// router.get("/getProduct", productControllers.getProduct);
// router.delete("/deleteProduct", productControllers.deleteProduct);
// router.patch("/updateProduct", productControllers.updateProduct);
// export default router;

import { Router } from "express";
import productControllers from "./product.controllers";

const router = Router();

/**
 * @openapi
 * /api/products/addProduct:
 *   post:
 *     summary: Добавить новый продукт
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Новый продукт"
 *               description:
 *                 type: string
 *                 example: "Описание продукта"
 *               price:
 *                 type: number
 *                 example: 1500
 *               rating:
 *                 type: number
 *                 example: 4.5
 *     responses:
 *       201:
 *         description: Продукт успешно добавлен
 */
router.post("/addProduct", productControllers.addProduct);

/**
 * @openapi
 * /api/products/getProduct:
 *   get:
 *     summary: Получить все продукты
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Список всех продуктов
 */
router.get("/getProduct", productControllers.getProduct);

/**
 * @openapi
 * /api/products/deleteProduct:
 *   delete:
 *     summary: Удалить продукт по ID
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         description: ID продукта
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Продукт успешно удалён
 */
router.delete("/deleteProduct", productControllers.deleteProduct);

/**
 * @openapi
 * /api/products/updateProduct:
 *   patch:
 *     summary: Обновить продукт
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               title:
 *                 type: string
 *                 example: "Обновлённый продукт"
 *               description:
 *                 type: string
 *                 example: "Новое описание"
 *               price:
 *                 type: number
 *                 example: 2000
 *               rating:
 *                 type: number
 *                 example: 5
 *     responses:
 *       200:
 *         description: Продукт успешно обновлён
 */
router.patch("/updateProduct", productControllers.updateProduct);

export default router;
