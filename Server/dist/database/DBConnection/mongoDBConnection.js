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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = exports.connectToDatabase = void 0;
const mongoose_1 = require("mongoose");
Object.defineProperty(exports, "connection", { enumerable: true, get: function () { return mongoose_1.connection; } });
mongoose_1.connection.once("open", () => {
    console.log("Successfully connected to mongoDb database");
});
mongoose_1.connection.once("error", () => {
    console.log("Sorry! Could not connect to mongoDB database");
});
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    // Connecting to MONGODB Database
    yield (0, mongoose_1.connect)(`${process.env.MONGODB_KEY}`);
});
exports.connectToDatabase = connectToDatabase;
