"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userModel = new mongoose_1.Schema({
    username: String,
    id: Number,
    email: {
        type: String,
        required: true
    }
});
var users = (0, mongoose_1.model)("User", userModel);
exports.default = users;
