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
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const mongoDBConnection_1 = require("./database/DBConnection/mongoDBConnection");
const MongoStoreData_1 = __importDefault(require("./MongoDB_DATA/MongoStoreData"));
const MongoCategoriesData_1 = __importDefault(require("./MongoDB_DATA/MongoCategoriesData"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const server = http_1.default.createServer(app_1.default);
const PORT = process.env.PORT || 7000;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoDBConnection_1.connectToDatabase)();
    yield (0, MongoCategoriesData_1.default)();
    yield (0, MongoStoreData_1.default)();
    server.listen(PORT, () => {
        console.log("listening to port: " + PORT);
    });
});
// Starting Server
startServer();
