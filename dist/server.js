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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_config_1 = require("./src/middleware/routes.config");
const logger_1 = require("./src/config/logger");
const routes_1 = __importDefault(require("./src/routes"));
const db_1 = require("./src/config/db");
const logHandler_1 = require("./src/utils/logHandler");
const middleware_1 = __importDefault(require("./src/middleware"));
const errorHandlers_1 = __importDefault(require("./src/middleware/errorHandlers"));
dotenv_1.default.config();
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = process.env;
const router = (0, express_1.default)();
const server = http_1.default.createServer(router);
process.on('uncaughtException', (e) => {
    logger_1.logger.error({
        message: `uncaughtException`,
        extra: e,
    });
    process.exit(1);
});
//catches unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
    (0, logHandler_1.logError)(reason, reason, promise, promise);
    logger_1.logger.error({
        message: `unhandledRejection`,
        extra: reason,
    });
    process.exit(1);
});
//catches ctrl+c event
process.on('SIGINT', function () {
    //Close DB connection
    (0, db_1.closeDbConnection)();
});
//do something when app is closing
process.on('exit', function () {
    //Close DB connection
    (0, db_1.closeDbConnection)();
});
//Apply cors rule
router.use(cors());
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
}));
(0, routes_config_1.applyMiddleware)(middleware_1.default, router);
(0, routes_config_1.applyRoutes)(routes_1.default, router);
(0, routes_config_1.applyMiddleware)(errorHandlers_1.default, router);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, db_1.initDbConnection)();
        server.listen(PORT, () => logger_1.logger.info({
            message: `Server is running http://localhost:${PORT}...`,
        }));
    });
}
// App setup
start();
