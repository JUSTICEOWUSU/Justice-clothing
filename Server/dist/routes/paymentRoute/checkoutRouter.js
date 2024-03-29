"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutRouter = void 0;
const express_1 = require("express");
const checkoutController_1 = __importDefault(require("./checkoutController"));
const checkoutRouter = (0, express_1.Router)();
exports.checkoutRouter = checkoutRouter;
checkoutRouter.post("/", checkoutController_1.default);
