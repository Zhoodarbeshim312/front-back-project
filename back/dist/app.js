"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const buildServer = () => {
    const server = (0, express_1.default)();
    server.use(express_1.default.json());
    server.get("/", (req, res) => {
        res.status(200).json({
            success: true,
            message: "Server run",
        });
    });
    server.use("/api/v1", routes_1.default);
    return server;
};
exports.default = buildServer;
//# sourceMappingURL=app.js.map