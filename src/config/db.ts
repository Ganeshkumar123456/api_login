import * as mysql from 'mysql';
import * as appConfig from './app.Config';
import { logger } from './logger';
import dotenv from 'dotenv';

dotenv.config();

const dbClient: mysql.Connection = mysql.createConnection(appConfig.dbOptions);

dbClient.on('error', (err: Error) => {
  logger.info({
    message: `MySQL client: Unexpected error on idle client`,
    extra: err,
  });
  process.exit(1);
});

const initDbConnection = async () => {
  await dbClient.connect();
  logger.info({
    message: `Mysql client connected`,
  });
};

const closeDbConnection = async () => {
  await dbClient.end();
  console.log('here')
  logger.info({
    message: `Mysql connection closed`,
  });
};

export { initDbConnection, dbClient, closeDbConnection };
