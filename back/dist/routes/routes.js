"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const globalRouter = (0, express_1.Router)();
const corsConfig = {
    origin: ["http://localhost:5173"],
};
exports.default = globalRouter;
//# sourceMappingURL=routes.js.map