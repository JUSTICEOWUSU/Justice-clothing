"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Individual Item Model
const ItemModel = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
// Main StoreItems Model
const storeItemModel = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    routeName: {
        type: String,
        required: true
    },
    items: {
        type: [ItemModel]
    },
});
const storeItems = (0, mongoose_1.model)("StoreItem", storeItemModel);
exports.default = storeItems;
