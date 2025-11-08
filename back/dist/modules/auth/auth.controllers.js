"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../config/prisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const token_1 = require("../../config/token");
const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existing = await prisma_1.prisma.user.findUnique({
            where: {
                username,
            },
        });
        if (existing) {
            return res.status(401).json({
                success: false,
                message: `Такой пользователь существует!`,
            });
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await prisma_1.prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });
        const token = (0, token_1.generateToken)(user.id);
        res.status(201).json({
            success: true,
            token,
            user,
        });
    }
    catch (error) {
        res.status(501).json({
            success: false,
            error: `Error in register: ${error}`,
        });
    }
};
exports.default = {
    register,
};
//# sourceMappingURL=auth.controllers.js.map