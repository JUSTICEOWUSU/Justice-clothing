"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleSignUpController = exports.googleCallBackController = void 0;
const passport_1 = __importDefault(require("passport"));
const googleSignUpController = passport_1.default.authenticate('google', {
    scope: ['profile', 'email']
});
exports.googleSignUpController = googleSignUpController;
const googleCallBackController = passport_1.default.authenticate('google', {
    failureRedirect: "http://localhost:3000/login",
});
exports.googleCallBackController = googleCallBackController;
