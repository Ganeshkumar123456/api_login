"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("./logging");
const common_1 = require("./common");
exports.default = [
    // handleCors,
    // handleCompression,
    // handleCookie,
    // handleAPIDocs,
    common_1.handleBodyRequestParsing,
    logging_1.handleLogging,
];
