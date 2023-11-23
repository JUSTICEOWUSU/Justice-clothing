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
const HeroSectionData_1 = __importDefault(require("../database/DATA/HeroSectionData"));
const categoriesModel_1 = __importDefault(require("../database/DBModels/categoriesModel"));
const loadCategoryData = () => __awaiter(void 0, void 0, void 0, function* () {
    const checkCategoryDataExistence = yield categoriesModel_1.default.findOne({
        title: HeroSectionData_1.default[0].title
    }, { _id: 0 });
    if (!checkCategoryDataExistence) {
        // DATA LOADING STARTED
        HeroSectionData_1.default.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const newCategoryItem = new categoriesModel_1.default(item);
            // SAVING DATA
            try {
                yield newCategoryItem.save();
                console.log('HOMEPAGE DATA saved successfully');
            }
            catch (error) {
                console.log('Error saving HOMEPAGE DATA user:', error);
            }
        }));
    }
    else {
        return console.log("HOMEPAGE DATA HAS ALREADY BEEN LOADED");
    }
    return console.log("ALL HOMEPAGE DATA HAS BEEN LOADED SUCCESSFULLY");
});
exports.default = loadCategoryData;
