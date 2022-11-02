import { logger } from '../config/logger';
//import { dbLogger } from "../config/logger";
import { Constants } from '../config/constants';
const { LOGS } = process.env;
// export const logInfo= (req:Request,msg:any) => {
//     logger.info({
//         url:BASE_URL+req.path,
//         message: msg,
//         date_time:new Date(),
//       });
// };
export const logInfo = (
  fileName: any,
  typeOfFile: any,
  actionName: any,
  msg: any
) => {
  if (LOGS != undefined && LOGS === Constants.SERVER)
    logger.info({
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
export const logError = (
  fileName: any,
  typeOfFile: any,
  actionName: any,
  msg: any
) => {
  if (LOGS != undefined && LOGS === Constants.SERVER)
    logger.error({
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