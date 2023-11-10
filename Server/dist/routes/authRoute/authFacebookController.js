"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookSignUpController = exports.facebookCallBackController = void 0;
var passport_1 = __importDefault(require("passport"));
var facebookSignUpController = passport_1.default.authenticate('facebook', {
    scope: ['email']
});
exports.facebookSignUpController = facebookSignUpController;
var facebookCallBackController = passport_1.default.authenticate('facebook', {
    failureRedirect: '/login',
});
exports.facebookCallBackController = facebookCallBackController;
