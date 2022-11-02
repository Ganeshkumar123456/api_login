var winston = require('winston');
import dotenv from 'dotenv';
dotenv.config();

var options_default = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  table: 'serverLogs',
};

const dbLogger = winston.createLogger({
  transports: [
    //    new winston_mysql(options_default)
  ],
});

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({ handleExceptions: true }),
    new winston.transports.File({
      filename: './error.log',
      level: 'error',
      prepend: true,
      localTime: true,
      datePattern: '.yyyy-MM-dd_HH-mm',
    }),
    new winston.transports.File({
      filename: './info.log',
      level: 'info',
      prepend: true,
      localTime: true,
      datePattern: '.yyyy-MM-dd_HH-mm',
    }),
  ],
});

export { logger };
export { dbLogger };