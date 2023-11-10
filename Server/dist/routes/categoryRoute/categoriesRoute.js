"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var categoriesController_1 = __importDefault(require("./categoriesController"));
var categoriesRouter = (0, express_1.Router)();
categoriesRouter.get("/", categoriesController_1.default);
exports.default = categoriesRouter;
