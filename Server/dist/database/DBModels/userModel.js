"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    username: String,
    id: {
        type: Number,
        required: true
    },
    email: String,
});
const users = (0, mongoose_1.model)("User", userModel);
exports.default = users;
