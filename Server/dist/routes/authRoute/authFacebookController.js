"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookSignUpController = exports.facebookCallBackController = void 0;
const passport_1 = __importDefault(require("passport"));
const facebookSignUpController = passport_1.default.authenticate("facebook", {
    scope: ["profile", "email"],
});
exports.facebookSignUpController = facebookSignUpController;
const facebookCallBackController = passport_1.default.authenticate("facebook", {
    failureRedirect: "http://localhost:3000/login",
});
exports.facebookCallBackController = facebookCallBackController;
