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
const categoriesModel_1 = __importDefault(require("../../database/DBModels/categoriesModel"));
const httpGetCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryData = yield categoriesModel_1.default.find({}, { _id: 0, __v: 0 }).sort({ id: 1 });
    if (!categoryData) {
        return res
            .status(501)
            .json({ error: 'server error, please try again' });
    }
    return res
        .status(200)
        .json({ categories: categoryData });
});
exports.default = httpGetCategories;
