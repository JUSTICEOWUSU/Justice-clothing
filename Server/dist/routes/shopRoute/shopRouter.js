"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shopController_1 = __importDefault(require("./shopController"));
const shopRouter = (0, express_1.Router)();
shopRouter.get("/", shopController_1.default);
exports.default = shopRouter;
