"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbOptions = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.dbOptions = {
    type: "mysql",
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "msk9959",
    database: "slambook",
    charset: "utf8mb4",
    driver: "mysql",
    insecureAuth: true,
    connectTimeout: 30000,
    acquireTimeout: 30000,
};
