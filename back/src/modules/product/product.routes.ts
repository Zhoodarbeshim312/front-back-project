import { Router } from "express";
import productControllers from "./product.controllers";

const router = Router();
router.post("/addProduct", productControllers.addProduct);
router.get("/getProduct", productControllers.getProduct);
router.delete("/deleteProduct", productControllers.deleteProduct);
router.patch("/updateProduct", productControllers.updateProduct);
export default router;
