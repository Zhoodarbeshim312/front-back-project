import { Router } from "express";
import cors from "cors";
import authRoutes from "../modules/auth/auth.routes";
import productRoutes from "../modules/product/product.routes";
import userRoutes from "../modules/user/user.routes";

const globalRouter = Router();
const corsConfig = {
  origin: ["http://localhost:5173"],
};
globalRouter.use("/auth", cors(corsConfig), authRoutes);
globalRouter.use("/product", cors(corsConfig), productRoutes);
globalRouter.use("/user", cors(corsConfig), userRoutes);
export default globalRouter;
