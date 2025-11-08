"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../config/prisma");
const getAllUsers = async (req, res) => {
    try {
        const users = await prisma_1.prisma.user.findMany({
            select: {
                id: true,
                username: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        res.status(200).json({
            success: true,
            users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in getAllUsers: ${error}`,
        });
    }
};
exports.default = { getAllUsers };
//# sourceMappingURL=user.controllers.js.map