"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../../database/DBModels/userModel"));
(0, dotenv_1.config)();
const checkUserAuthController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jwtSecret = process.env.JWT_KEY;
    if (req.body.url) {
        req.session.url = `${req.body.url}`;
        console.log(req.session.url);
    }
    let userExistance;
    // Retrieving UserData From Database
    if (req.user) {
        userExistance = yield userModel_1.default.findOne({
            id: req.user
        });
    }
    // Checking If User is Authenticated
    if (userExistance && req.isAuthenticated()) {
        try {
            // Verify the JWT token and get the decoded information
            const decodeId = jsonwebtoken_1.default.verify(req.body.token, jwtSecret);
            // Check if the user is authenticated and the decoded ID matches the user's ID
            if (decodeId && req.user === decodeId.id) {
                return res
                    .status(200)
                    .json({ token: req.body.token, isAuthenticated: true });
            }
            else {
                return res.json({ isAuthenticated: false });
            }
        }
        catch (error) {
            const payload = { id: req.user };
            const token = jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn: '48hr' });
            return res
                .status(200)
                .json({ token: token, isAuthenticated: true });
        }
    }
    else {
        return res.json({ isAuthenticated: false });
    }
});
exports.default = checkUserAuthController;
