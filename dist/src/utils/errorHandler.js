"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientServerError = exports.InternalServerError = exports.ServerError = exports.clientError = exports.notFoundError = void 0;
const httpErros_1 = require("./httpErros");
const logger_1 = require("../config/logger");
const constants_1 = require("../config/constants");
const notFoundError = () => {
    throw new httpErros_1.HTTP404Error('Method not found.');
};
exports.notFoundError = notFoundError;
const clientError = (err, res, next) => {
    if (err instanceof httpErros_1.HTTPClientError) {
        let { message, statusCode } = err;
        logger_1.logger.warn({
            message,
        });
        res.status(statusCode).send(message);
    }
    else {
        next(err);
    }
};
exports.clientError = clientError;
const ServerError = (err, res, next) => {
    let failed_resp = {
        status: 500,
        message: constants_1.Constants.SERVER_ERROR_MSG,
        data: null,
    };
    if (process.env.NODE_ENV === 'production') {
        res.status(500).send(failed_resp);
    }
    else {
        failed_resp.message = err.message;
        res.status(500).send(failed_resp);
    }
};
exports.ServerError = ServerError;
const InternalServerError = (err, res, next, data) => {
    let failed_resp = { status: 500, message: constants_1.Constants.SERVER_ERROR_MSG };
    if (process.env.NODE_ENV === 'production') {
        res.status(500).send(failed_resp);
    }
    else {
        res.status(500).send(data);
    }
};
exports.InternalServerError = InternalServerError;
const ClientServerError = (res, next, data) => {
    if (process.env.NODE_ENV === 'production') {
        res.status(data.status).send(data);
    }
    else {
        res.status(data.status).send(data);
    }
};
exports.ClientServerError = ClientServerError;
