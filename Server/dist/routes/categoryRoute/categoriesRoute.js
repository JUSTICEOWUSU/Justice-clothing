"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriesController_1 = __importDefault(require("./categoriesController"));
const categoriesRouter = (0, express_1.Router)();
categoriesRouter.get("/", categoriesController_1.default);
exports.default = categoriesRouter;
