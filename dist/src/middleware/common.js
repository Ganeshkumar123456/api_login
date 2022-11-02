"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBodyRequestParsing = void 0;
var express = require('express');
const cors = require('cors');
const handleBodyRequestParsing = (router) => {
    // support application/json type post data
    router.use(express.json({ limit: '50mb' }));
    // support application/x-www-form-urlencoded post data
    router.use(express.urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit: 1000000,
    }));
};
exports.handleBodyRequestParsing = handleBodyRequestParsing;
