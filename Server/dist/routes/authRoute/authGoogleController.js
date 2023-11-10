"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleSignUpController = exports.googleCallBackController = void 0;
var passport_1 = __importDefault(require("passport"));
var googleSignUpController = passport_1.default.authenticate('google', {
    scope: ['email']
});
exports.googleSignUpController = googleSignUpController;
var googleCallBackController = passport_1.default.authenticate('google', {
    failureRedirect: "/login"
});
exports.googleCallBackController = googleCallBackController;
