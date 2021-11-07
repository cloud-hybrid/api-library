"use strict";
exports.__esModule = true;
exports.Library = void 0;
var tslib_1 = require("tslib");
var module_js_1 = require("./module.js");
var Fetch = (0, tslib_1.__importStar)(require("node-fetch"));
exports.Library = {
    Compression: module_js_1.Compression,
    Framework: module_js_1.Framework,
    Database: module_js_1.Database,
    Octokit: module_js_1.Octokit,
    Router: module_js_1.Router,
    Fetch: Fetch,
    Axios: module_js_1.Axios,
    ORM: module_js_1.ORM
};
exports["default"] = exports.Library;
