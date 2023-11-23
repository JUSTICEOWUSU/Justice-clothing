"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkoutController_1 = __importDefault(require("./checkoutController"));
const checkoutRouter = (0, express_1.Router)();
checkoutRouter.post("/", checkoutController_1.default);
exports.default = checkoutRouter;
//# sourceMappingURL=checkoutRouter.js.map