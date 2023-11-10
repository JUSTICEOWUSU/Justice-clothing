"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var itemsCategorySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    size: String,
    id: {
        type: Number,
        required: true
    },
    linkUrl: {
        type: String,
        required: true
    }
});
var CategoryItems = (0, mongoose_1.model)("StoreCategory", itemsCategorySchema);
exports.default = CategoryItems;
