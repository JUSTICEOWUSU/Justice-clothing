"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authFacebookController_1 = require("./authFacebookController");
var authGoogleController_1 = require("./authGoogleController");
var checkUserController_1 = __importDefault(require("./checkUserController"));
var authLogoutController_1 = __importDefault(require("./authLogoutController"));
var authRouter = (0, express_1.Router)();
authRouter.get("/facebook", authFacebookController_1.facebookSignUpController);
authRouter.get("/facebook/callback", authFacebookController_1.facebookCallBackController, function (req, res) {
    if (req.session && req.session.url) {
        return res.redirect("".concat(req.session.url));
    }
    else {
        return res.redirect('/');
    }
});
authRouter.get("/google", authGoogleController_1.googleSignUpController);
authRouter.get("/google/callback", authGoogleController_1.googleCallBackController, function (req, res) {
    if (req.session && req.session.url) {
        return res.redirect("".concat(req.session.url));
    }
    else {
        return res.redirect('/');
    }
});
authRouter.post("/checkUserAuthentication", checkUserController_1.default);
authRouter.get("/logout", authLogoutController_1.default);
exports.default = authRouter;
