import { Response, NextFunction } from 'express';
import { HTTPClientError, HTTP404Error } from './httpErros';
import { logger } from '../config/logger';
import { Constants } from '../config/constants';

export const notFoundError = () => {
  throw new HTTP404Error('Method not found.');
};

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err instanceof HTTPClientError) {
    let { message, statusCode } = err;
    logger.warn({
      message,
    });
    res.status(statusCode).send(message);
  } else {
    next(err);
  }
};

export const ServerError = (err: Error, res: Response, next: NextFunction) => {
  let failed_resp = {
    status: 500,
    message: Constants.SERVER_ERROR_MSG,
    data: null,
  };
  if (process.env.NODE_ENV === 'production') {
    res.status(500).send(failed_resp);
  } else {
    failed_resp.message = err.message;
    res.status(500).send(failed_resp);
  }
};
export const InternalServerError = (
  err: Error,
  res: Response,
  next: NextFunction,
  data: any
) => {
  let failed_resp = { status: 500, message: Constants.SERVER_ERROR_MSG };
  if (process.env.NODE_ENV === 'production') {
    res.status(500).send(failed_resp);
  } else {
    res.status(500).send(data);
  }
};

export const ClientServerError = (
  res: Response,
  next: NextFunction,
  data: any
) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(data.status).send(data);
  } else {
    res.status(data.status).send(data);
  }
};