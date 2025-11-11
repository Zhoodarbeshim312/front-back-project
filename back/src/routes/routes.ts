import { Router } from "express";
import cors from "cors";
import authRoutes from "../modules/auth/auth.routes";
import productRoutes from "../modules/product/product.routes";
import userRoutes from "../modules/user/user.routes";

const globalRouter = Router();
const corsConfig = {
  origin: ["http://localhost:3000", "http://192.168.0.106:3000"],
};
globalRouter.use("/auth", cors(corsConfig), authRoutes);
globalRouter.use("/products", cors(corsConfig), productRoutes);
globalRouter.use("/users", cors(corsConfig), userRoutes);
export default globalRouter;
