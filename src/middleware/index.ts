import { handleLogging } from './logging';
import { handleBodyRequestParsing } from './common';

export default [
  // handleCors,
  // handleCompression,
  // handleCookie,
  // handleAPIDocs,
  handleBodyRequestParsing,
  handleLogging,
];