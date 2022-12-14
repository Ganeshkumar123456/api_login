import { Request, Response, NextFunction, Router } from 'express';
import * as ErrorHandler from '../utils/errorHandler';

const handle404Error = (router: Router) => {
  router.use((req: Request, res: Response) => {
    ErrorHandler.notFoundError();
  });
};

type ErrorWithCode = Error & { code?: string };

const handleClientError = (router: Router) => {
  router.use(
    (err: ErrorWithCode, req: Request, res: Response, next: NextFunction) => {
      ErrorHandler.clientError(err, res, next);
    }
  );
};

const handleServerError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.ServerError(err, res, next);
  });
};

export default [handle404Error, handleClientError, handleServerError];