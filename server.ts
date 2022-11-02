import http from 'http';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { applyMiddleware, applyRoutes } from './src/middleware/routes.config';
import { logger } from './src/config/logger';
import routes from './src/routes';
import { initDbConnection, closeDbConnection } from './src/config/db';
import { logError } from './src/utils/logHandler';
import middleware from './src/middleware';
import errorHandlers from './src/middleware/errorHandlers';
dotenv.config();

const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = process.env;
const router = express();
const server = http.createServer(router);

process.on('uncaughtException', (e) => {
  logger.error({
    message: `uncaughtException`,
    extra: e,
  });
  process.exit(1);
});

//catches unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  logError(reason, reason, promise, promise);
  logger.error({
    message: `unhandledRejection`,
    extra: reason,
  });
  process.exit(1);
});

//catches ctrl+c event
process.on('SIGINT', function () {
  //Close DB connection
  closeDbConnection();
});
//do something when app is closing
process.on('exit', function () {
  //Close DB connection
  closeDbConnection();
});

//Apply cors rule
router.use(cors());
router.use(bodyParser.json({ limit: '50mb' }));
router.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
);

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

async function start() {
  await initDbConnection();
  server.listen(PORT, () =>
    logger.info({
      message: `Server is running http://localhost:${PORT}...`,
    })
  );
}

// App setup
start();
