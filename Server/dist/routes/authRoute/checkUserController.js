"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
(0, dotenv_1.config)();
var checkUserAuthController = function (req, res) {
    var jwtSecret = process.env.JWT_KEY;
    if (req.session && req.body.url) {
        req.session.url = "/".concat(req.body.url);
    }
    if (req.user) {
        try {
            // Verify the JWT token and get the decoded information
            var decodeId = jsonwebtoken_1.default.verify(req.body.token, jwtSecret);
            // Check if the user is authenticated and the decoded ID matches the user's ID
            if (req.user && decodeId && req.user === decodeId.id) {
                var payload = { id: req.user };
                var token = jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn: '24h' });
                return res
                    .status(200)
                    .json({ token: token, isAuthenticated: true });
            }
        }
        catch (error) {
            var payload = { id: req.user };
            var token = jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn: '24h' });
            return res
                .status(200)
                .json({ token: token, isAuthenticated: true });
        }
    }
    // If the user is not authenticated or JWT verification failed, redirect to the login page
    return res.json({ isAuthenticated: false });
};
exports.default = checkUserAuthController;
