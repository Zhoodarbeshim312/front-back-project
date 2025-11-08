"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controllers_1 = __importDefault(require("./product.controllers"));
const router = (0, express_1.Router)();
router.post("/addProduct", product_controllers_1.default.addProduct);
router.get("/getProduct", product_controllers_1.default.getProduct);
router.delete("/deleteProduct", product_controllers_1.default.deleteProduct);
router.patch("/updateProduct", product_controllers_1.default.updateProduct);
exports.default = router;
//# sourceMappingURL=product.routes.js.map