import { Router } from 'express';
var express = require('express');
import parser from 'body-parser';

const cors = require('cors');

export const handleBodyRequestParsing = (router: Router) => {
  // support application/json type post data
  router.use(express.json({ limit: '50mb' }));
  // support application/x-www-form-urlencoded post data
  router.use(
    express.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 1000000,
    })
  );
};