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
const ShopData_1 = require("../database/DATA/ShopData");
const storeItemsModel_1 = __importDefault(require("../database/DBModels/storeItemsModel"));
const toBeLoadedData = [ShopData_1.Mens, ShopData_1.Women, ShopData_1.Sneakers, ShopData_1.Hats, ShopData_1.Jackets];
const loadStoreData = () => __awaiter(void 0, void 0, void 0, function* () {
    const checkStoreDataExistence = yield storeItemsModel_1.default.findOne({
        title: ShopData_1.Mens.title
    }, { _id: 0, "items._id": 0 });
    if (!checkStoreDataExistence) {
        // DATA LOADING STARTED
        toBeLoadedData.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const newStoreItem = new storeItemsModel_1.default(item);
            try {
                yield newStoreItem.save();
                console.log('User saved successfully');
            }
            catch (error) {
                console.log('Error saving the user:', error);
            }
        }));
    }
    else {
        return console.log("DATA HAS ALREADY BEEN LOADED");
    }
    return console.log("ALL DATA HAS BEEN LOADED SUCCESSFULLY");
});
exports.default = loadStoreData;
