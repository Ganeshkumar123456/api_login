"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logInfo = void 0;
const logger_1 = require("../config/logger");
//import { dbLogger } from "../config/logger";
const constants_1 = require("../config/constants");
const { LOGS } = process.env;
// export const logInfo= (req:Request,msg:any) => {
//     logger.info({
//         url:BASE_URL+req.path,
//         message: msg,
//         date_time:new Date(),
//       });
// };
const logInfo = (fileName, typeOfFile, actionName, msg) => {
    if (LOGS != undefined && LOGS === constants_1.Constants.SERVER)
        logger_1.logger.info({
            file: fileName,
            type: typeOfFile,
            action: actionName,
            message: msg,
            date_time: new Date(),
        });
    else {
        // dbLogger.info({message: msg});
    }
};
exports.logInfo = logInfo;
const logError = (fileName, typeOfFile, actionName, msg) => {
    if (LOGS != undefined && LOGS === constants_1.Constants.SERVER)
        logger_1.logger.error({
            file: fileName,
            type: typeOfFile,
            action: actionName,
            message: msg,
            date_time: new Date(),
        });
    else {
        // dbLogger.error({message: msg});
    }
};
exports.logError = logError;
